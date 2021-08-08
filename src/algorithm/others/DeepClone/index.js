/**
 * 深拷贝：1. 重复引用问题 2. Symbol问题
 */

const { isArray } = require("../../../util");

// BFS
module.exports = function deepClone (arr) {
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

