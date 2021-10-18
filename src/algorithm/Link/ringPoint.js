/**
 * 环形链表交点
 */

function ringPoint (head) {
    let fast = slow = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            break
        }
    }
    if (!fast || !fast.next) {
        return null
    }
    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }
    return slow
}