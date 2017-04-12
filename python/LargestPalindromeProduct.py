class Solution(object):
    def largestPalindrome(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n==1:
            return 9%1337
        j = pow(10,n) - 1
        k = pow(10,n) - 1
        print('j:%s, k:%s'%(j,k))
        parity = 0
        while(True):
            sum = j*k
            list_str = list(str(sum))
            for i in range(int((len(list_str))/2)):
                if list_str[i] != list_str[len(list_str)-i-1]:
                    break
                elif i == len(list_str)/2-1 or i == len(list_str)/2:
                    print("it's sum:%s"%(sum))
                    return sum%1337
            if parity%2 == 0 :
                j -= 1
            else:
                k -= 1
            parity += 1
            
test = Solution()
print(test.largestPalindrome(1))
print(test.largestPalindrome(2))
'''
print(test.largestPalindrome(5))
print(test.largestPalindrome(6))
'''