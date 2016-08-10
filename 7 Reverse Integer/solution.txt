/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 10 && x > -10)
        return x;

    var src = x.toString().split("");
    var revarr = [], res = "", neg = false;
    if(x < 0) {
        neg = true;
        revarr = src.slice(1, src.length).reverse();
    }
    else {
        revarr = src.reverse();
    }
    for(var i = 0; i < revarr.length; i++) {
        res += parseInt(revarr[i], 10);
    }

    var range = Math.pow(2, 31);
    neg?(res = -Math.abs(Number(res))):(res = Number(res));
    if(res < -Math.abs(range) || res > (range-1))
        return 0;
    else
        return res;
};