/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s == t) {
        return true;
    }
    else {
       var str1 = s.split("").sort().toString();
       var str2 = t.split("").sort().toString();
       return (str1 == str2)?true:false;
    }
};