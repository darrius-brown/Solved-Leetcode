class Solution {
    public boolean isPalindrome(int x) {

       if(x < 0)
            return false;

        boolean ans = helper(String.valueOf(x), 0);

        return ans;
        
    }

    public boolean helper(String str, int n){
        if(n >= str.length())
            return true;

        if(str.charAt(n) != str.charAt(str.length()-1-n))
            return false;

        return helper(str, n+1);
    }
}