/**
 * 实现 const curryFn = curry(fn)，使得curryFn(1)(2)(3)() = 6
 * 
 * @param {Function}
 * @return {Function}
 */

function curry (fn) {
    let arg = new Array()
    return function handle () {
        const _arg = Array.from(arguments)
        if (_arg.length) {
            arg = arg.concat(_arg)
            return handle
        }
        return fn(...arg)
    }
}

function add () {
    return Array.from(arguments).reduce(function (total, it) {
        return total += it
    }, 0)
}

const curryAdd = curry(add)
curryAdd(1)(2)(3)()