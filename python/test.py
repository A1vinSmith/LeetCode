class Solution(object):
    def largestPalindrome(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n==1:
            return 9%1337
        j = pow(10,n)
        k = pow(10,n)
        print('j:%s, k:%s'%(j,k))
        parity = 0
        last = 0
        for jj in range(j):
            for kk in range(k):
                summary = jj*kk
                list_str = list(str(summary))
                for i in range(int((len(list_str))/2)):
                    if list_str[i] != list_str[len(list_str)-i-1]:
                        break
                    elif (i == len(list_str)/2-1 or i == len(list_str)/2) and summary>last:
                        last = summary
                       # print(last)
        return last

            
test = Solution()
print(test.largestPalindrome(1))
print(test.largestPalindrome(2))
print(test.largestPalindrome(5))
print(test.largestPalindrome(6))