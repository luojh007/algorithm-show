/**
 * 接雨水
 */

function catchRin (nums = []) {
    let left = 0
    let right = nums.length - 1
    let max = 0
    while (left < right) {
        let area = (right - left) * Math.min(nums[left], nums[right])
        max = Math.max(max, area)
        if (nums[right] > nums[left]) {
            right++
        } else right--
    }
    return max
}