/**
 * 使二维数组扁平化
 * 
 * @param {Array} arr
 * @return {Array} 
 */
const { isArray } = require('../../../util')
function flat (arr) {
    if (!isArray(arr)) return
    return arr.reduce((result, it) => (result = result.concat(it)), [])
}
