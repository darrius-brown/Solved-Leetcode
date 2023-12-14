class Solution {
    public int minPartitions(String n) {
        TreeSet<Integer> ts1 = new TreeSet<>(); 
        for(int i=0;i<n.length();i++){
            ts1.add(Integer.parseInt(String.valueOf(n.charAt(i))));
        }
        int fin=ts1.last();
        return fin;
    }
}