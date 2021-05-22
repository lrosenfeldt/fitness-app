const categoryDict = {
  strength: "Kraft",
};

const translateWorkoutCategories = (categories) => {
  const translatedArray = categories.map((key) => {
    return categoryDict[key];
  })
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}

export default translateWorkoutCategories;