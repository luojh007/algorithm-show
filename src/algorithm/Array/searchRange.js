/**
 * 有序数组的 某个目标值的 范围
 */
function searchRange(nums = [], target) {

    let l = 0
    let r = nums.length - 1
    let ans = [-1, -1]
    while (l < r) {
        let mid = (l + r) >> 1
        if (nums[mid] >= target) r = mid
        else l = mid + 1
    }
    if (nums[l] !== target) return ans
    ans[0] = l
    r = nums.length
    while (l < r) {
        let mid = (l + r) >> 1
        if (nums[mid] > target) r = mid
        else l = mid + 1
    }
    ans[1] = l - 1
    return ans
}