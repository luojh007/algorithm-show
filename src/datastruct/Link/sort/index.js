/**
 * 链表排序
 * 
 * 归并排序效率最高
 * 1. 切割 链表，1、2、4、8
 * 2. 逐步 归并
 * 3. 连接 链表段
 */

import { ListNode } from '../../index'

function sortLink (head) {
    const ans = new ListNode()
    let pre = ans
    pre.next = head
    let len
    //1. 计算链表长度
    while (pre.next) {
        len++
        pre = pre.next
    }
    //2. 归并 分段
    for (let index = 1; index < len; index <<= 1) {
        let cur = ans.next
        let tail = ans
        // 3. 遍历，不断两两归并
        while (cur) {
            let left = cur
            let right = cut(left, index)
            cur = cut(right, index)

            // 连接分段
            tail.next = merge(left, right)
            while (tail.next) tail = tail.next
        }
    }
    /**
     * 
     * @param {ListNode} node 节点的开始
     * @param {*} n 切割的数量
     * 
     * @return 返回的下一个节点
     */
    function cut (node, n) {
        let p = node
        while (p && --n) {
            p = p.next
        }
        if (p === undefined) {
            return null
        }
        let next = p.next
        p.next = null
        return next
    }

    /**
     * 
     * @param {ListNode} left 左节点
     * @param {ListNode} right 右节点
     * @return 返回新的 排序好的节点
     */
    function merge (left, right) {
        let ans = new ListNode()
        let pre = ans
        while (left && right) {
            if (left.val < right.val) {
                pre.next = left
            } else {
                pre.next = right
            }
            pre = pre.next
        }
        if (left) pre.next = left
        else pre.next = right
        return ans.next
    }
}