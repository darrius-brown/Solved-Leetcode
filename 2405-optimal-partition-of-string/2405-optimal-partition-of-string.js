/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
    let checkArray = [];
    let output = 0;

    for (const char of s) {
        if (!checkArray.includes(char)) {
            checkArray.push(char);
        } else {
            output++;
            checkArray = [];
            checkArray.push(char);
        }
    }

    // Add the count for the last substring if it's not empty
    if (checkArray.length > 0) {
        output++;
    }

    return output;
};