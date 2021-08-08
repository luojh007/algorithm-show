/**
 * 实现 const curryFn = curry(fn)，使得curryFn(1)(2)(3)() = 6
 * 
 * @param {Function}
 * @return {Function}
 */

function curry1 (fn, callback) {
    let arg = new Array()
    let timer
    return function handle () {
        arg = arg.concat(Array.from(arguments))
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            callback(fn(...arg))
        })
        return handle
    }
}
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

const curryAdd = curry(add, (total) => console.log(total))
curryAdd(1)(2)(3)