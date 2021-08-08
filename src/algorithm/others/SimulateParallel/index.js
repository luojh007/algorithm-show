/**
 * 单线程利用异步I/O事件模拟并发
 * 
 * 
 */

function xxxApi (urls = [], max, callback) {
    // 当前处理任务下标
    let index = 0
    let total = urls.length
    let parallel = 0
    // 处理请求任务
    function handle (i) {
        if (i === total) return
        parallel++
        fetch(urls[i]).then(() => {
            parallel--
            handle(i++)
            // 任务全部处理完成
            if (parallel === 0) {
                callback()
            }
        })
    }
    while (max--) {
        handle(index++)
    }
}