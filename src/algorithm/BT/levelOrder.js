/**
 * 层序遍历
 */

function levelOrder (root) {
    if (!root) {
        return []
    }
    let loop = [root]
    let ans = new Array(0)
    while (loop.length) {
        let len = loop.length
        let tmp = new Array(0)
        while (len--) {
            let node = loop.pop()
            tmp.push(node.val)
            if (node.left) {
                loop.unshift(node.left)
            }
            if (node.right) {
                loop.unshift(node.right)
            }
        }
        ans.push(tmp)
    }
    return ans
}