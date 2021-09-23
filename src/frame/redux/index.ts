interface Store {
    [key: string]: any
}
interface Action {
    type: string,
    [key: string]: any
}
interface Reducer {
    (store: Store, action: Action): Store,
}

function createStore(reducer: Reducer): Store {

    const currentListens: Function[] = []
    const currentState: Store = {}
    const currentReducer = reducer
    let isDispatch: boolean = false
    let isSubsribed: boolean = false
    // 订阅
    function subscribe(listen: Function) {
        if (isDispatch) throw new Error('dispatch 阶段不可取取消')
        currentListens.push(listen)
        isSubsribed = true
        function unsubscribe(listen: Function) {
            if (!isSubsribed) return false
            if (isDispatch) throw new Error('dispatch 阶段不可取取消')
            const index = currentListens.indexOf(listen)
            if (index !== undefined) {
                currentListens.splice(index, 1)
            }
        }
        return unsubscribe
    }

    // 触发
    function dispatch(action: Action) {
        if (isDispatch) throw new Error('不可dispatch')
        try {
            isDispatch = true
            currentReducer(currentState, action)
        } finally {
            isDispatch = false
        }
        for (let i = 0; i < currentListens.length; i++) {
            currentListens[i]()
        }
    }

    function getStore() {
        return currentState
    }
    dispatch({ type: 'init' })
    return {
        dispatch,
        getStore,
        subscribe
    }
}