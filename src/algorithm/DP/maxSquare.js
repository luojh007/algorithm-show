/**
 * 最大正方形
 */

function maxSquare (matrix = []) {
    const row = matrix.length
    const col = matrix[0].length
    const dp = new Array(row + 1)
    for (let i = 0; i < dp.length; i++) dp[i] = new Array(col + 1)

    let max = 0

    for (let i = 0; i <= row; i++) {
        for (let j = 0; j <= col; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else {
                if (matrix[i - 1][j - 1] === '1') {
                    dp[i][j] = Math.min(dp[i - 1][j] | 0, dp[i][j - 1] | 0)
                    dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1] | 0) + 1
                    max = Math.max(dp[i][j], max)
                }
            }
        }
    }
    return max * max
}