/**
 * 实现数组的原型方法reduce，[].reduce(callback, init)
 * 
 */
const { isArray } = require('../../../util')
Array.prototype.myReduce = function (callback, init) {
    const arr = this
    // if (!isArray(arr)) return
    let result = init || arr[0]
    let start = init ? 0 : 1
    for (let i = start; i < arr.length; i++) {
        result = callback(result, arr[i], i)
    }
    return result
}

const arr = [[1, 2, 3], [4, 5]]
console.log(arr.myReduce((res, it) => (res = res.concat(it)), []))
