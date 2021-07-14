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
      {translate.workoutCategoryArray(categories)}
    </Text>
  );
};

WorkoutParameterLabel.propTypes = {
  calories: PropTypes.number,
  categories: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
  duration: PropTypes.number,
};

export default WorkoutParameterLabel;
