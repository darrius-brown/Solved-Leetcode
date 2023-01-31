/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
   let eleSum = 0
let digSum = 0
for (const i in nums) {
    eleSum += nums[i]
    if (nums[i].toString().length > 1) {
        let splitNum = nums[i].toString()
        let splitCount = 0
        splitNum.split(' ')
        for (const i in splitNum) {
            splitCount += parseInt(splitNum[i])
        }
        digSum += splitCount
    } else {
        digSum += nums[i]
    }
}

return Math.abs(eleSum - digSum)
};