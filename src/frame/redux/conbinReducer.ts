interface Reducer {
    (store: Store, action: Action): Store,
}
interface Reducers {
    [key: string | symbol]: Reducer
}
export function conbinReducer(reducer: Reducers) {
    const keys = Reflect.ownKeys(reducer)
    const finalReducers: Reducers = {}
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        finalReducers[key] = finalReducers[key]
    }

    const finalReducersKey = Reflect.ownKeys(finalReducers)

    return function (store, action) {
        let nextState = null
        let preState = null
        let hasChange = false
        for (let i = 0; i < finalReducersKey.length; i++) {
            const _key = finalReducersKey[i]
            const reducer = finalReducers[_key]
            nextState = reducer(store, action)
            preState = store[_key]

            store[_key] = nextState
            hasChange = preState !== nextState
        }
        return hasChange ? nextState : preState
    }
}