/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = []
    let my_sum = 0
    for (const i in nums){
        my_sum += nums[i]
        output.push(my_sum) 
    }
    return output
};