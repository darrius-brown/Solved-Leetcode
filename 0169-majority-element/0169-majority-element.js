/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    output = {}
    for (const i in nums) {
        if (output.hasOwnProperty(nums[i])) {
            output[nums[i]]++
        } else {
            output[nums[i]] = 1
        }
    }
    let counts = Object.values(output)
    highest = 0
    highestIndex = 0
    curr = 0
    for (const i in counts) {
        curr = counts[i]
        if (curr > highest) {
            highest = curr
            highestIndex = i
        }
    }
    
    return Object.keys(output)[highestIndex]
};