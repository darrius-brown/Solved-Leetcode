class Solution {
    public int balancedStringSplit(String s) {
        if(s.length()==0){
            return 0;
        }
        int l=0;
        int r=0;
        int ans=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='R'){
                r++;
            }
            else if (s.charAt(i)=='L') {
                l++;
            }
            if (r==l){
                ans++;
            }
        }
        return ans;
    }
}