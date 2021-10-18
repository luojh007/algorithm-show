/**
 * 二叉树的最大深度
 */

function maxDeep (root) {
    let ans = 0
    recursion(root, 0)
    return ans
    function recursion (node, deep) {
        if (!node) {
            ans = Math.max(deep, ans)
            return
        }
        recursion(node.left)
        recursion(node.right)
    }
}