/**
 * IP复原，经典DFS
 */
// 25525511133

function recovery (s) {
    const ans = new Array(0)
    recursion(0, [], s)
    return ans
    function recursion (n, path = [], s) {
        if (n === 4) {
            if (s.length === 0) ans.push(path.join('.'))
            return
        }
        // 剪枝
        if (n > 4 || s.length === 0) return
        let vaildNum = getVaildNum(s)
        for (let i = 1; i <= vaildNum; i++) {
            let cur = s.slice(0, i)
            path.push(cur)
            s = s.slice(i)
            recursion(n + 1, path, s)
            // 恢复
            path.pop()
            s = cur + s
        }
    }
    function getVaildNum (s) {
        let ans = 1
        if (s[0] === '0') return 1
        if (s[1] !== undefined) ans = 2
        if (s[2] !== undefined) {
            if ((s[0] | 0) * 100 + (s[1] | 0) * 10 + (s[2] | 0) <= 255) ans = 3
        }
        return ans
    }
}
let s = '123'
console.log(recovery(s))