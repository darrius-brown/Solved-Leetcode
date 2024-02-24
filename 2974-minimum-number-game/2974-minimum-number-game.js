/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    output = []
    
    function sortInt(a, b) {
      return a - b;
    }
    
    nums.sort(sortInt)
    console.log(nums)
    
    for (let i = 0; i < nums.length; i += 2) {
        output.push(nums[i + 1])
        output.push(nums[i])
    }
    
    return output
};