/**
 * 每日温度
 * temperateure 数组表示每日温度，计算每日多少天后有更高的温度
 * 
 * @return 返回一个数组
 */

function dailyTemperature(temperatures = []) {
    let len = temperatures.length
    let ans = new Array(len)
    let stack = new Array(0)
    for (let i = len - 1; i >= 0; i--) {
        while (stack.length && temperatures[stack[0]] <= temperatures[i]) {
            stack.shift()
        }
        ans[i] = stack.length ? stack[0] - i : 0
        stack.unshift(i)
    }
    return ans
}