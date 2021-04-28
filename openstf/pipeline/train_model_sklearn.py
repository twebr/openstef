import joblib

from ktpbase.database import DataBase

from openstf.feature_engineering.feature_applicator import TrainFeatureApplicator
from openstf.model.model_creator import ModelCreator
from openstf.model.reporter import Reporter
from openstf.model_selection.model_selection import split_data_train_validation_test
from openstf.validation.validation import validate, clean, is_data_sufficient

TRAIN_HORIZONS: list[float] = [0.25, 24.0]
MAXIMUM_MODEL_AGE: float = 7

EARLY_STOPPING_ROUNDS: int = 10
PENALTY_FACTOR_OLD_MODEL: float = 1.2



def train_model_pipeline(pj: dict, check_old_model_age: bool = True,
                         compare_to_old: bool = True) -> None:
    # Initialize database
    db = DataBase()

    # Get old model path and age
    old_model_path, old_model_age = # TODO some function here that retrieves age
    old_model_age = 5

    # Check old model age and continue yes/no
    if (old_model_age > MAXIMUM_MODEL_AGE) and check_old_model_age:
        return

    # Get input data
    input_data = db.get_input_data(pj)

    # Get hyper parameters
    hyper_params = db.get_hyper_params(pj)

    # Validate and clean data
    validated_data = clean(validate(input_data))

    # Check if sufficient data is left after cleaning
    if not is_data_sufficient:
        raise (RuntimeError(
            f"Not enough data left after validation for {pj['name']}, check input data!"))

    # Add features
    data_with_features = TrainFeatureApplicator(TRAIN_HORIZONS,
                                                feature_set_list=db.get_featureset(
                                                    hyper_params["featureset_name"])
                                                ).add_features(validated_data)

    # Split data
    train_data, validation_data, test_data = split_data_train_validation_test(
        data_with_features)

    # Create relevant model
    model = ModelCreator(pj).create_model()

    # Configure evals for early stopping
    eval_set = [(train_data.iloc[:, 1:], train_data.iloc[:, 0]),
                (validation_data.iloc[:, 1:], validation_data.iloc[:, 0])]

    model.set_params(hyper_params).fit(train_data.iloc[:, 1:], train_data.iloc[:, 0],
                                       eval_set=eval_set,
                                       early_stopping_rounds=EARLY_STOPPING_ROUNDS)

    # Check if new model is better than old model
    if compare_to_old:
        old_model = joblib.load(old_model_path)
        combined = train_data.append(validation_data)

        # Score method always returns R^2
        score_new_model = model.score(combined.iloc[:, 1:], combined.iloc[:, 0])
        score_old_model = old_model.score(combined.iloc[:, 1:], combined.iloc[:, 0])

        # Check if R^2 is better for old model
        if score_old_model > score_new_model * PENALTY_FACTOR_OLD_MODEL:
            raise (RuntimeError(f"Old model is better than new model for {pj['name']}"))
        else:
            print("New model is better than old model, continuing with training procces")


    # Generate save path for new model

    # Report
    reporter = Reporter(pj, train_data, validation_data, test_data)
    reporter.make_and_save_dashboard_figures(model)

    # Do confidence interval determination
    confidence_interval_applicator = ConfidenceIntervalApplicator(pj, validation_data)

    confidence_interval_applicator.determine_confidence_interval(model)


    # Save
    save_path = generate_save_path(old_model_path)

    joblib.dump(model)


