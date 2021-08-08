function isArray (s) {
    return Reflect.apply(Object.prototype.toString, s, {}) === '[object Array]'
}
function isFunction (f) {
    return typeof f === 'function'
}
module.exports = {
    isFunction,
    isArray
}
