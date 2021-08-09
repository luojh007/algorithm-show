/**
 * 归并排序
 * 先分后排，后序
 */
function mergeSort (data = []) {
    return recursion(0, data.length - 1)
    function recursion (start, end) {
        if (end <= start) return data.slice(start, end)
        let middle = (end - start) / 2 | 0
        let leftArr = recursion(start, middle)
        let rightArr = recursion(middle, end)
        return merge(leftArr, rightArr)
    }
    function merge (leftArr = [], rightArr = []) {
        let length = leftArr.length + rightArr.length;
        let result = [];
        let l = 0;
        let r = 0;
        for (let i = 0; i < length; i++) {
            if (l >= leftArr.length) {
                result[i] = rightArr[r++];
            } else if (r >= rightArr.length) {
                result[i] = leftArr[l++];
            } else if (leftArr[l] > rightArr[r]) {
                result[i] = rightArr[r++];
            } else {
                result[i] = leftArr[l++]
            }
        }
        return result
    }
}

console.log(mergeSort([5, 1, 3, 2, 9, 6, 8, 4]))