/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = nums[0]
    let rightSum = nums.reduce((partialSum, a) => partialSum + a, 0) - nums[0];
    console.log('right sum = ', rightSum)
    if (rightSum === 0) {
      return 0
    }
    for (let i = 1; i < nums.length; i++) {
        rightSum -= nums[i]
        console.log('left ' + leftSum, 'right ' + rightSum)
        if (leftSum == rightSum) {
            return i
        } else {
            leftSum += nums[i]
        }
    }

    return -1
};