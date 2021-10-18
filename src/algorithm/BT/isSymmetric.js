/**
 * 镜像判断
 */

function isSymmertic (root) {
    if (!root) {
        return true
    }

    function check (node1, node2) {
        if (!node1 && !node2) {
            return true
        }
        else if (!node1 || !node2) {
            return false
        }
        else if (node1.val !== node2.val) {
            return false
        }
        else {
            return check(node1.left, node2.right) && check(node1.right, node2.left)
        }
    }
    return check(root, root)
}