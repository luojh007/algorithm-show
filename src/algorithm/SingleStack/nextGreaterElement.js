/**
 * 利用 Map缓存，每个值对应的下一个最大的元素
 * 
 * 计算arr1中每一个值，在arr2中的下一个最大的值
 */

function nextGreaterElement(nums1 = [], nums2 = []) {
    const len2 = nums2.length
    const len1 = nums1.length

    const ans = new Array(len1)
    const hash = new Object()
    const stack = new Array(0)
    for (let i = len2 - 1; i >= 0; i--) {
        while (stack.length && stack[0] <= nums2[i]) {
            stack.shift()
        }
        // 将 nums2中的value作为key，索引差作为value 缓存
        hash.set(nums2[i], stack.length ? stack[0] : 0)
        stack.unshift(nums2[i])
    }
    for (let i = 0; i < len1; i++) {
        ans[i] = hash.get(nums1[i])
    }
    return ans
}