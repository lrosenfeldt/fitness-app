import PropTypes from "prop-types";
import * as translate from "API/translateTags";
import Text from "components/atoms/text";

const WorkoutParameterLabel = ({
  calories,
  categories,
  className,
  duration,
}) => {
  return (
    <Text className={className}>
      {calories} kcal · {`${duration} Min.`} ·{" "}
      {translate.workoutCategoryArray(categories)}
    </Text>
  );
};

WorkoutParameterLabel.defaultProps = {
  calories: "XXX",
  className: "",
  duration: "So schnell du kannst!",
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
