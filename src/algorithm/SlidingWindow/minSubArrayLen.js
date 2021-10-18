/**
 * 长度最小的子数组长度
 */

function minSubArrayLen (target, nums = []) {

    let min = nums.length + 1
    let left = 0
    let right = 0
    let sum = 0
    while (right < nums.length) {
        let c = nums[right++]
        sum += c
        if (sum < target) continue

        while (left < right) {
            min = Math.min(min, right - left)
            let c = nums[left++]
            sum -= c
            if (sum < target) break
        }
    }
    return min === nums.length + 1 ? 0 : min
}