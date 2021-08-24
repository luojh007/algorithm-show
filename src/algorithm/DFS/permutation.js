/**
 * 排列
 */

function permutation () {
    const ans = new Array(0)

    recursion(arr, [])

    return ans

    function recursion (remain = [], paths = []) {
        if (!remain.length) {
            return ans.push([...paths])
        }

        for (let i = 0; i < remain.length; i++) {
            let pre = remain.splice(i, 1)
            paths.push(pre[0])
            recursion(remain, paths)

            remain.splice(i, 0, ...pre)
            paths.pop()
        }
    }
}