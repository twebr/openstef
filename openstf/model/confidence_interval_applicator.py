import numpy as np
import pandas as pd
from sklearn.base import RegressorMixin


class ConfidenceIntervalApplicator:

    def __init__(self,pj: dict, validation_data: pd.DataFrame) -> None:

        self.pj = pj
        self.validation_data = validation_data

    def add_confidence_interval(self, model: RegressorMixin) -> RegressorMixin:


        # Define some variables
        predicted = None
        self.confidence_interval = pd.DataFrame()

        # Loop over Horizons and ask prediction for each specific horizon
        for horizon in self.validation_data.Horizon.unique():
            # Make subset for this specific horizon
            sub_val = self.validation_data[self.validation_data.Horizon == horizon]

            try:
                predicted = model.predict(
                    sub_val.iloc[:, 1:], sub_val.iloc[:, 0]
                )
            except Exception as e:
                self.logger.error(
                    "Could not get prediction from new model!", exc_info=e
                )

            # Calculate confidence interval for this horizon
            confidence_interval_horizon = self._calculate_confidence_interval(
                sub_val.iloc[:, 0], predicted
            )
            confidence_interval_horizon[
                "horizon"
            ] = horizon  # Label with respective horizon
            self.confidence_interval = self.confidence_interval.append(
                confidence_interval_horizon
            )

            model.confidence_interval = self.confidence_interval

        return model

    @staticmethod
    def _calculate_confidence_interval(realised, predicted):
        """Protected static method to calculate the corrections for a model

        Args:
            realised: pd.series with realised load
            predicted: pd.series with load predicted by new model

        Returns:
            pd.DataFrame: with model corrections
        """
        result = pd.DataFrame(index=range(24), columns=["stdev", "hour"])
        # Calculate the error for each predicted point
        error = realised - predicted
        error.index = error.index.hour  # Hour only, remove the rest
        # For the time starts with 00, 01, 02, etc. TODO (MAKE MORE ELEGANT SOLUTION THAN A LOOP)
        for hour in range(24):
            hour_error = error[error.index == hour]
            result["stdev"].iloc[hour] = np.std(hour_error)
            result["hour"].iloc[hour] = hour

        result = result.astype("float")

        return result


