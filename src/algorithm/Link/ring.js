/**
 * 环形链表判断
 */

function ring (head) {
    let fast = slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return fast
}