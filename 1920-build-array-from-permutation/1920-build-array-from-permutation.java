class Solution {
    public int[] buildArray(int[] nums) {
        int numsLength = nums.length;
        int[] output = new int[numsLength];
        for (int i = 0; i < numsLength; i++) {
            output[i] = nums[nums[i]];
        }
        return output;
    }
}