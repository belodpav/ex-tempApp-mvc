/**
 * Returns true if it is valid nubmer
 * @param {string} str
 * @return {bool}
 */
function isValidTemp(str) {
  const pattern = /\-\d{1,}/;
  let matchArr, matchStr;
  matchArr = str.match(pattern);
  matchStr = matchArr ? matchArr[0] : '';

  if (+str && !str.endsWith('.') || matchStr.length === str.length) {
    return true;
  }

  return false;
}

export { isValidTemp };