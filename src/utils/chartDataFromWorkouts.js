import * as translate from "@utils/translateTags";

function chartDataFromWorkouts(workouts, colors) {
  const dataWrapper = new Map();
  workouts.forEach(({ Workout: { categories } }) => {
    const increment = categories.length;
    categories.forEach((category) => {
      if (dataWrapper.has(category)) {
        dataWrapper.set(category, dataWrapper.get(category) + 1 / increment);
      } else {
        dataWrapper.set(category, 1 / increment);
      }
    });
  });

  const data = [];
  let index = 0;
  dataWrapper.forEach((value, category) => {
    index = data.push({
      title: translate.workoutCategory(category),
      value,
      color: colors[index],
    });
  });

  return data;
}

export default chartDataFromWorkouts;
