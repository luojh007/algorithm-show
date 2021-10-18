/**
 * 岛屿最大面积，岛屿最大数量多姊妹题目
 */

function maxLand(grid = []) {
    let max = 0

    let row = grid.length
    let col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                max = Math.max(dfs(i, j), max)
            }
        }
    }
    return max

    function dfs(i, j) {
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== 1) {
            return 0
        }
        let count = 1
        count += dfs(i + 1, j)
        count += dfs(i - 1, j)
        count += dfs(i, j - 1)
        count += dfs(i, j + 1)
        return count
    }
}