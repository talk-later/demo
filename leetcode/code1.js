/**
 * 两数之和
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map()
    for (let i in nums) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        } else {
            map.set(nums[i], i)
        }
    }
}

const nums = [3, 5, 6, 8]
console.log(twoSum(nums, 9))