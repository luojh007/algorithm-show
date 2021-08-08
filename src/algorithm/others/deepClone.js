/**
 * 深拷贝：1. 重复引用问题 2. Symbol问题
 */

const { isArray } = require("../../util");

// BFS
function deepClone (arr) {
    if (typeof arr !== 'object') return arr
    const result = isArray(arr) ? [] : {}

    let visitd = new WeakMap()
    // 构造队列
    const loopList = [{
        data: arr,
        parent: result,
        key: undefined
    }]
    while (loopList.length) {
        const node = loopList.shift()
        var { data, key, parent } = node
        // 遍历第一个节点
        var current = parent;
        // 遍历非第一个节点
        if (key !== undefined) {
            current = parent[key] = data instanceof Array ? [] : {}
        }
        // 防止循环引用

        if (visitd.has(data)) {
            current[key] = visitd.get(data)
            continue
        }
        visitd.set(data, current)

        Reflect.ownKeys(data).forEach(i => {
            if (typeof data[i] === 'object') {
                loopList.push({
                    data: data[i],
                    key: i,
                    parent: current
                })
            }
            else {
                current[i] = data[i]
            }
        })
    }
    return result
}

var a1 = {}
var b1 = {}
b1.a = a1
a1.b = b1
var sym1 = Symbol('11')
var sym2 = Symbol('22')
var obj1 = { sym1: sym1, sym2: 'symbol2', c: { a: 1, b: 2, c: { a: 1, b: 2 } }, a1 }
// console.log(obj1)

var obj2 = deepClone(obj1)
console.log(obj2)

console.log(obj2.a1)
