const { ListNode } = require("../..");

/**
 * 从left到right翻转链表
 */
function reverse(head, left, right) {
    const ans = new ListNode()
    ans.next = head
    let len = right - left
    let pre = ans
    while (--left) {
        pre = pre.next
    }
    let first = pre.next
    while (len--) {
        let next = first.next
        first.next = next.next
        next.next = pre.next
        pre.next = next
    }
    return ans.next
}