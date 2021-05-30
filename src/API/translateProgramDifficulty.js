const ProgramDifficultyDict = {
  hard: "Schwierig",
};

function translateProgramDifficulty(difficultyKey) {
  if (difficultyKey) {
    return ProgramDifficultyDict[difficultyKey];
  }
  return "-";
}

export default translateProgramDifficulty;
