/**
 * Convert a string to uppercase
 * @param {string} str - The string to convert
 * @return {string} - The uppercase version of the string
 */
function getUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Convert a string to lowercase
 * @param {string} str - The string to convert
 * @return {string} - The lowercase version of the string
 */
function getLowerCase(str) {
  return str.toLowerCase();
}

/**
 * Capitalize the first character and lowercase the rest
 * @param {string} str - The string to convert
 * @return {string} - The sentence case version of the string
 */
function getSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Capitalize the first character of each word and lowercase the rest
 * @param {string} str - The string to convert
 * @return {string} - The proper case version of the string
 */
function getProperCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

module.exports = { getUpperCase, getLowerCase, getSentenceCase, getProperCase };