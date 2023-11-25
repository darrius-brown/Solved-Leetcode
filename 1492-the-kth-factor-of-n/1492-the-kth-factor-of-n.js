/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    output = []
    
    if(n === 1) {
        return 1
    }
    
    for (i = 1; i <= Math.floor(n/2); i++) {
        if (n % i === 0 && output.includes(i) === true) {
            break
        }
        if (n % i === 0) {
            output.push(i)
            if(output.includes(n/i) === false)
            output.push(n/i)
        }
    }
    sortedOutput = output.sort(function(a, b){return a-b})
    if (output.length < k) {
        return -1
    } else {
        console.log(sortedOutput)
    return sortedOutput[k - 1]
    }
};