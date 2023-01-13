/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let num1 = []
    let num2 = []
    let digits = (""+num).split("")
    digits.sort(function(a, b) {
      return a - b;
    });
    for(let i = 0; i < 3; i += 2) {
        num1.push(digits[i])
        num2.push(digits[i + 1])  
    }
    return parseInt(num1.join('')) + parseInt(num2.join(''))
};