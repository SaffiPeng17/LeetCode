# Add Digits
*Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.*
<br>

**Example:**<br>
>Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2.<br>
>Since 2 has only one digit, return it.

<br>
## Solution
####1. Change Number to Integer Array
    e.g.: 38 --> [3,8]
####2. Calculate the sum of all numbers in array
    sum = array[0]+array[1]+...+array[length-1]
    e.g.: 3+8 --> 11
    e.g.: 1+1 --> 2
####3. Change sum to Integer Array
    e.g.: 11 --> [1,1]
    e.g.: 2  --> [2]
####4. Check Length of Array
    if Length > 1: Loop step2 & step3.  e.g.: 1+1 --> 2
    if Length <= 1: return sum.         e.g.: return 2