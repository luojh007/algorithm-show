/**
 * 实现 fn.apply(context, arr)
 */

Function.prototype.myApply = function () {
    const fn = this
    const _arg = [...arguments]
    const context = _arg[0]
    const arg = _arg[1]

    return fn.call(context, ...arg)
}