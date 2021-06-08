# SPDX-FileCopyrightText: 2017-2021 Alliander N.V. <korte.termijn.prognoses@alliander.com> # noqa E501>
#
# SPDX-License-Identifier: MPL-2.0

# -*- coding: utf-8 -*-
"""create_forecast.py

This module contains the CRON job that is periodically executed to make prognoses and
save them in to the database.
This code assumes trained models are available from the persistent storage. If these
are not available run model_train.py to train all models.
To provide the prognoses the folowing steps are carried out:
  1. Get historic training data (TDCV, Load, Weather and APX price data)
  2. Apply features
  3. Load model
  4. Make prediction
  5. Write prediction to the database
  6. Send Teams message if something goes wrong

Example:
    This module is meant to be called directly from a CRON job.
    Alternatively this code can be run directly by running::

        $ python create_forecast.py

Attributes:


"""
from datetime import datetime, timedelta

from openstf.pipeline.create_forecast_sklearn import create_forecast_pipeline
from openstf.tasks.utils.utils import check_status_change, update_status_change
from openstf.tasks.utils.predictionjobloop import PredictionJobLoop
from openstf.tasks.utils.taskcontext import TaskContext

T_BEHIND_DAYS: int = 14
T_AHEAD_DAYS: int = 3


def create_forecast_task(pj: dict, context: TaskContext) -> None:

    # Extract trained models folder
    trained_models_folder = context.config.paths.trained_models_folder

    # Define datetime range for input data
    datetime_start = datetime.utcnow() - timedelta(days=T_BEHIND_DAYS)
    datetime_end = datetime.utcnow() + timedelta(days=T_AHEAD_DAYS)

    # Retrieve input data
    input_data = context.database.get_model_input(
        pid=pj["id"],
        location=[pj["lat"], pj["lon"]],
        datetime_start=datetime_start,
        datetime_end=datetime_end,
    )

    # Make forecast with the forecast pipeline
    forecast = create_forecast_pipeline(pj, input_data, trained_models_folder)

    # Write forecast to the database
    context.database.write_forecast_to_db(forecast, t_ahead_series=True)


def main():
    with TaskContext("create_forecast") as context:
        model_type = ["xgb", "xgb_quantile", "lgb"]

        # status file callback after every iteration
        # TODO change implementation to a database one
        def callback(pj, successful):
            status_id = "Pred {}, {}".format(pj["name"], pj["description"])
            status_code = 0 if successful else 2
            if check_status_change(status_id, status_code):
                context.logger.warning("Status changed", status_code=status_code)
                update_status_change(status_id, status_code)

        PredictionJobLoop(
            context,
            model_type=model_type,
            on_end_callback=callback,
            # Debug specific pid
        ).map(create_forecast_pipeline, context)


if __name__ == "__main__":
    main()
