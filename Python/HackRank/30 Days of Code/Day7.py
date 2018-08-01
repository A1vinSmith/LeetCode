#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))
    arr.reverse()
    mystring = ''
    for i in arr:
        mystring = mystring + str(i) + ' '
    print(mystring)

