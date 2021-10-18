/**
 * 最长回文字符串
 * 输入 字符串 S，长度 为len
 */

/**
 * 
 * @param {String} str 
 * @return {String} 
 */
// function palindrmoe (str) {
//   let len = str.length
//   // 初始化dp数组
//   let dp = [new Array(len)]
//   for (let i = 0; i < len; i++) {
//     dp[i].push(new Array(len))
//   }
//   // 默认1
//   let maxLength = 1
//   let begin = 0
//   for (let L = 2; i <= len; i++) {

//     for (let i = 0; i <= len - L; i++) {
//       let end = i + L - 1
//       if (S[i] !== S[end]) {
//         dp[i][end] = false
//       } else {
//         if (L <= 3) {
//           dp[i][end] = true
//         } else {
//           dp[i][end] = dp[i + 1][end - 1]
//         }
//       }
//       // 更新最大情况
//       if (L > maxLength && dp[i][end]) {
//         maxLength = L
//         begin = i
//       }
//     }
//   }
//   return str.slice(begin, begin + maxLength)
// }

// 中心扩散法
function palindrmoe (str) {
  let left = 0
  let right = 0
  for (let i = 0; i < str.length; i++) {
    let len1 = expend(i, i)
    let len2 = expend(i, i + 1)
    let len = Math.max(len1, len2)
    if (right - left < len) {
      left = i - ((len - 1) >> 1)
      right = i + (len >> 1)
    }
  }
  return str.slice(left, right + 1)
  function expend (i, j) {
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      i--
      j++
    }
    return j - i - 1
  }
}