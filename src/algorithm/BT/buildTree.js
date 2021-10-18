/**
 * 根据 先序，中序遍历构造二叉树
 */

function TreeNode (value) {
    this.value = value
    this.left = null
    this.right = null
}
function buildTree (preorder = [], inorder = []) {
    const inMap = new Object()
    for (let i = 0; i < inorder.length; i++) {
        inMap[inorder[i]] = i
    }

    function recursion (preStart, preEnd, inStart, inEnd) {
        if (preStart > preEnd || inStart > inEnd) {
            return null
        }
        let root = preorder[preStart]
        // 中序遍历中的位置、长度
        let rootIndex = inMap[root]
        let leftNum = rootIndex - inStart

        const node = new TreeNode(root)
        node.left = recursion(preStart + 1, preStart + leftNum, inStart, rootIndex - 1)
        node.right = recursion(preStart + leftNum + 1, preEnd, rootIndex + 1, inEnd)
        return node
    }
    return recursion(0, preorder.length - 1, 0, inorder.length - 1)
}