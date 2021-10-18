/**
 * 最大子序和
 */

function maxSubArray (nums = []) {
    const dp = new Array(nums.length)
    dp[0] = nums[0]
    let max = dp[0]
    for (let index = 1; index < nums.length; index++) {
        dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
        max = Math.max(dp[i], max)
    }
    return max
}