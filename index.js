


(function React (params) {
    this.name = 'React'
    function debounce (fn, time, immediately = true) {
        let timer = null
        // 保存定义时的上下文
        const self = this
        return function () {
            // 每次触发函数，更新定时器任务
            clearTimeout(timer)
            timer = setTimeout(function () {
                Reflect.apply(fn, self, Array.from(arguments))
            }, time)
        }
    }

    function myclick () {
        console.log(this.name)
    }

    document.getElementById('#myclick').addEventListener('click', debounce(myclick, 1000))
})()




