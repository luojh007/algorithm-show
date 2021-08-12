class Node {
    constructor(value) {
        this.value = value === undefined ? null : value
    }
}

// 包含key的node，多用于LinkMap节点
class ListNode extends Node {
    constructor(key, value) {
        super(value)
        this.pre = null
        this.next = null
        this.key = key
    }
}
module.exports = {
    Node,
    ListNode
}