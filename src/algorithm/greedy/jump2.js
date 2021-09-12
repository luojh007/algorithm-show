/**
 * 跳跃游戏2-最少跳几步
 */

function jump2(arr = []) {
    let reach = 0
    let nextReach = arr[0]
    let step = 0

    for (let i = 0; i < arr.length; i++) {
        nextReach = Math.max(arr[i] + i, nextReach)
        if (nextReach >= arr.length - 1) return step + 1
        if (reach === i) {
            step++
            reach = nextReach
        }
    }
    return step
}

function jump(nums) {
    let start = 0
    let max = 0
    let step = 0
    while (start < nums.length - 1) {
        step++
        let end = max
        let nextStart
        for (let i = start; i <= end; i++) {
            if (i + nums[i] >= nums.length - 1) return step
            if (i + nums[i] > max) {
                max = i + nums[i]
                nextStart = i
            }
        }
        start = nextStart
    }
    return step
};