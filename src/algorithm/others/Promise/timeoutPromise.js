function timeoutPromise (p, time) {
    Promise.race([p, new Promise((res, rej) => {
        setTimeout(() => {
            rej('超时了...')
        }, time)
    })]).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}

timeoutPromise(new Promise((res, rej) => {
    setTimeout(() => {
        res('执行了')
    }, 1000)
}),500)