# Two Sum
*Given an array of integers, return indices of the the sum of  such thatinhey ad & compare with targetume that each input would have exactly one solution.*
<br>

**Example:**<br>
>Given nums = [2, 7, 11, 15], target = 9,<br><br>
>Because nums[**0**] + nums[**1**] = 2 + 7 = 9,<br>
>return [**0**, **1**].

<br>
## Solution
####1. Define an empty array
####2. Calculate the sum of 2 numbers in array (2 for loops)
    2 number combinations: (nums[0]+nums[1]), (nums[0]+nums[2]), ..., ..., (nums[0]+nums[length-1])
                           (nums[1]+nums[2]), (nums[1]+nums[3]), ..., (nums[1]+nums[length-1])
                           .....
                           (nums[length-2]+nums[length-1])
####3. Compare every sum of 2 numbers with target
    if num[i]+num[j] == target: add i & j into empty array & return array
    else: calculate next 2 numbers combination