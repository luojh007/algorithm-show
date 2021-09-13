/**
 * 合并K个升序链表
 * 归并
 */
const { ListNode } = require('../../index')
function mergeK(list = []) {
    return recursion(0, list.length)
    function recursion(start, end) {
        if (start > end) return null
        if (start === end) return list[start]
        const mid = (start + end) / 2 | 0
        return merge(recursion(start, mid), recursion(mid + 1, end))
    }
    function merge(l1, l2) {
        const res = new ListNode()
        let pre = res
        while (l1 && l2) {
            if (l1.val < l2.val) {
                pre.next = l1
                l1.next = l1
            } else {
                pre.next = l2
                l2.next = l2
            }
            pre = pre.next
        }
        if (l1) pre.next = l1
        else per.next = l2
        return res
    }
}