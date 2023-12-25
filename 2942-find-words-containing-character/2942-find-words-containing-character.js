/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    result = []
    words.map((word, index) => {
        if (word.includes(x)) {
            result.push(index)
        }
    })

    return result
};