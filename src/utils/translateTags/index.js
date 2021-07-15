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

function workoutCategory(categoryKey) {
  return translate(categoryDict, categoryKey, "-");
}

function workoutCategoryArray(categories) {
  const translatedArray = categories.map((key) => {
    return workoutCategory(key);
  });
  if (translatedArray.length > 1) {
    return translatedArray.join(", ");
  }
  return translatedArray[0];
}

export function workoutCategories(categoryInput) {
  if (Array.isArray(categoryInput)) {
    return workoutCategoryArray(categoryInput);
  }
  return workoutCategory(categoryInput);
}
