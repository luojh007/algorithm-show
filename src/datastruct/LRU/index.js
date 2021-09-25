/**
 * 实现 Laest-Recently-Used，最少使用缓存算法
 * 1. 查找、删除复杂度都为 1
 * 2. 每次查找、修改时序置顶
 */
const { ListNode } = require('../index')
// var ListNode = function (v) {
//     this.val = v === undefined ? null : v
//     this.next = null
//     this.pre = null
// }

var LRUCache = function (capacity) {
    this.capacity = capacity

    // 构造双向链表，插入O(1)
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.pre = this.head
    // 构造key-value，查找O(1)
    this.keyToNode = new Map()
};
LRUCache.prototype.moveToHead = function (node) {
    node.pre.next = node.next
    node.next.pre = node.pre

    node.next = this.head.next
    node.next.pre = node

    this.head.next = node
    node.pre = this.head
}
LRUCache.prototype.removeTailNode = function () {
    const node = this.tail.pre
    node.pre.next = node.next
    node.next.pre = node.pre
    return node
}
LRUCache.prototype.insertHead = function (node) {
    node.next = this.head.next
    node.next.pre = node

    this.head.next = node
    node.pre = this.head
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.keyToNode.has(key)) return -1
    const node = this.keyToNode.get(key)
    // 更新，移动到队头
    this.moveToHead(node)
    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    const node = this.keyToNode.get(key)
    if (node) {
        node.val = value
        this.moveToHead(node)
    } else {
        // 达到容量
        if (this.capacity === this.keyToNode.size) {
            const node = this.removeTailNode()
            this.keyToNode.delete(node.key)
        }
        let node = new ListNode(key, value)
        this.insertHead(node)
        this.keyToNode.set(key, node)
    }
};

let cache = new LRUCache(2)

console.log(cache.get(2))
console.log(cache.put(2, 6))
console.log(cache.get(1))
console.log(cache.put(1, 5))
console.log(cache.put(1, 2))
console.log(cache.get(1))
console.log(cache.get(2))

// cache.put(1, 1)
// cache.put(2, 2)
// cache.get(1)
// cache.put(3, 3)
// cache.get(2)
// cache.put(4, 4)
// cache.get(1)
// cache.get(3)
// cache.get(4)
