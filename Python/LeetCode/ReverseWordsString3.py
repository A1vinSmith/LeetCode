class Solution(object):
    def reverseWords(self, s):
        
        str_wanted = ''
        index_head = 0
        for index in xrange(len(s)):
            if s[index] == ' ':
                params_a = self.unitReverse(s[index_head:index + 1])
                index_head = index+1
                str_wanted = str_wanted + params_a + ' '
            elif index == len(s)-1 and s[index] != ' ':
                ss = s + ' '
                params_b = self.unitReverse(ss[index_head:index+2])
                str_wanted = str_wanted + params_b

        return str_wanted


    def unitReverse(self, s):
        if s[0] == ' ':
            return ''
        return self.unitReverse(s[1:]) + s[0]