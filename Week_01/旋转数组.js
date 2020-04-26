/**
 * 暴力法
 */

var rotate = function(nums, k) {
    var n = nums.length;
    var tmpEnd = 0;
    var tmpPrev = 0;
    for(var i = 0;i<k;i++){
        tmpEnd = nums[n-1];
        for(var r = 0;r<n;r++){
            tmpPrev = nums[r];
            nums[r] = tmpEnd;
            tmpEnd = tmpPrev;
        }
    }
};

var rotate = function(nums, k) {
    for (let i = 0; i < k; i ++) {
        nums.unshift(nums.pop());
    }
};

var rotate = function(nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k));
};