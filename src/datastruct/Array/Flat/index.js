/**
 * 使二维数组扁平化
 * 
 * @param {Array} arr
 * @return {Array} 
 */
const { isArray } = require('../../../util')
function flat (arr) {
    if (!isArray(arr)) return
    return arr.reduce((result, it) => {
        if (isArray(it)) {
            return result.concat(flat(it))
        } else {
            return result.concat(it)
        }
    }, [])
}

function flat2 (arr) {
    return arr.join(',').split(',').map(it => Number(it))
}

module.exports = flat2