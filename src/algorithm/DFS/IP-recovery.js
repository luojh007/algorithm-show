/**
 * IP复原，经典DFS
 */
// 25525511133

function recovery (s) {
    const ans = new Array(0)
    recursion([], 0)
    return ans

    function recursion (path = [], i) {
        if (path.length === 4 && i === s.length) {
            return ans.push(path.join('.'))
        }
        if (path.length > 4) return
        const vaildNum = getVaild(i)
        for (let index = 1; index <= vaildNum; index++) {
            let cur = s.slice(i, i + index)
            path.push(cur)
            recursion(path, i + index)
            path.pop()
        }
    }
    function getVaild (i) {
        let ans = 1
        if (s[i] !== 0) {
            if (s[i + 1] !== undefined) {
                ans = 2
                if ((s[i] | 0) * 100 + (s[i + 1] | 0) * 10 + (s[i + 2] | 0) <= 255) ans = 3
            }
        }
        return ans
    }
}
let s = '123'
console.log(recovery(s))