/**
 * koa的中间价组合
 */

function compose (middlewares) {
    if (!Array.isArray(middlewares)) throw new TypeError('中间件数组必须是数组')
    for (const fn of middlewares) {
        if (typeof fn !== 'function') throw new TypeError('中间件必须是函数')
    }
    return function (ctx, callback) {
        let index = -1
        dispatch(0)
        function dispatch (i) {
            if (index >= i) return Promise.reject('多次调用next')
            index = i
            let fn = middlewares[i]
            if (i === middlewares.length) fn = callback
            if (!fn) return Promise.resolve()
            try {
                return Promise.resolve(fn(ctx, function next () {
                    return dispatch(i + 1)
                }))
            } catch (error) {
                return Promise.reject(error)
            }
        }
    }
}