/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var arr = num.toString().split("");
    var digit = num;

    while(arr.length > 1) {
        digit = 0;
        for(var i = 0; i < arr.length; i++) {
            digit += parseInt(arr[i]);
        }
        arr = digit.toString().split("");
    }
    return digit;
};