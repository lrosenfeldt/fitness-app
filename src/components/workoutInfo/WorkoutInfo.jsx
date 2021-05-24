import translateWorkoutCategories from "API/translateWorkoutCategories";
import { P } from "components/base/base";

const WorkoutInfo = ({ calories, categories, duration }) => {
  return (
    <P small>
      {calories || "XXX"} kcal ·{" "}
      {duration ? `${duration} Min.` : "So schnell du kannst!"} ·{" "}
      {translateWorkoutCategories(categories)}
    </P>
  );
};

export default WorkoutInfo;
