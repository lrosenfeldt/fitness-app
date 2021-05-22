const ProgramDifficultyDict = {
  hard: "Schwierig",
};

const translateProgramDifficulty = (difficultyKey) => {
  if (difficultyKey) {
    return ProgramDifficultyDict[difficultyKey];
  }
  return "-";
};

export default translateProgramDifficulty;