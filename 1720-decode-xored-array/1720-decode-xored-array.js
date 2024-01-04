/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    arr = [first]

    for (let i = 0; i < encoded.length; i++) {
        arr[i+1] = arr[i] ^ encoded[i]
    }

    return arr
};