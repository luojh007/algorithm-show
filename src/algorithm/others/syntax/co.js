/**
 * 实现 co 函数
 */

function co (fn) {
    var gen = fn()
    var it = gen.next()
    it.value.then((res) => {
        it.next(res)
    })
}

function run (fn) {
    var gen = fn()
    next(gen)
    function next (gen) {
        var it = gen.next()
        if (it.done) return
        it.value.then(next)
    }
}