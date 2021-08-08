
/**
 * 实现 const instance = myNew(fn, arg1,arg2,....)
 * 
 * @param {Function} 构造函数
 * @param 入参
 */

function myNew (fn) {
    let o = new Object()
    // 将原型链指向构造函数
    Reflect.setPrototypeOf(o, fn.prototype)
    // 执行构造方法
    Reflect.apply(fn, o, Array.from(arguments).slice(1))
    return o
}

function foo (name, age) {
    this.name = name
    this.age = age
    return 'foo'
}

let f = myNew(foo, 'name', 'age')
console.log(f)