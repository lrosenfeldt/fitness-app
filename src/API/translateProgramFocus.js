const ProgramFocusDict = {
  strength: "Kraft",
};

const translateProgramFocus = (focusKey) => {
  if (focusKey) {
    return ProgramFocusDict[focusKey];
  }
  return "-";
};

export default translateProgramFocus;
