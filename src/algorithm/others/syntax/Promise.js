function Promise (fn) {
    this.callback = new Array(0)
    this.status = 'padding'
    this.value

    // 触发
    function resolve (value) {
        this.status = 'resolve'
        this.value = value
        for (let i = 0; i < this.callback.length; i++) {
            this.callback[i].onResolved(value)
        }
    }
    function reject (err) {
        this.status = 'reject'
        this.value = err
        for (let i = 0; i < this.callback.length; i++) {
            this.callback[i].onRejectd(err)
        }
    }
    fn(resolve, reject)
}

// 订阅
Promise.prototype.then = function (resolveFn, rejectFn) {
    resolveFn = typeof resolveFn === 'function' ? resolveFn : v => v
    rejectFn = typeof rejectFn === 'function' ? rejectFn : e => e
    return p2 = new Promise((res, rej) => {
        if (this.status === 'padding') {
            this.callback.push({
                onResolved: function (value) {
                    try {
                        let x = resolveFn(value)
                        reslovePromise(p2, x, res, rej)
                    } catch (error) {
                        return rej(error)
                    }
                },
                onRejectd: function (err) {
                    try {
                        let x = rejectFn(err)
                        reslovePromise(p2, x, res, rej)
                    } catch (error) {
                        return rej(error)
                    }
                }
            })
        } else if (this.status === 'reject') {
            try {
                let x = rejectFn(this.value)
                reslovePromise(p2, x, res, rej)
            } catch (error) {
                return rej(error)
            }
        } else if (this.status === 'resolve') {
            try {
                let x = resolveFn(this.value)
                reslovePromise(p2, x, res, rej)
            } catch (error) {
                return rej(error)
            }
        }
    })
}

Promise.all = function (ps) {
    if (!Array.isArray(ps)) throw TypeError('ps必须是个数组')

    //1. 返回一个Promise对象，res是数组类型
    //2. 用promise包裹每个ps的项
    //3. 发生错误，catch第一个
    return new Promise((res, rej) => {
        let length = ps.length
        let index = 0
        const resValue = new Array(length)
        for (let i = 0; i < length; i++) {
            // 用promise.resolve 包裹
            Promise.resolve(ps[i]).then((res) => {
                resValue[i] = res
                index++
                if (index === length) {
                    return res(resValue)
                }
            }, (err) => {
                return rej(err)
            })
        }
    })
}

// 递归解析 p，直到不是promise
function reslovePromise (p, x, res, rej) {
    if (p === x) throw new Error('chaining cycle!')

    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, (res) => reslovePromise(res), (r) => rej(r))
            } else {
                res(x)
            }
        } catch (error) {
            rej(error)
        }
    } else {
        res(x)
    }
}