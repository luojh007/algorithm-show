/**
 * 判断是否为回文链表
 */

const { ListNode } = require("../..")

function isPalindrome(head) {

    let slow = fast = head
    let pre = new ListNode()
    pre.next = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        pre = pre.next
    }
    pre.next = null
    pre = new ListNode()
    pre.next = slow
    while (slow && slow.next) {
        let next = slow.next
        slow.next = next.next
        next.next = pre.next
        pre.next = next
    }

    while (head && pre.next) {
        if (head.val !== pre.next.val) return false
        head = head.next
        pre =  pre.next
    }
    return true
}