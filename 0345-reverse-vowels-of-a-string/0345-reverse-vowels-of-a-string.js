/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    sArray = s.split('');
    vowels = [];

    const isVowel = (char) => {
        return /[aeiouAEIOU]/i.test(char);
    }

    for (const i in sArray) {
        if (isVowel(sArray[i])) {
            vowels.push(sArray[i]);
        }
    }

    for (const j in sArray) {
        if (isVowel(sArray[j])) {
            sArray[j] = vowels.pop();
        }
    }

    return sArray.join('');
};
