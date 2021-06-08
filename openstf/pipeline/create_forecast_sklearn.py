# SPDX-FileCopyrightText: 2017-2021 Alliander N.V. <korte.termijn.prognoses@alliander.com> # noqa E501>
#
# SPDX-License-Identifier: MPL-2.0
from typing import Union
from datetime import datetime, timedelta, timezone
from pathlib import Path

import pandas as pd
import structlog
from sklearn.base import RegressorMixin

# from ktpbase.config.config import ConfigManager

from openstf.validation import validation
from openstf.feature_engineering.feature_applicator import (
    OperationalPredictFeatureApplicator,
)
from openstf.model.confidence_interval_applicator import ConfidenceIntervalApplicator

from openstf.model.serializer import PersistentStorageSerializer
from openstf.postprocessing.postprocessing import (
    add_prediction_job_properties_to_forecast,
)
from openstf.model.fallback import generate_fallback


def create_forecast_pipeline(
    pj: dict, input_data: pd.DataFrame, trained_models_folder: Union[str, Path]
) -> pd.DataFrame:

    # Load most recent model for the given pid
    model = PersistentStorageSerializer(
        trained_models_folder=trained_models_folder
    ).load_model(pid=pj["id"])

    return create_forecast_pipeline_core(pj, input_data, model)


def create_forecast_pipeline_core(
    pj: dict, input_data: pd.DataFrame, model: RegressorMixin
) -> pd.DataFrame:
    """Computes the forecasts and confidence intervals given a prediction job and input data.

    Args:
        pj (dict): Prediction job.
        input_data (pandas.DataFrame): Iput data for the prediction.
        model (RegressorMixin): Model to use for this prediction.

    Returns:
        forecast (pandas.DataFrame)
    """
    logger = structlog.get_logger(__name__)

    fallback_strategy = "extreme_day"  # this can later be expanded

    # Validate and clean data
    validated_data = validation.validate(input_data)

    # Add features
    data_with_features = OperationalPredictFeatureApplicator(
        # TODO use saved feature_names (should be saved while training the model)
        horizons=[0.25],
        feature_names=model._Booster.feature_names,
    ).add_features(validated_data)

    # Prep forecast input by selecting only the forecast datetime interval (this is much smaller than the input range)
    forecast_start, forecast_end = generate_forecast_datetime_range(
        pj["resolution_minutes"], pj["horizon_minutes"]
    )
    forecast_input_data = data_with_features[forecast_start:forecast_end]

    # Check if sufficient data is left after cleaning
    if not validation.is_data_sufficient(data_with_features):
        logger.warning(
            "Using fallback forecast",
            forecast_type="fallback",
            pid=pj["id"],
            fallback_strategy=fallback_strategy,
        )
        forecast = generate_fallback(data_with_features, input_data[["load"]])

    else:
        # Predict
        model_forecast = model.predict(forecast_input_data.sort_index(axis=1))
        forecast = pd.DataFrame(
            index=forecast_input_data.index, data={"forecast": model_forecast}
        )

    # Add confidence
    forecast = ConfidenceIntervalApplicator(model).add_confidence_interval(
        forecast, pj["quantiles"]
    )

    # Prepare for output
    forecast = add_prediction_job_properties_to_forecast(
        pj,
        forecast,
    )

    return forecast


def generate_forecast_datetime_range(
    resolution_minutes: int, horizon_minutes: int
) -> tuple[datetime, datetime]:
    # get current date and time UTC
    datetime_utc = datetime.now(timezone.utc)
    # Datetime range for time interval to be predicted
    forecast_start = datetime_utc - timedelta(minutes=resolution_minutes)
    forecast_end = datetime_utc + timedelta(minutes=horizon_minutes)

    return forecast_start, forecast_end
