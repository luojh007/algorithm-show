/**
 * 实现es6的继承
 */
//1. 构造方法的继承
//2. 原型链处理
//3. 构造方法的借用

function __extend(a, t) {
    Reflect.setPrototypeOf(a, t)
    if (Object.prototype) {
        Object.setPrototypeOf(a, t)
    } else if ({ __proto__: [] } instanceof Array) {
        a.__proto__ = t
    } else {
        for (let it in t) {
            if (Object.prototype.hasOwnProperty.call(t, it)) {
                a[it] = t[it]
            }
        }
    }

    function fn() { fn.constructor = a }
    a.prototype = t === null ? Object.create(null) : (fn.prototype = t.prototype, new fn())

}

var father = function () { }

var sub = function () { }

__extend(sub, father)

console.log(sub.prototype.__proto__)
