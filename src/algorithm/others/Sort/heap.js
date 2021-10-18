/**
 * 1. 堆排序
 * 2. 堆元素的取，并重新调整
 * 3. 堆元素的存，并重新调整
 */

class Heap {
    /**
     * @param {number} type 0-最小堆 1-最大堆
     * @param {*} source 构造堆的数组
     */
    constructor(source = [], type = 0) {
        this.result = [...source]
        let n = source.length - 1
        // 从第一个非叶子结点开始遍历
        let begin = (n - 1) >> 1
        for (let i = begin; i >= 0; i--) {
            this._adjust(i, n)
        }

    }
    // 取第一个最值（最大或最小），时间复杂度为 O(1)
    peek () {
        const first = this.result[0]
        return first === undefined ? null : first
    }

    // 推入一个元素
    push (node) {
        this.result.push(node)
        this._shiftUp(this.result.length - 1)
    }

    // 取出一个元素
    pop (node) {
        this.result.unshift(node)
        this._shiftDown(this.result.length - 1)
    }

    /**
     * 排序
     */
    sort () {
        const len = this.result.length
        for (let i = len - 1; i > 0; i--) {
            this._swap(0, i)
            this._adjust(0, i - 1)
        }
        return this.result
    }

    // 向上调整
    _shiftUp (index) {
        const node = this.result[index]
        while (true) {
            const pInx = (index - 1) >> 1
            const parent = this.result[pInx]
            if (parent !== undefined && parent > node) {
                this._swap(pInx, index)
                index = pInx
            } else {
                return
            }
        }
    }

    // 向下调整
    _shiftDown (index) {
        const current = this.result[index]
        let min
        while (true) {
            const li = (index << 1) + 1
            const ri = li + 1
            const left = this.result[li]
            const right = this.result[ri]
            if (left !== undefined) {
                if (right !== undefined) {
                    if (left > right) {
                        min = right
                    }
                } else {
                    min = left
                }
            } else if (right !== undefined) {
                min = right
            }
            // 存在最小值，则交换；并向下递归
            if (min) {
                this._swap(min, index)
                index = min
            } else {
                return
            }
        }
    }


    /**
     * 初始化堆
     * 
     * @param {number} i 调整的节点索引
     * @param {*} end 初始化的长度
     */
    _adjust (i, end) {
        const result = this.result
        const node = result[i]
        let min
        let left = (i << 1) + 1
        let right = left + 1
        if (left > end) {
            return
        } else {
            min = left
            if (right <= end && result[right] < result[left]) {
                min = right
            }
        }
        // 递归向下调整
        if (result[min] < node) {
            this._swap(min, i)
            this._adjust(min, end)
        }
    }

    /**
     * 
     * @param {number} i 
     * @param {number} j 
     */
    _swap (i, j) {
        let tmp = this.result[i]
        this.result[i] = this.result[j]
        this.result[j] = tmp
    }
}



