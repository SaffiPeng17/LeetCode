# Rotate Array
*Rotate an array of n elements to the right by k steps.*

For example, with n = 7 and k = 3, the array **`[1,2,3,4,5,6,7]`** is rotated to **`[5,6,7,1,2,3,4]`**.<br>

**Note:**<br>
Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
<br><br>

## Solution
####1. Add **`array[length-1]`** to the beginning of array
    e.g.: [1,2,3,4,5,6,7] --> [7,1,2,3,4,5,6,7]
####2. Remove **`array[length-1]`** from array
    e.g.: [7,1,2,3,4,5,6,7] --> [7,1,2,3,4,5,6]
####3. Repeat step1&2 **`k`** times.
    e.g.: if k = 3,
          k = 1, [1,2,3,4,5,6,7] --> [7,1,2,3,4,5,6]
          k = 2, [7,1,2,3,4,5,6] --> [6,7,1,2,3,4,5]
          k = 3, [6,7,1,2,3,4,5] --> [5,6,7,1,2,3,4]