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

test = Solution()
print(test.poorPigs(1000, 15, 60))
print(test.poorPigs(1, 15, 60))
print(test.poorPigs(25, 15, 60))
print(test.poorPigs(125, 15, 60))
