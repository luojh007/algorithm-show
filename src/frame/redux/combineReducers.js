/**
 * 合并 reducer
 */

function combineReducers (reducers) {

    const keys = Object.keys(reducers)
    const finalReducers = {}
    // 校验 reducers合法性
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof reducers[i] === 'function') {
            finalReducers[key] = finalReducers[key]
        }
    }
    const resKeys = Object.keys(finalReducers)


    return function (state, action) {
        let hasChange = false
        const nextState = {}
        // 触发所有的reducer
        for (let i = 0; i < resKeys.length; i++) {
            let key = resKeys[i]
            let reducer = resReducers[key]
            const preState = state[key]
            const nextStateForKey = reducer(preState, action)

            // 更新整个state
            nextState[key] = nextStateForKey
            hasChange = hasChanged || nextState !== preState
        }
        return hasChange ? nextState : preState
    }
}