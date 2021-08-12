/**
 * 实现以频次、时间 为序的缓存机制(Least-Frequent-Used)
 * 查找、修改、删除时间复杂度为1
 * 链表用 Set 简单的模拟
 */
module.exports = class LFU {
    constructor(capacity) {
        this._capacity = capacity

        // key 到 value 的映射
        this.keyToValue = new Map()

        // key 到 frequent链表的映射
        this.keyToFrequent = new Map()

        // frequent 到 时序链表的映射，简单的用 Set 模拟链表
        this.frequentToList = new Map()

        // 关键点：记录最小频次
        this._minFrequent = 0
        // 当前缓存大小
        this.size = 0
    }

    // 新增、更新节点
    set (key, value) {
        if (this.capacity === 0) return
        if (this.keyToValue.get(key)) {
            // 更新节点，三个MAP
            this.keyToValue.set(key, value)
            this._increaseFreByKey(key)
        } else {
            // 新增节点
            if (this.size = this.capacity) {
                // 删除最小频次的第一个节点
                this._deleteMinFreNode()
            }
            this.keyToValue.set(key, value)
            this.keyToFrequent.set(key, 1)

            // 判断1 频次的链表是否存在
            let list = this.frequentToList(1)
            this.frequentToList.set(1, list ? list.add(value) : new Set().add(value))
            this.size++
            this._minFrequent = 1
        }
    }
    // 查找
    get (key) {
        const vaild = this.keyToValue.get(key)
        if (!vaild) return -1
        // 更新频次
        this._increaseFreByKey(key)
        return vaild
    }

    // 根据key 更新频次
    _increaseFreByKey (key) {
        const fre = this.keyToFrequent(key)
        const list = this.frequentToList(fre)
        // 1. 删除上一个频次链表的数据
        list.delete(key)
        const nextFre = fre + 1
        const nextList = this.frequentToList.get(nextFre)
        // 2. 更新增长过后的频次链表
        this.keyToFrequent.set(key, fre + 1)
        this.frequentToList.set(nextFre, nextList ? nextList.add(key) : new Set().add(key))
        // 3. 更新全局的最新频次
        if (!list) {
            this._minFrequent = nextFre
        }
    }

    // 根据key删除最小频次的值
    _deleteMinFreNode () {
        // 找到最小频次的链表
        const list = this.frequentToList.get(this._minFrequent)
        const key = list.values().next().value
        // 1. 删除K-V
        this.keyToValue.delete(key)
        // 2. 删除k-F
        this.keyToFrequent.delete(key)
        // 3. 删除F-VList
        list.delete(key)
        // 如果删除完了，则更新最小频次
        if (!list.size) {
            this._minFrequent++
        }
    }

}