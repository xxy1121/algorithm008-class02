var plusOne = function(digits) {
    var len = digits.length
    for (var i = len - 1; i >= 0; i--) {
        var val = digits[i] + 1
        val %= 10
        digits[i] = val
        if (val !== 0) {
            return digits
        }
    }
    digits.unshift(1)
    return digits
};