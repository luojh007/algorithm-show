/**
 * 实现 fn.call(object,arg)
 */
const { isFunction } = require('../../../util')
Function.prototype.myCall = function () {
    const fn = this
    if (!isFunction(fn)) return
    const argList = Array.from(arguments)
    const self = argList[0]
    const arg = argList.slice(1)

    self[fn] = fn
    const res = self[fn](...arg)
    // 删除引用
    Reflect.deleteProperty(self, fn)
    return res
}

var name = 'global'
function foo () {
    this.name = 'foo'
}

function sayName () {
    console.log(this.name)
}

sayName()
sayName.call(foo)
sayName.myCall(foo)
