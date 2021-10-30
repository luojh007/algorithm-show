/**
 * 实现es6的继承
 */
//1. 构造方法的继承
//2. 原型链处理
//3. 构造方法的借用

function __extend (a, t) {
    if (Object.setPrototypeOf) {
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

    function fn () { this.constructor = a }
    fn.prototype = t.prototype
    a.prototype = t === null ? Object.create(null) : new fn()
}


var father = function () { }
var Sub = ((
    function (_super) {
        __extend(Sub, _super)
        function Sub () {
            return _super !== null && _super.apply(this, arguments) || this
        }
        return Sub
    }
)(father))


var s = new Sub()