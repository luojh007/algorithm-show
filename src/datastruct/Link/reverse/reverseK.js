/**
 * k个一组翻转
 */

const { ListNode } = require("../..");

function reverseK(head, k) {
    const ans = new ListNode()
    let pre = ans
    pre.next = head

    let step = 0
    let left = pre
    while (pre.next) {
        step++
        pre = pre.next
        if (step === k) {
            left = reverse(left)
            pre = left
            step = 0
        }
    }

    function reverse(ans) {
        let head = ans.next
        let s = 0
        while (head && head.next && s < k - 1) { 
            let next = head.next
            head.next = next.next
            next.next = ans.next
            ans.next = next
            s++
        }
        return head
    }
}