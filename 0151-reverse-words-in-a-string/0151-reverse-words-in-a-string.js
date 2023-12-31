/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(" ")
    .filter((char) => char !== "")
    .reverse()
    .join(" ");
}