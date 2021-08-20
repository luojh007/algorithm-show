/**
 * 单词搜索 
 * 
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 实例，在下面的二维数组中 是否存在 abcce
//[['a', 'b', 'c', 'e'],
// ['s', 'f', 'c', 's'],
// ['a', 'd', 'e', 'e']]

function wordSearch (board, word) {
    const row = board.length - 1
    const col = board[0].length - 1
    //1. 从任意一个位置开始
    for (let i = 0; i <= row; i++) {
        for (let j = 0; j <= col; j++) {
            if (recursion(i, j, 0)) return true
        }
    }
    return false

    /**
     * 递归查找，dfs
     * 
     * @param {number} i 当前点的 row
     * @param {number} j 当前的点 col
     * @param {number} n word中的位置
     */
    function recursion (i, j, n) {
        if (n >= word.length) return true
        if (i < 0 || i > row) return false
        if (j < 0 || j > col) return false
        if (word[n] !== board[i][j]) return false

        let preStr = board[i][j]
        board[i][j] = ''
        let isSearch = recursion(i + 1, j, n + 1) ||
            recursion(i - 1, j, n + 1) ||
            recursion(i, j + 1, n + 1) ||
            recursion(i, j - 1, n + 1)
        board[i][j] = preStr
        return isSearch
    }

}