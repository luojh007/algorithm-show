/**
 * k个一组翻转
 */

const { ListNode } = require("../..");

function reverseK (head, k) {
    const ans = new ListNode()
    let pre = ans
    pre.next = head
    let move = pre
    let step = 0
    while (move.next) {
        move = move.next
        step++
        if (step === k) {
            move = reverse(pre)
            pre = move
            step = 0
        }
    }
    return ans.next
    function reverse (pre) {
        let head = pre.next
        let s = 0
        while (head && head.next && s < k - 1) {
            s++
            let next = head.next
            head.next = next.next
            next.next = pre.next
            pre.next = next
        }
        return head
    }
}