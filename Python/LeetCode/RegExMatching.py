class Solution(object):
    def isMatch(self, text, pattern):
        # Return True, only both none
        if not pattern:
            return not text
        # Check text exist first, then get ZERO index
        first_match = bool(text) and pattern[0] in {text[0], '.'}

        # When the second index is '*'
        if len(pattern) >= 2 and pattern[1] == '*':
            # Run direction: <--, and then or
            return self.isMatch(text, pattern[2:]) or first_match and self.isMatch(text[1:], pattern)
        else:
            # Continue to normal, '*' not found
            return first_match and self.isMatch(text[1:], pattern[1:])
