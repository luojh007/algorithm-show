/**
 * 锯齿形层序
 */

function zigzagLevalOrder (root) {
    if (!root) {
        return []
    }
    let loop = [root]
    let ans = new Array(0)
    let tag = true
    while (loop.length) {
        let len = loop.length
        let tmp = new Array(0)
        while (len--) {
            let node = loop.pop()
            tmp[tag ? 'push' : 'unshift'](node.val)
            if (node.left) {
                loop.unshift(node.left)
            }
            if (node.right) {
                loop.unshift(node.right)
            }
        }
        ans.push(tmp)
        tag = !tag
    }
    return ans
}