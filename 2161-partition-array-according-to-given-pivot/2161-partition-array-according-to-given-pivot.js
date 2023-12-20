/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let before = []
    let after = []
    let piv = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < pivot) {
            before.push(nums[i])
        }
        else if (nums[i] == pivot) {
            piv.push(nums[i])
        }
        else  {
            after.push(nums[i])
        }
    
    }
    return before.concat(piv, after)
}