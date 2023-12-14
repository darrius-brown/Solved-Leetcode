class Solution {
    public String defangIPaddr(String address) {
         String output = address.replace(".", "[.]");
            return output;
    }
}