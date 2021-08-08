const deepClone = require('../index')

var a1 = {}
var b1 = {}
b1.a = a1
a1.b = b1
var sym1 = Symbol('11')
var sym2 = Symbol('22')
var obj1 = { sym1: sym1, sym2: 'symbol2', c: { a: 1, b: 2, c: { a: 1, b: 2 } }, a1 }
// console.log(obj1)

var obj2 = deepClone(obj1)
console.log(obj2)

console.log(obj2.a1)
