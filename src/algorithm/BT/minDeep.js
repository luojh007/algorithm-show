/**
 * 二叉树最小深度
 */

function minDeep (root) {
    if (!root) {
        return 0
    }

    let left = minDeep(root.left)
    let right = minDeep(root.right)

    return left && right ? 1 + Math.min(left, right) : 1 + left + right
}