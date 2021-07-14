function randomId(baseStr) {
  return `${baseStr}-${Math.floor(Math.random() * 10000)}`;
}

export default randomId;
