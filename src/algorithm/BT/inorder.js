/**
 * 中序遍历
 */

function inOrder (root) {
    const ans = new Array(0)
    function recursion (node) {
        if (!node) {
            return ans
        }
        recursion(node.left)
        ans.push(node.val)
        recursion(node.right)
    }
    recursion(node)
    return ans
}