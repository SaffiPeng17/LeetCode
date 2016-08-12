# Valid Anagram
*Given two strings s and t, write a function to determine if t is an anagram of s.*
<br>

**Example:**<br>
>s = "anagram", t = "nagaram", return true.<br>
>s = "rat", t = "car", return false.

**Note:**<br>
>You may assume the string contains only lowercase alphabets.

<br>
## Solution
####1. Change s & t to different Arrays
    e.g.: s = "anagram" --> [a,n,a,g,r,a,m]
          t = "nagaram" --> [n,a,g,a,r,a,m]
####2. Sort 2 Arrays
    e.g.: [a,n,a,g,r,a,m] --> [a,a,a,g,m,n,r]
          [n,a,g,a,r,a,m] --> [a,a,a,g,m,n,r]
####3. Change 2 Arrays to 2 Strings
    e.g.: [a,a,a,g,m,n,r] --> str1 = aaagmnr
          [a,a,a,g,m,n,r] --> str2 = aaagmnr
####4. Compare 2 Strings
    if str1 == str2: return true
    if str1 != str2: return false