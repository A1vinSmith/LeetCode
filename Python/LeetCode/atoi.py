class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        # Check for invalid string types
        if ((str == "") or (str == None) or (str.strip() == "")):
            return 0

        # Strip leading and trailing whitespace
        str = str.strip()

        if ((str[0] == "-") or (str[0] == "+")):
            sign = 1
        else:
            sign = 0

        solution = ""

        # Go through entire string
        for char in str[sign:]:
            if (char.isdigit()):
                solution = solution + char
            # Immediately escape loop upon encountering a non-digit character
            # e.g., a space in the middle, an alphabet letter
            else:
                break

        # Edge case: The first non-whitespace character (not including the sign) was
        # NOT a numerical digit!
        if (solution == ""):
            return 0

        # Add the sign to the front of the solution is there was one
        if (sign == 1):
            solution = str[0] + solution

        solution = int(solution)

        # Edge case: Integer overflow
        if (solution < (-2**31)):
            return -2**31
        elif (solution > (2**31 - 1)):
            return 2**31 -1

        return solution
