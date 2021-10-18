/**
 * 合并两个升序链表
 */
const { ListNode } = require('../../index')
function merge(l1, l2) {
    const ans = new ListNode()
    let pre = ans
    while (l1 && l2) {
        if (l1.val < l2.val) {
            pre.next = l1
            l1 = l1.next
        } else {
            pre.next = l2
            l2 = l2.next
        }
        pre = pre.next
    }
    if (l1) pre.next = l1
    else pre.next = l2
    return ans.next
}