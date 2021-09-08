/**
 * 买卖股票3
 * 妙～
 */

function stock(arr = []) {
    // 定义四个时机

    let firstBuy = -Infinity
    let firstSell = 0
    let secondBuy = -Infinity
    let secondSell = 0

    for (let i = 0; i < arr.length; i++) {
        firstBuy = Math.max(firstBuy, -arr[i])

        firstSell = Math.max(firstSell, firstBuy + arr[i])

        secondBuy = Math.max(secondBuy, firstSell - arr[i])

        secondSell = Math.max(secondSell, secondBuy + arr[i])
    }

    return secondSell
}