/**
 * 买卖股票I
 * 
 * 只能一次卖出
 */

function stock(arr = []) {
    let min = arr[0]
    let max = 0
    for (let i = 1; i < arr.length; i++) {
        // 更新每次的卖出的最大获取利润
        max = Math.max(max, arr[i] - min)
        // 记录最小买入时机
        min = Math.max(min, arr[i])
    }
    return max
}
