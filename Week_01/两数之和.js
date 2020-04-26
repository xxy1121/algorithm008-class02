const twoSum = function (nums, target) {
    const numsSize = nums.length;
    for (let i = 0; i < numsSize - 1; i++) {
        for (let j = i + 1; j < numsSize; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}