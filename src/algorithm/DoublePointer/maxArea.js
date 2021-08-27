/**
 * 装最大雨水问题
 * 
 */

function maxArea (height = []) {
    let left = 0, right = height.length - 1
    let max = 0
    while (left < right) {
        let capacity = Math.min(left, right) * (right - left)
        max = Math.max(max, capacity)
        // 核心难点
        if (height[left] > height[right]) right--
        else left++
    }
    return max
}

