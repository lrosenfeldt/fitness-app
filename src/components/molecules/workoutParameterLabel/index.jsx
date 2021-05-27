import PropTypes from "prop-types";
import * as translate from "API/translateTags";
import Text from "components/atoms/text";

const WorkoutParameterLabel = ({ calories = "XXX", categories, duration }) => {
  return (
    <Text>
      {calories} kcal ·{" "}
      {(duration && `${duration} Min.`) || "So schnell du kannst!"} ·{" "}
      {translate.workoutCategories(categories)}
    </Text>
  );
};

WorkoutParameterLabel.propTypes = {
  calories: PropTypes.number,
  categories: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  duration: PropTypes.number,
};

export default WorkoutParameterLabel;
