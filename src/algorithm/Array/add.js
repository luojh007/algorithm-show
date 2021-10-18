/**
 * 大数相加
 */
function add(s1, s2) {
    let ans = new Array(0)
    let l1 = s1.length - 1
    let l2 = s2.length - 1

    let tag = 0
    while (l1 >= 0 || l2 >= 0) {
        let sum = tag
        if (l1 >= 0) {
            sum += s1[l1] | 0
            l1--
        }
        if (l2 >= 0) {
            sum += s2[l2] | 0
            l2--
        }
        tag = sum >= 10 ? 1 : 0
        ans.unshift(sum % 10)
    }
    if (tag) ans.unshift(tag)
    return ans.join('')
}