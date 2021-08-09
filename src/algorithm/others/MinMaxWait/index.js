/**
 * 实现一个函数包裹 一个异步任务，使异步任务在 给定时间范围内 请求返回；若报错直接返回
 * 
 * @param {Promise} task
 * @param {number} min 最小秒数s
 * @param {number} max 最大秒数
 */

function minMaxWait(task, min, max) {
    return new Promise((resolve, reject) => {
        const tiemr = setTimeout(() => {
            reject(new Error('超时了'))
        }, max)
        const startTime = new Date().valueOf()
        task.then((result) => {
            let difference = new Date().valueOf() - startTime
            if (difference < min * 1e3) {
                setTimeout(() => {
                    resolve(result)
                }, min * 1e3 - difference)
            } else {
                resolve(result)
            }
            clearTimeout(tiemr)
        }).catch(() => {
            reject()
        })
    })
}