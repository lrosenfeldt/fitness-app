const ProgramFocusDict = {
  strength: "Kraft",
};

function translateProgramFocus(focusKey) {
  if (focusKey) {
    return ProgramFocusDict[focusKey];
  }
  return "-";
}

export default translateProgramFocus;
