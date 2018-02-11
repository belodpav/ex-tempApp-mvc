/**
 * Converts value in celsius to fahrenheit
 * @param {number} x - value in celsius degrees
 * @return {number}
 */
function convertCelToFah(x) {
  return x*1.8 + 32;
}

/**
 * Converts value in fahrenheit to celsius
 * @param {number} x - value in fahreinheit degrees
 * @return {number}
 */
function convertFahToCel(x) {
  return (x - 32)/1.8;
}

export { convertCelToFah, convertFahToCel };