#!/bin/python

import math
import os
import random
import re
import sys

if __name__ == '__main__':
    T = int(input().strip())

    for i in range(0, T):
        S = input()
        even, odd = S[::2], S[1::2]
        print(even + " " + odd)

