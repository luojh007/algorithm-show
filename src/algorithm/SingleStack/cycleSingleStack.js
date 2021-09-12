/**
 * 循环的单调栈
 * 
 * 和每日温度类似，多了循环的考虑
 * 关键在于 扩大数组为两倍，取余重复赋值
 */

function cycleSingleStack(arr = []) {
    const len = arr.length
    const ans = new Array(len)
    const stack = new Array(0)
    for (let i = len * 2 - 1; i >= 0; i--) {
        while (stack.length && stack[0] <= arr[i % len]) {
            stack.shift()
        }
        ans[i % len] = stack.length ? stack[0] : -1
        stack.unshift(arr[i % len])
    }

    return ans
}

