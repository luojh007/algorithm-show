const arr = [
    { id: 1, name: '1', pid: 0 },
    { id: 2, name: '2', pid: 1 },
    { id: 3, name: '3', pid: 1 },
    { id: 4, name: '4', pid: 3 },
    { id: 5, name: '5', pid: 4 },
]
function arrToTree (arr = []) {
    const map = new Object()
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        let pid = arr[i].pid
        if (pid === 0) ans = arr[i]
        else {
            if (map[pid] instanceof Array) map[pid].push(arr[i])
            else map[pid] = [arr[i]]
        }
    }
    const loop = [ans]
    while (loop.length) {
        let len = loop.length
        while (len--) {
            let node = loop.shift()
            const arr = map[node.id]
            if (arr instanceof Array) {
                node.child = map[node.id]
                arr.map(it => loop.push(it))
            }
        }
    }
    return ans
}
console.log(arrToTree(arr))