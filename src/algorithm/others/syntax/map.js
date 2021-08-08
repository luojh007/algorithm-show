/**
 * 实现map迭代 [].map((it,index)=>{})
 */

Array.prototype.myMap = function () {
    const arr = this
    const fn = [...arguments][0]
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i))
    }
    return result
}