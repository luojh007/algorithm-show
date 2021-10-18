/**
 * 爬楼梯问题
 * 问题概述：假设楼梯有n阶层，每次只能走1阶或者2阶，一共有多少种情况？
 * 核心思路：
 * 1. 第n阶只能从n-1阶，和n-2阶爬上来，所以：f(n) = f(n-2) + f(n-1)
 * 2. 寻找极限：f(1) = 1, f(2) = 2
 */

 var climbStairs = function (n) {
  if(n === 1) return 1
  let cur = 2
  let pre = 1
  for (let i = 3; i <= n; i++) {
      let tmp = cur
      cur = cur + pre
      pre = tmp
  }
  return cur
};