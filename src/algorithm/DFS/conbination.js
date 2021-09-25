/**
 * 组合，给定n个数字，输出所有的组合方式
 * 
 * @param {Array} arr
 * 
 * @return {Array[]}
 */

function conbination (arr = [], target) {
    const ans = new Array(0)
    recursion([], 0, 0)
    return ans
    
    function recursion (path, sum, i) {
        if (sum > target) {
            return false
        }
        if (sum === target) {
            ans.push([...path])
        }
        for (; i < arr.length; i++) {
            path.push(arr[i])
            recursion(path, sum + arr[i], i)
            path.pop(arr[i])
        }
    }
}
