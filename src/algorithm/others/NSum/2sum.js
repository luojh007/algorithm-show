/**
 * 从一个数组中找到 两个相加为 target的 结果，并输出所有结果集
 * 
 * @param {Array} source  来源数组
 * @param {number} start 数组的索引开始
 * @param {number} target 目标值
 * 
 */
const sort = require('../../Sort/quick')
module.exports = function twoSumTarget (source = [], start, target) {
    // 排序
    sort(source)
    const result = []
    let left = start, right = source.length - 1

    while (left < right) {
        const sum = source[left] + source[right]
        if (sum > target) {
            right--
            while (source[right] && source[right + 1] === source[right]) {
                right--
            }
        } else if (sum < target) {
            left++
            while (source[left] && source[left - 1] === source[left]) {
                left++
            }
        } else {
            result.push([source[left], source[right]])
            left++
            right--
            while (left < right && source[left] === source[left - 1]
                && source[right] === source[right + 1]) {
                left++
                right--
            }
        }
    }
    return result
}