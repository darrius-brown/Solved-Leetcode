/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = [];
    const length = arr.length;
    for( let i = 0; i < length; i++ ) {
        newArray.push(fn(arr[i],i))
    }
    return newArray;
};