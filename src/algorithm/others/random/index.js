/**
 * 给定一个整数n，输出 [0 , n) 的随机数，不能重复
 */

function getRandom (n) {
    let i = 0
    const source = Array.from({ length: n },
        (_, it) => (it = i++))
    const ans = new Array(n)
    for (let index = 0; index < ans.length; index++) {
        const len = source.length
        ans[index] = source.splice(Math.random() * len | 0, 1)[0]
    }
    return ans
}
console.log(getRandom(10))