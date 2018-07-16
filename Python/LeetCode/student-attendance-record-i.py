class Solution(object):
    """docstring for Solution"""
    def __init__(self, arg):
        super(Solution, self).__init__()
        self.arg = arg

    def checkRecord(self, s):
        if s.count('A') <= 1 and s.count('L'):
            return True
        else:
            return False
        
'''
class Solution(object):
    def checkRecord(self, s):
        """
        :type s: str
        :rtype: bool
        """
        result = True
        index1 = 0
        
        #for i in range(len(s)):
        while(True):
            index1= s.find('A')
            if index1 == -1:
                break
            else:
                index1 = s.find('A', index1+1)
                if index1 == -1:
                    break
                else:
                    return False
                    
        while(True):
            index1 = s.find('L')
            if index1 == -1:
                return True
            else:
                index1 = s.find('L', index1+1)
                if index1 == -1:
                    return True
                elif s.find('L', index1+1) != -1:
                    return False
        
        print(result)
        return result
'''

test = Solution()
print(test.checkRecord("PPALLP"))
print(test.checkRecord("PPALLL"))