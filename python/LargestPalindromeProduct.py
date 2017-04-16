class Solution(object):
    def largestPalindrome(self, n):
        if n==1:
            return 9
        j = pow(10,n)
        k = pow(10,n)
        last = 0
        for jj in xrange(j*9//10, j):
            for kk in xrange(k*9//10, k):
                parity = True
                summary = jj*kk
                list_str = list(str(summary))
                for i in xrange(int((len(list_str))/2)):
                    if list_str[i] != list_str[len(list_str)-i-1]:
                        parity = False
                        break
                if parity == True and summary > last:
                    last = summary
        return last%1337

class Solution2(object):
    """Memory limited"""
    def __init__(self, arg):
        super(Solution2, self).__init__()
        self.arg = arg

    def largestPalindrome(self, n):
        if n==1:
            return 9
        j = pow(10,n)
        k = pow(10,n)
        last = 0
        myList = [jj * kk for jj in range(j,j*9//10,-1) for kk in range(k,k*9//10,-1)]
        myList.sort(reverse=True)
        for eachItem in myList:
            str1 = str(eachItem)
            list1 = list(str1)
            list1.reverse()
            if str1 == ''.join(list1):
                return eachItem

class Solution3(object):
    """Update Solution, but time limited, to test4 or test5"""
    def largestPalindrome(self, n):
        if n==1:
            return 9
        j = pow(10,n)
        k = pow(10,n)
        last = 0
        for jj in range(j,j*9//10,-1):
            for kk in range(k,k*9//10,-1):
                parity = True
                summary = jj*kk
                str1 = str(summary)
                list1 = list(str1)
                list1.reverse()
                str2 = ''.join(list1)
                #print(str1,list1,str2)
                if str1 == str2 and summary>last:
                    #print(str1,list1)
                    last = summary
        return last
        
class Solution4(object):
    """Online Solution, but time limited, to test7"""
    # Should be learn more from  tab in brower saved
    def largestPalindrome(self, n):
        l=0
        r=len(str)-1
        pl=str
        k=int(n)
        while (l < r):
                if str[l] != str[r] :
                    pl[l]=pl[r]=max(str[l],str[r])

                l+=1
                r-=1

        if k<= 0:
            return "can not able to make palin "

        l=0
        r=len(str)-1

        while l<= r:
            if l == r:
                if k>0:
                    pl[l]='9'


            if pl[l] < '9':
                if k>=2 and str[l]==pl[l] and str[r]==pl[r]:
                    k-=2
                    pl[l]=pl[r]='9'

                elif k>=1 and (str[l]!=pl[l] or str[r]!=pl[r]):
                    k-=1
                    pl[l]=pl[r]='9'

            l+=1
            r-=1

        return pl

        def max(self, a, b):
            if a>b:
                return a
            else:
                return b
            
test = Solution()
print(test.largestPalindrome(1))
print(test.largestPalindrome(2))
print(test.largestPalindrome(5))
print(test.largestPalindrome(6))