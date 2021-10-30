/**
 * useState 实现 useCallback
 */

function useRef(value) {
    const [ref] = useState({ current: value })
    // ref.current = value
    return ref
}
function depsChange(deps1, deps2) {
    if (deps1 === undefined || deps2 === undefined) {
        return true
    }
    if (deps1.length !== deps2.length) {
        return true
    }
    for (let i in deps1) {
        if (!Object(deps1[i], deps2[i])) {
            return true
        }
    }
    return false
}
function useCallback(fn, deps) {
    const arr = useRef([fn, deps]).current
    if (depsChange(arr[1], deps)) {
        arr[0] = fn
    }
    arr[1] = deps
    return arr[0]
}