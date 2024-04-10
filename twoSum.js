/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        for (let j=1; j<nums.length; j++){
            if (nums[i] + nums[j] === target)
            return [i,j]
        }
    }
    return result
};

//what if the array is [1,5,5,7] and target is 10, we want [1,2] and not [1,1]