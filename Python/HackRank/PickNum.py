#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the pickingNumbers function below.
def pickingNumbers(a):
    result = 0
    a.sort()
    length = len(a)
    j = 0
    for i in range(length):
        if j - i + 1 > result:
            result = j - i + 1
        j = i
        v = a[i]
        while j < length and abs(v - a[j]) <= 1:
            j += 1
    return result


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input())

    a = list(map(int, input().rstrip().split()))

    result = pickingNumbers(a)

    fptr.write(str(result) + '\n')

    fptr.close()

