/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    function nextChar(c) {
        return ( String.fromCharCode(c.charCodeAt(0) + 1));
    }
    
    currCol = s[0]
    endCol = s[3]
    currRow = s[1]
    endRow = s[4]
    output = []
    
    while (nextChar(currCol) <= nextChar(endCol)) {
        if (currRow < endRow) {
            output.push(currCol + currRow)
            currRow = nextChar(currRow)
        }

        if(currRow === endRow) {
            output.push(currCol + currRow)   
            currCol = nextChar(currCol)
            currRow = s[1]
        }
    }
    
    return output
};