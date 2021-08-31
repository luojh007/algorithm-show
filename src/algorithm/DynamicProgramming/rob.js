/**
 * 场景题：打家劫舍
 */

/*
 示例 1：

 输入：[1,2,3,1]
 输出：4
 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
      偷窃到的最高金额 = 1 + 3 = 4 。
示例 2：

输入：[2,7,9,3,1]
输出：12
解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
     偷窃到的最高金额 = 2 + 9 + 1 = 12 。
*/

function rob (nums = []) {
    let pre = 0
    let current = nums[0]
    let tmp
    for (let index = 2; index <= nums.length; index++) {
        tmp = current
        current = Math.max(current, pre + nums[index - 1])
        pre = tmp
    }
    return current
}
