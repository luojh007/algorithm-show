/**
 * 实现 观察者模式
 */

class Observer {
    constructor() {
        this.listens = []
    }
    subscribe(callback) {
        this.listens.push(callback)
        const unsubscribe = () => {
            const index = this.listens.indexOf(callback)
            this.listens.splice(index, 1)
        }
        return unsubscribe
    }
    publish() {
        for (let i = 0; i < this.listens.length; i++) {
            const fn = this.listens[i]
            fn()
        }
    }
}