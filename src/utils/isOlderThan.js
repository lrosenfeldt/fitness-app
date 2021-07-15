function millisecondsToWeeks(milliseconds) {
  return milliseconds / (1000 * 60 * 60 * 24 * 7);
}

function isOlderThan(dateString, numberOfWeeks) {
  try {
    const date = new Date(dateString);
    if (millisecondsToWeeks(Date.now() - date) >= numberOfWeeks) {
      return true;
    }
    return false;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
  return null;
}

export default isOlderThan;
