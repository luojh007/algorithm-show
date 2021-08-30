/**
 * 计算岛屿群落数量
 * 
 * 标签：DFS，矩阵
 */

// 岛屿如下
//  ["1","1","1","1","0"],
//  ["1","1","0","1","0"],
//  ["1","1","0","0","0"],
//  ["0","0","0","0","0"]


function numbsIsLand (grid = []) {
    let ans = 0
    const row = grid.length
    const col = grid[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            // 如果是岛屿，则感染
            if (grid[i][j] === '1') {
                ans += 1
                infected(i, j)
            }
        }
    }
    return ans
    function infected (i, j) {
        // 终止条件
        if (i < 0 || i >= row || j < 0 || j >= col || grid[i][j] !== '1') {
            return
        }
        grid[i][j] = '2'
        infected(i, j + 1)
        infected(i, j - 1)
        infected(i + 1, j)
        infected(i - 1, j)
    }
}

console.log(numbsIsLand([["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","0"],
["0","0","0","0","0"]]))