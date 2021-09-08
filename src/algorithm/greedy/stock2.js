/**
 * 股票买卖2
 * 可以多次买卖
 * 
 * 股票上涨，保持持有
 * 股票下跌，卖出最高时的价格；重新买入
 */
function stock(prices = []) {
    let min = prices[0]
    let max = 0
    let total = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            max = prices[i] - min
        }
        else {
            total += max
            min = prices[i]
            max = 0
        }
    }
    return total + max
}

// 精简版-性能不如前者；内存占用大于前者
function stock(prices = []) {
    let total = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            total = prices[i] - prices[i - 1]
        }
    }
    return total
}