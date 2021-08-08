/**
 * 控制频繁触发的函数，以指定的时间间隔执行。稀释请求密度。
 * 
 * @param {Function} fn 目标函数
 * @param {number} time 指定的时间间隔
 * @param {boolean} immediately 是否立即执行第一次触发
 * @return {Function} 被包装过后的函数
 */

function throttle (fn, time, immediately = true) {
    const self = this
    let timer = null
    return function () {
        // 关键：存在定时任务，则直接退出
        if (timer) return
        if (immediately) {
            timer = setTimeout(() => {
                timer = null
            }, time)
            Reflect.apply(fn, self, Array.from(arguments))
        } else {
            timer = setTimeout(function () {
                Reflect.apply(fn, self, Array.from(arguments))
                timer = null
            }, time)
        }

    }
}

function myclick () {
    console.log(this)
}
document.getElementById('#myclick').addEventListener('click', throttle(myclick, 1000))