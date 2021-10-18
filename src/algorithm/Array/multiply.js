/**
 * 字符串相加
 */

function multiply(s1, s2) {
    let ans = new Array(s1.length + s2.length + 1)
    //  从后面来
    for (let i = s1.length - 1; i >= 0; i--) {
        for (let j = s2.length - 1; j >= 0; j--) {
            let multiple = (s1[i] | 0) * (s2[j] | 0)
            multiple = multiple + (ans[i + j + 1] || 0)

            ans[i + j + 1] = multiple % 10
            if (ans[i + j]) {
                ans[i + j] += multiple / 10 | 0
            }
            else ans[i + j] = multiple / 10 | 0
        }
    }
    while (ans.length && !ans[0]) ans.shift()
    return ans.length === 0 ? '0' : ans.join('')
}