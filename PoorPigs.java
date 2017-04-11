public class Solution {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        System.out.println(poorPigs(5, 15, 60));
    }

    public static int poorPigs(int buckets, int minutesToDie, int minutesToTest) {
        if(buckets == 1){
            return 0;
        }
        int times = minutesToTest/minutesToDie+1;
        int i = 1;
        int mod = 1;
        while(true){
            mod = mod * times;          
            if(mod>= buckets){
                return i;
            }
            i++;
        }      
    }
}
