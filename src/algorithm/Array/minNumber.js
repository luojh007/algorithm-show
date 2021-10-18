/**
 * 利用二分 找出有序数组中的最小值
 */
function minNumber(nums = []) {
    let r = nums.length - 1
    let l = 0

    while (l < r) {
        let mid = (l + r) / 2 | 0
        if (nums[mid] < nums[r]) {
            r = mid
        } else if (nums[mid] > nums[r]) {
            l = mid + 1
        } else {
            // 去重复
            r--
        }
    }
    return nums[l]
}