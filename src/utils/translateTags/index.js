function translate(dict, key, noKeyFallback) {
  if (!key) {
    return noKeyFallback;
  }
  if (key in dict) {
    return dict[key];
  }
  return key;
}

const programDifficultyDict = {
  hard: "Schwierig",
};

export function programDifficulty(difficultyKey) {
  return translate(programDifficultyDict, difficultyKey, "-");
}

const programFocusDict = {
  strength: "Kraft",
};

export function programFocus(focusKey) {
  return translate(programFocusDict, focusKey, "-");
}

const categoryDict = {
  strength: "Kraft",
};

export function workoutCategory(categoryKey) {
  return translate(categoryDict, categoryKey, "-");
}

export function workoutCategoryArray(categories) {
  const translatedArray = categories.map((key) => {
    return workoutCategory(key);
  });
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}
