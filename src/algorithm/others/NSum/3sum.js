/**
 * 从给定数组中找到 3个数字 和为target的结果
 */

const twoSumTarget = require('./2sum')

module.exports = function threeSumTarget (source = [], target) {
    const result = []
    for (let i = 0; i < source.length; i++) {
        const _target = -(target - source[i])
        const _result = twoSumTarget(source, i, _target)
        for (let it of _result) {
            result.push(it)
        }
        while (i + 1 < source.length && source[i] === source[i + 1]) {
            i++
        }
    }
    return result
}