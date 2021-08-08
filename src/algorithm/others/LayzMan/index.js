/**
 * 实现一个链式调用，顺序执行任务
 * 具有sleep，sleepFirst等功能
 */

class LazyMan {
    constructor(name) {
        this.name = name
        this.taskQueue = new Array()
        // 每次调用方法，重置定时器
        this.runTimer = null
        this.sayHi(name)
    }
    run () {
        if (this.runTimer) clearTimeout(this.runTimer)

        // 延迟调用，直到后面没有函数调用
        this.runTimer = setTimeout(async () => {
            for (let i = 0; i < this.taskQueue.length; i++) {
                await this.taskQueue[i]()
            }
            this.taskQueue.length = 0
            this.runTimer = null
        })

        return this
    }
    eat (food) {
        this.taskQueue.push(async () => console.log(`Eat ${food}!`))
        return this.run()
    }
    sayHi (name) {
        this.taskQueue.push(async () => console.log(`Hi, my name is ${name}!`))
        return this.run()
    }
    sleep (number) {
        this.taskQueue.push(async () => {
            console.log(`Now, i want to sleep for ${number} seconds...`)
            await this._setTimeout(number)
        })
        return this.run()
    }

    firstSleep (number) {
        this.taskQueue.unshift(async () => {
            console.log(`Firstly, i will sleep for ${number} seconds `)
            await this._setTimeout(number)
        })
    }
    _setTimeout (time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, time * 1e3)
        })
    }
}

let m1 = new LazyMan('m1')
m1.eat('milk').sleep(5).eat('noddles').firstSleep(2)