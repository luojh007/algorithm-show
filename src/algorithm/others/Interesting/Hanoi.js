/**
 * 经典汉诺塔问题
 * 先有A，B，C三个柱子，需要将A柱上的n个元素借助B柱转移到C柱。
 * 要求：每次移动一个，下面的元素不能在上面元素之上。
 * 
 * @param {number} n n个元素
 * @param {string} source 来源柱
 * @param {string} help 辅助柱
 * @param {string} target 目标柱
 * 
 * @return {Array} 输出的移动路径数组  
 */

module.exports = function hanio(n, source, help, target) {
    const result = new Array(0)
    recursion(n, source, help, target)
    return result
    function recursion(n, a, b, c) {
        // base case
        if (n === 1) {
            result.push(a + '-' + c)
        } else {
            recursion(n - 1, a, c, b)
            result.push(a + '-' + c)
            recursion(n - 1, b, a, c)
        }
    }
}
