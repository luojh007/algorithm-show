/**
 * 跳跃游戏1
 */

function canJump(nums = []) {
    let max = nums[0]
    for (let i = 1; i < nums.length; i++) {
        if (i < max) return false
        max = Math.max(max, i + nums[i])
    }
    return true
}