/**
 * 数组去重
 */

//1. 利用Set
function deDuplication (arr) {
    return Array.from(new Set(arr))
}

//2. 手写map缓存

function deDuplication2 (arr = []) {
    let hash = new Set()
    let i = 0
    while (i < arr.length) {
        if (hash.has(arr[i])) {
            arr.splice(i, 1)

        } else {
            hash.add(arr[i])
            i++
        }
    }
    return arr
}
