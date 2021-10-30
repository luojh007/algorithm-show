/**
 * 对数组做去重
 * 
 * @example
 * [1,'1',1, null]                            -> [1,'1']
 * [{a: 1}, {b: 1}, {a: 1}]             -> [{a: 1}, {b: 1}]
 * [{a: 1, b: 2}, {b: 1}, {a: 1, b: 2}] -> [{a: 1, b: 2}, {b: 1}]
 * [[1, {a: 1}], [2], [3], [1, {a: 1}]] -> [[1, {a: 1}], [2], [3]]
 * [{a: 1, b: 2}, {b: 1}, {b: 2, a: 1}] -> [{a: 1, b: 2}, {b: 1}]
 * 
 */

function uniqe (arr) {
    const ans = arr instanceof Array ? [] : {}
    const keys = Object.keys(arr)
    for (let key of keys) {
        if (keys === null) continue
        let current = arr[key]
        // 递归去重
        if (current === 'object') {
            current = uniqe(current)
        }
        if (!isHas(ans, current)) ans[key] = current
        let isEql = false
        for (let key of Object.keys(ans)) {
            if (isEqe(ans[key], current)) { isEql = true; break }
        }
        if (!isEql) ans.push(current)
    }
    return ans
}

function isEqe (obj1, obj2) {
    if (obj1 === obj2) return true
    if (Object.prototype.toString.call(obj1) === Object.prototype.toString.call(obj2)) return false
    else {
        if (obj1 instanceof Array) {
            for (let it of obj1) {

            }
        }
    }
}

function isHas (obj, item) {
    const keys = Object.keys(obj)
    for (let key of keys) {
        if (obj[key] === item) return true
        if (Object.prototype.toString.call(obj[keys]) !== Object.prototype.toString.call(item)) continue
        else {
            const keys1 = Object.keys(obj[key])
            const keys2 = Object.keys(item)

            if (keys1 !== keys2) continue
            else {
                for (let key of keys1) {
                    // if (typeof item[key] === 'object') 
                }
            }
        }
    }
}

// let arr = [{ a: 1, b: 2 }, { b: 1 }, { b: 2, a: 1 }]
// let arr = [[1, { a: 1, b: 2 }], [1, 2], [2, 1], [2], [3], [1, { b: 2, a: 1, c: 2 }]]
// function unique (arr) {
//     let obj = {}
//     let ret = []
//     for (let i = 0; i <= arr.length - 1; i++) {
//         const cur = arr[i]
//         if (cur instanceof Object && cur.constructor === Object) {
//             let isEqual = ret.some(item => {
//                 if (item instanceof Object && cur.constructor === Object) { // 防止Array、null、undefined
//                     return assertObj(item, cur)
//                 }
//                 return false
//             })
//             if (!isEqual) {
//                 ret.push(cur)
//             }
//             continue
//         }
//         if (!obj[typeof cur + cur]) {
//             obj[typeof cur + cur] = true
//             ret.push(cur)
//         }
//     }
//     console.log(obj)
//     return ret
// }
// function assertObj (cur, next) {
//     if (Object.keys(cur).length !== Object.keys(next).length) {
//         return false
//     }
//     for (let key in cur) {
//         if (cur[key] instanceof Object && cur.constructor === Object) {
//             return assertObj(cur[key], next[key])
//         }
//         if (cur[key] !== next[key]) {
//             return false
//         }
//     }
//     return true
// }
// console.log(unique(arr))