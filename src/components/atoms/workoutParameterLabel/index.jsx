import PropTypes from "prop-types";
import * as translate from "@utils/translateTags";
import Text from "@atoms/text";

const WorkoutParameterLabel = ({
  calories = "XXX",
  categories,
  className,
  duration,
}) => {
  return (
    <Text className={className}>
      {calories} kcal ·{" "}
      {(duration && `${duration} Min.`) || "So schnell du kannst"} ·{" "}
      {translate.workoutCategories(categories)}
    </Text>
  );
};

WorkoutParameterLabel.propTypes = {
  calories: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  categories: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default WorkoutParameterLabel;
