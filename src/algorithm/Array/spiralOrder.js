/**
 * 螺旋矩阵
 */

function spiralOrder (matrix = []) {
    let left = 0
    let right = matrix[0].length - 1
    let up = 0
    let down = matrix.length - 1
    const ans = new Array(0)
    while (left <= right && up <= down) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[up][i])
        }
        up++
        for (let i = up; i <= down; i++) {
            ans.push(matrix[i][right])
        }
        right--
        for (let i = right; i >= left && up <= down; i--) {
            ans.push(matrix[down][i])
        }
        down--
        for (let i = down; i >= up && left <= right; i--) {
            ans.push(matrix[i][left])
        }
        left++
    }
    return ans
}