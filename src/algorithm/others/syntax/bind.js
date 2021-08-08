/**
 * 实现fn.bind(context)
 */

Function.prototype.bind = function () {
    const fn = this
    const context = [...arguments][0]
    return function () {
        fn.call(context, ...arguments)
    }
}

this.name = 'global'
function sayName () {
    console.log(this.name)
    console.log(...arguments)
}

function foo () {
    this.name = 'foo'
}

const bindfn = sayName.bind(foo)
bindfn(1, 2, 3)