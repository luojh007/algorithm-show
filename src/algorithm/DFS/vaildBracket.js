/**
 * 给一个n，输出所有有效的括号的组合
 * 
 * @param {number} n n大于0
 * @return {Array} 输出由n对括号组合的有效括号排列
 * 
 */

function vaildBrackets (n) {
    const ans = new Array(0)
    recursion('', 0, 0)
    return ans
    function recursion (path, left, right) {
        // 剪枝
        if (left > n || right > n || right > left) return
        // 有效值
        if (left === n) {
            return ans.push(path)
        }
        recursion(path + '(', left + 1, right)
        recursion(path + ')', left, right + 1)
    }
}