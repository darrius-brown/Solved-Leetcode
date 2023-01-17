/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let split = s.split('')
    
for (const i in t) {    
   if(split[0] == t[i]) {
       split.splice(0,1)
   } 
}

if (split.length === 0) {
    return true 
} else {
    return false
}
};