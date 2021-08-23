const sort = require('../quick')
console.log(quick([5, 1, 3, 2, 9, 6, 8, 4]))

const Heap = require('../heap')
const heap = new Heap([5, 1, 3, 7, 10])
console.log(heap.result)
heap.push(12)
heap.push(2)

heap.push(33)
console.log(heap.result)