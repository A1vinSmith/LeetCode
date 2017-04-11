class Solution(object):
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        """
        :type buckets: int
        :type minutesToDie: int
        :type minutesToTest: int
        :rtype: int
        """
        if buckets==1:
            return 0
        p = int(minutesToTest/minutesToDie) + 1
        counts=1
        i =1 
        while(True): 
            counts *= p
            if(counts >= buckets):
                return i
            i += 1
        
        
        
'''   
    def count(self, buckets, minutesToDie, minutesToTest, x, p):
        factorial = 1
        k=p
        xx = x
        while(k>=1 and xx >0):
            factorial = factorial*xx
            xx -= 1
            k -= 1
        
        if buckets*x/factorial <= xx and xx > 0:
            return x
        else:
            return self.count(buckets, minutesToDie, minutesToTest, x+1, p)
'''
