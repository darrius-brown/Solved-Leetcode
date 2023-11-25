/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    output = []
    for (i = 0; i <= n; i++) {
        if (n % i === 0) {
            output.push(i)
        }
    }
    if (output.length < k) {
        return -1
    } else {
    return output[k - 1]
    }
};