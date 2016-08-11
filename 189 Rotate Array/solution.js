/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var times = 1;

    while(times <= k) {
        nums.unshift(nums[nums.length-1]);
        nums.splice(nums.length-1,1);
        times++;
    }
};