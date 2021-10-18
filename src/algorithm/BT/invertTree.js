/**
 * 翻转二叉树
 */

function invertTree (root) {
    if (!root) {
        return null
    }
    let tmp = root.left
    root.left = root.right
    root.right = tmp
    invertTree(node.left)
    invertTree(node.right)
    return root
}