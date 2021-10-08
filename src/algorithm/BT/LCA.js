/**
 * 最近公共祖先
 */

function LCA (root, p, q) {
    return recursion(root)
    function recursion (node) {
        if (!node) return null
        if (node === p || node === q) {
            return node
        }
        let left = recursion(node.left)
        let right = recursion(node.right)
        if (left && right) {
            return node
        }
        if (left) {
            return left
        }
        if (right) {
            return right
        }
    }
}
