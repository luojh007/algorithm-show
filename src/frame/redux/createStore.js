/**
 *  createStore 方法，
 * 1. 实现订阅所有的reducer
 * 2. 接收action，来触发 store改变
 * 3. 合并reducer
 */
function createStore(reducer) {
    const currentListeners = new Array(0)
    const nextListeners = []
    const currentReducer = reducer
    const currentState
    var isSubscribed = false
    var isDispatching = false
    function subscribe(listen) {
        if (typeof listen !== 'function') throw new Error('reducer 必须是函数')
        if (isDispatching) throw new Error('你不能在 发起dispatch时订阅')
        isSubscribed = true

        ensureCanMutateNextListeners()

        nextListeners.push(listen)
        function unsubscribe() {
            // 不在订阅状态，没有取消
            if (!isSubscribed) return false
            if (isDispatching) throw new Error('dispatch 阶段不可取消订阅')
            ensureCanMutateNextListeners()
            listens.splice(listens.indexOf(listen), 1)
        }
        return unsubscribe
    }

    function dispatch(action) {
        if (!isPlainObject) throw new Error('必须是普通对象')
        if (action.type === undefined) throw new Error('必须包含 type 属性')

        try {
            isDispatching = true
            currentState = currentReducer(currentState, action)
        } finally {
            isDispatching = false
        }

        var listeners = currentListeners = nextListeners
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]()
        }

        return action
    }

    function getState() {
        if (isDispatching) throw new Error('正在dispatch')

        return currentState
    }

    dispatch({ type: 'init' })
    return {
        dispatch,
        getState,
        subscribe
    }
}