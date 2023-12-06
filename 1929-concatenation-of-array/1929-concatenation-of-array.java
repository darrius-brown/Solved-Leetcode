class Solution {
    public int[] getConcatenation(int[] nums) {
        int n = nums.length;
        int[] output = new int[2 * n];
        
        for (int i = 0; i < n; i++) {
            output[i] = nums[i];
            output[i + n] = nums[i];
        }
        return output;
    }
}