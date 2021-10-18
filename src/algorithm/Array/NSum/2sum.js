/**
 * 从一个数组中找到 两个相加为 target的 结果，并输出所有结果集
 * 
 * @param {Array} source  来源数组
 * @param {number} start 数组的索引开始
 * @param {number} target 目标值
 * 
 */
const sort = require('../Sort/quick')
module.exports = function twoSumTarget(source = [], start, target) {
    // 排序
    sort(source)
    const result = []
    let s = start, e = source.length - 1

    while (s < e) {
        const left = source[s]
        const right = source[e]
        const sum = left + right
        if (sum > target) {
            while (s < e && right === source[e]) {
                e--
            }
        } else if (sum < target) {
            while (s < e && left === source[s]) {
                s++
            }
        } else {
            result.push([left, right])
            while (s < e && source[s] === left && source[e] === right) {
                s++
                e--
            }
        }
    }
    return result
}