/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,

    }

    s = s.split("")
    sum = 0
    for (let char = 0; char < s.length; char++) {
        if (obj[s[char] + s[char + 1]]) {
            sum = sum + obj[s[char] + s[char + 1]]
            char++
        }
        else {
            sum = sum + obj[s[char]]
        }
    }
    return (sum)
};