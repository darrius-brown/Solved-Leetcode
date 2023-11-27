/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let current
    let previous
    let next = flowerbed[1]
    potsleft = n
    
    if (flowerbed.length === 1 && flowerbed[0] === 0) {
        return true
    }
    
    if (n === 0) {
        return true
    }
    
    for (i = 0; i < flowerbed.length; i++) {
        
        current = flowerbed[i]
        
        if (i === 0 && current === 0 && next === 0) {
            potsleft--
            current = 1
            console.log('case1')
        }
        
        if (current === 0 && previous === 0 && next === 0) {
            potsleft--
            current = 1
            console.log('case2')
        }
        
        if (i === (flowerbed.length - 2) && current === 0 && next === 0) {
            potsleft--
            current = 1 
            console.log('case3')
        }
        
        if (potsleft === 0) {
            return true
        }
        
        previous = current
        next = flowerbed[i + 2]
    } 
    return false
};