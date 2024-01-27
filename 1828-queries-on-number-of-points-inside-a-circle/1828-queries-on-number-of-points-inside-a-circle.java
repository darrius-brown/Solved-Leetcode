class Solution {
    public int[] countPoints(int[][] points, int[][] queries) {
        int[] res=new int[queries.length];
        int ind=0;
        for(int i=0; i<queries.length;i++){
            int c=0;
            int x1=queries[i][0];
            int y1=queries[i][1];
            int r=queries[i][2];
            for(int j=0; j<points.length;j++){
                int x=points[j][0];
                int y=points[j][1];
                if(((x-x1)*(x-x1))+((y-y1)*(y-y1))-(r*r)<=0){
                    c++;
                }
            }
            res[ind++]=c;
        }
        return res;
    }
}