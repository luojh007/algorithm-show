/**
 * 买股票问题
 * 
 * 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格 
 * 给出函数在某一天买入，某一天卖出，利润最大
 * 
 * 推导公式：第i天的最大利润= Max(第i-1天的最大利润, 第i天的收益 - 0~i-1天的中的最小收益)
 */

function getMaxMoney (prices = []) {
    let len = prices.length
    if (len === 1) return 0

    let min = prices[0]
    let max = 0

    for (let i = 1; i < len; i++) {
        // 每次遍历保存最小值
        max = Math.max(max, prices[i] - min)
        min = Math.min(min, prices[i])
    }
}