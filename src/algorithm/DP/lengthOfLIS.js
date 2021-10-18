/**
 * 最长递增子序列长度
 */

function lengthOfLIS (nums = []) {
    // 设dp[i]表示 0～i的最长子序列长度

    const dp = new Array(nums.length).fill(1)
    dp[0] = 1
    let max = dp[0]

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])
            }
        }
        max = Math.max(dp[i], max)
    }
    return max
}