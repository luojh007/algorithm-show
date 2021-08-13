/**
 * 经典n皇后问题
 * 
 * @param {number} n n*n的棋盘大小
 */

function nQueen (n) {
    const ans = new Array(0)

    // 初始化棋盘二维数组
    const init = new Array(n)
    for (let i = 0; i < n; i++) {
        init[i] = new Array(n + 1).join('.').split('')
    }
    recursion(0, init)
    return ans
    function recursion (row, paths = []) {
        // 递归终止，将合法棋盘加入结果
        if (row === n) {
            // 拍平
            ans.push(paths.map(it => it.join('')))
            return
        }
        for (let i = 0; i < n; i++) {
            // 判断当前皇后是否会被吃掉
            if (!vaild(row, i, paths)) continue
            // 将皇后放在当前位置
            paths[row].splice(i, 1, 'Q')
            // 进入棋盘的下一层
            recursion(row + 1, paths)
            // 在棋盘当层将皇后拿起
            paths[row].splice(i, 1, '.')
        }
    }
    function vaild (row, col, arr) {
        // 1. 皇后的左上角衍生判断
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (arr[i][j] === 'Q') return false
        }
        // 2. 皇后在右上角衍生
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (arr[i][j] === 'Q') return false
        }
        // 3. 正上方
        for (let i = row - 1; i >= 0; i--) {
            if (arr[i][col] === 'Q') return false
        }
        return true
    }
}
