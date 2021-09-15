/**
 * 简单的 compose 方法
 * compose(f, g, h) -->   (...arg)=> f(g(h(...arg)))
 */

function compose() {
    const fns = Array.from(arguments)
    const lens = fns.length
    if (lens === 0) return
    if (lens === 1) return fns[0]

    return fns.reduce(function (a, b) {
        return function () {
            return a(b.apply(null, arguments))
        }
    })
}
function f1() {
    console.log('f1')
}
function f2() {
    console.log('f2')
}
function f3() {
    console.log('f3')
}
fu = compose(f1, f2, f3)
fu()