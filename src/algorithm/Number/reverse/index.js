/**
 * 数字翻转
 */
function reverse(x) {
    let min = -Math.pow(2, 31);
    let max = Math.pow(2, 31) - 1;

    let res = 0;
    while (x !== 0) {
        res = res * 10 + x % 10;
        x = (x / 10) | 0
    }
    if (res >= max || res <= min) {
        return 0
    }
    return res
}