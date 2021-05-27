const ProgramDifficultyDict = {
  hard: "Schwierig",
};

export function programDifficulty(difficultyKey) {
  if (difficultyKey) {
    return ProgramDifficultyDict[difficultyKey];
  }
  return "-";
}

const ProgramFocusDict = {
  strength: "Kraft",
};

export function programFocus(focusKey) {
  if (focusKey) {
    return ProgramFocusDict[focusKey];
  }
  return "-";
}

const categoryDict = {
  strength: "Kraft",
};

export function workoutCategories(categories) {
  const translatedArray = categories.map((key) => {
    return categoryDict[key];
  });
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}
