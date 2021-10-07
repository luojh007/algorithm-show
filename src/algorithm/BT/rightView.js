/**
 * 二叉树右试图
 */

function rightView (root) {
    if (!root) {
        return []
    }
    let loop = [root]
    let ans = new Array(0)
    while (loop.length) {
        let len = loop.length
        while (len--) {
            let node = loop.pop()
            if (node.left) {
                loop.unshift(node.left)
            }
            if (node.right) {
                loop.unshift(node.right)
            }
            if (len === 0) {
                ans.push(node.val)
            }
        }
    }
    return ans
}