/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let num = 0;
    for(let i = 1; i <= n; i++){
        i % m ? num+=i : num-=i;
    }
    return num;
};