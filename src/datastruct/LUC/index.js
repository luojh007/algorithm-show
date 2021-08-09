/**
 * 实现 Latest-Used-Cache，依据时序缓存机制
 * 1. 查找、删除复杂度都为 1
 * 2. 每次查找、修改时序置顶
 */

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.pre = null
    }
}
module.exports = class LUC {
    constructor(capacity) {
        // 构造链表，设置虚节点
        this.head = new Node()
        this.tail = new Node()
        this.head.next = this.tail
        this.tail.pre = this.head
        // 容量
        this.capacity = capacity
        // 当前数量
        this._number = 0
        // 构造Map，查找时间复杂度为 1
        this.keyToNode = new Map()
    }

    // 新增元素
    set (key, value) {
        const vaildNode = this.keyToNode.get(key)
        if (vaildNode) {
            vaildNode.value = value
            this._updateNode(vaildNode)
        } else {
            // 达到容量，删除头节点
            if (this._number === this.capacity) {
                this._deleteNode(this.head.next)
                this._number--
            }
            const newNode = new Node(key, value)
            this.keyToNode.set(key, newNode)
            this._addNode(newNode)
            this._number++
        }
    }
    // 获取元素，将元素更新到队尾
    get (key) {
        const vaildNode = this.keyToNode.get(key)
        if (!vaildNode) return -1

        this._updateNode(vaildNode)
        return vaildNode.value
    }
    delete (key) {
        const vaildNode = this.keyToNode.get(key)
        if (!vaildNode) return
        this._deleteNode(vaildNode)
        this._number--
    }
    /**
     * 更新节点至队尾
     * 
     * @private
     * @param {Node} node
     */
    _updateNode (node) {
        node.pre.next = node.next
        node.next.pre = node.pre
        this._addNode(node)
    }
    /**
     * 增加节点
     * 
     * @private
     * @param {Node} node 
     */
    _addNode (node) {
        // 维护双向链表
        this.tail.pre.next = node
        node.pre = this.tail.pre
        node.next = this.tail
        this.tail.pre = node

    }
    /**
     * 删除节点
     * 
     * @private
     * @param {Node} node 
     */
    _deleteNode (node) {
        node.pre.next = node.next
        node.next.pre = node.pre
        this.keyToNode.delete(node.key)
        node = null

    }
}

