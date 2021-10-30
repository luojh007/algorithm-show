const deepClone = require('../index')

var a1 = { c: 1 }
var b1 = {}
b1.a = a1
a1.b = b1
var sym1 = Symbol('11')
var sym2 = Symbol('22')
var obj1 = { a1, b1 }
// console.log(obj1)

var obj2 = deepClone(obj1)
console.log(obj2)

console.log(obj2.a1)
