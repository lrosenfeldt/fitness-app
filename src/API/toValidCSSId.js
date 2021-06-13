function toValidCSSId(str) {
  return str.replace(/\W/g, (match, offset) => {
    if (offset === 0) {
      return "_";
    }
    if (offset === str.length) {
      return "";
    }
    return "-";
  });
}

export default toValidCSSId;
