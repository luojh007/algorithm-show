/**
 * 从给定数组中找到 3个数字 和为target的结果
 */

const twoSumTarget = require('./2sum')
const sort = require('../../Sort/quick')
module.exports = function threeSum(nums, target) {
    let ans = new Array(0)
    // 1.排序
    sort(nums)
    let i = 0
    while (i < nums.length) {
        const start = nums[i]
        const _target = target - start
        const _res = twoSumTarget(nums, i + 1, _target)
        for (let it of _res) {
            it.push(start)
            ans.push(it)
        }
        while (i < nums.length && nums[i] === start) {
            i++
        }
    }
    return ans

};

