class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        if x == 0:
            return 0
        negative = False
        if x < 0 :
            x = -x
            negative = True
        while x % 10 == 0 :
            x = x/10
        y = (int(str(int(x))[::-1]))
        if y > 2**31-1 or y < -(2**31-1):
            return 0
        if negative:
            return -y
        else:
            return y


