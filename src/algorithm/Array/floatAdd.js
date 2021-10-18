/**
 * 浮点数
 */

function add(n1, n2) {
    let s = Math.max(`${n1}`.split('.')[1].length, `${n2}`.split('.')[1].length)
    let p = Math.pow(10, s)
    return (p * n1 + p * n2) / p
}