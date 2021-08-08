/**
 * 控制频繁被触发的函数，在停止触发的特定时间后执行
 * 
 * @param {Function} fn 目标函数
 * @param {Number} time 多少时间后触发
 * @param {boolean} immediately 是否触发立即执行，区分两种模式
 * @return {Function} 被包装过后的函数
 */
function debounce (fn, time, immediately = true) {
    let timer = null
    // 保存定义时的上下文，将React上下文传入原生事件的回调中
    const self = this
    return function () {
        // 关键：每次触发，重制定时任务
        clearTimeout(timer)
        if (immediately) {
            timer = setTimeout(() => {
                timer = null
            }, time);
            if (!timer) Reflect.apply(fn, self, Array.from(arguments))
        } else {
            timer = setTimeout(function () {
                Reflect.apply(fn, self, Array.from(arguments))
            }, time)
        }

    }
}
function myclick () {
    console.log(this)
}
document.getElementById('#myclick').addEventListener('click', debounce(myclick, 1000))