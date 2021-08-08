function isArray (s) {
    return Reflect.apply(Object.prototype.toString, s, {}) === '[object Array]'
}
function isFunction (f) {
    return typeof f === 'function'
}

function swap (i, j) {
    let t = i
    i = j
    j = t
}
module.exports = {
    isFunction,
    isArray,
    swap
}
