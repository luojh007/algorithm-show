/**
 * 最长的无重复字串
 */

function lengthOfLongestSubstring (s = '') {
    let len = s.length
    let left = 0, right = 0
    let max = 0
    let window = new Set()
    while (right < len) {
        let c = s.charAt(right)
        right++
        if (!window.has(c)) {
            window.add(c)
            max = Math.max(max, right - left)
            continue
        }
        while (left < right) {
            let c = s.charAt(left)
            left++
            if (c !== s.charAt(right - 1)) {
                window.delete(c)
            } else {
                break
            }
        }
    }
    return max
}