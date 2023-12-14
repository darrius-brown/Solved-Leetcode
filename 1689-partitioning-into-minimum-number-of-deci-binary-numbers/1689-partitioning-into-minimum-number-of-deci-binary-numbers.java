class Solution {
    public int minPartitions(String n) {
        int output = 0;
        for (char digit: n.toCharArray()) {
            if (digit - '0' > output) {
                output = digit - '0';
            } 
        }
        return output;
    }
}