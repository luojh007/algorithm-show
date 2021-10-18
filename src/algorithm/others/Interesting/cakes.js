/**
 * 摊烧饼问题
 * 大小不同的n个烧饼，翻转使之从小到大有序
 * 
 * @param {Array} arr 大小不同的数组
 */

function cakes(arr = []) {
    //1. 找到最大的数字的索引n
    //2. 以n翻转
    //3. 再整体翻转，最大的到最小面，完成一次递归
    const result = []
    recursion(arr.length)
    return result
    function recursion(n) {
        let maxIndex = 0
        let max = arr[maxIndex]
        for (let i = 1; i < n; i++) {
            if (arr[i] > max) max = arr[i]
        }
        reverse(maxIndex)
        result.push(maxIndex + 1)
        reverse(n - 1)
        result.push(n)

        recursion(n - 1)
    }
    function reverse(n) {
        let s = 0
        while (s < n) {
            let tmp = arr[n]
            arr[n] = arr[s]
            arr[s] = tmp
            s++
            n--
        }
    }
}