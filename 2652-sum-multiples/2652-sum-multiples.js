/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    output = 0
    
    if (n <= 2) {
        return output 
    }
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            output += i
        }
    }
    return output
};