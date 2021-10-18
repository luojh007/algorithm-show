/**
 * 校验二叉搜索树
 */

function BST (root) {
    return check(root, -Infinity, Infinity)
    function check (node, min, max) {
        if (!node) {
            return true
        }
        if (node.val >= max || node.val <= min) {
            return false
        }

        return check(node.left, min, node.val) && check(node.val, max)
    }
}