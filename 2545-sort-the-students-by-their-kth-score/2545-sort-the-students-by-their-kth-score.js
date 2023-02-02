/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    output = {}
    for (const i in score) {
        output[score[i][k]] = score[i]
    }
    
    return Object.values(output).reverse()
};