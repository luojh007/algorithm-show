const LUC = require('../index')
let cache = new LUC(3)

cache.set(1, 1)
cache.set(2, 2)
cache.set(3, 3)
cache.get(1)
cache.set(4, 4)
cache.set(5, 5)
cache.set(6, 6)
cache.delete(2)
cache.delete(6)
console.log(cache)