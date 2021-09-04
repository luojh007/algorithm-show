/**
 * 链表的反转
 */
import { ListNode } from '../../index'

// 迭代
function interation (head = new ListNode()) {
    let ans = new ListNode()
    ans.next = head
    while (head && head.next) {
        let nex = head.next
        ans.next = nex
        head.next = nex.next
        nex.next = head
    }
    return ans
}

// 递归
function recursion (head = new ListNode()) {
    let ans = null
    handle(head)
    function handle (node) {
        if (!node) return ans = node
        let next = handle(node.next)
        next.next = node
        // 赋值循环引用
        node.next = null
        return node
    }
    return ans
}