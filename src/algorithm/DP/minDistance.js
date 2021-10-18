/**
 * 编辑距离
 */

function editDistance (word1 = '', word2 = '') {
    let n = word1.length
    let m = word2.length
    let dp = new Array(n + 1)
    for (let index = 0; index < dp.length; index++) {
        dp[index] = new Array(m + 1)
    }
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i === 0) {
                dp[i][j] = j
            } else if (j === 0) {
                dp[i][j] = i
            } else {
                if (word1[i - 1] === word2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1]
                } else {
                    // 增、删、改
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1])
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1]) + 1
                }
            }
        }
    }
    return dp[n][m]
}