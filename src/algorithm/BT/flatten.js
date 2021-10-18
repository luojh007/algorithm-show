/**
 * 将二叉树 转换成 链表
 */

function flatten (root) {
    recursion(root)
    function recursion (node) {
        if (!node) {
            return
        }
        if (node.left) {
            let lastRight = getRight(node.left)
            let right = node.right
            node.right = node.left
            lastRight.right = right
            // 断开连接
            node.left = null
        }
        recursion(node.right)
    }

    function getRight (node) {
        let ans = node
        while (ans.right) {
            ans = ans.right
        }
        return ans
    }
}