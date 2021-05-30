function generateGreeting(hours, userName) {
  if (hours < 12) {
    return `Guten Morgen, ${userName}`;
  }
  if (hours < 17) {
    return `Guten Tag, ${userName}`;
  }
  return `Guten Abend, ${userName}`;
}

export default generateGreeting;
