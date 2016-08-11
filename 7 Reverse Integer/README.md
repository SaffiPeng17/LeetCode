# Reverse Integer
*Reverse digits of an integer.*

Example1: x = 123, return 321<br>
Example2: x = -123, return -321<br>


## Solution
####1. Change Number to Integer Array
    e.g.: 123  --> [1,2,3]
    e.g.: -123 --> [-,1,2,3]
####2. Reverse Integer Array
    Number > 0 : reverse whole array.           e.g.: [1,2,3] --> [3,2,1]
    Number < 0 : reverse array exclude Minus.   e.g.: [-,1,2,3] --> [3,2,1]
####3. Change Integer Array back to Number
    e.g.: [3,2,1] --> 321
####4. Fix Minus if Number < 0
    e.g.: -123 --> 321 --> -321
####5. Check Number is in the range from -(2<sup>31</sup>) to 2<sup>31</sup>-1
    Out of range: return 0.
    In the range: return result.  e.g.: return 321
                                  e.g.: return -321