/**
 * 子集
 */

function subsets (nums) {
    const ans = [[]]
    recursion([], 0)
    return ans
    function recursion (path = [], i) {

        for (i; i < nums.length; i++) {
            let cur = nums[i]
            path.push(cur)
            ans.push([...path])
            recursion(path, i + 1)
            path.pop()
        }
    }
}