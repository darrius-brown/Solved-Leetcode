/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let half = Math.floor(nums.length / 2);
    nums.sort();
    return nums[half];
}