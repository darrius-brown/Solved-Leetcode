/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let output = 0;
    for (let i = 0;i<nums.length;i++) {
        let bit = eval(i.toString(2).split('').join("+"))
        if (bit === k) {
            output += nums[i]
        }
}
return output
}