class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {};

        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];
            const complement = target - current;

            if (complement in seen) {
                return [seen[complement], i]
            }

            seen[current] = i;
        }
        return [];
    }
}
