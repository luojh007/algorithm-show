/**
 * 归并排序
 * 先分后排，后序
 */
function mergeSort(data = []) {
    return recursion(data)

    function recursion(data = []) {
        if (data.length < 2) return data
        let middle = data.length / 2 | 0
        let leftArr = recursion(data.slice(0, middle))
        let rightArr = recursion(data.slice(middle))
        return merge(leftArr, rightArr)
    }
    function merge(leftArr = [], rightArr = []) {
        let result = [];
        while (leftArr.length && rightArr.length) {
            if (leftArr[0] < rightArr[0]) {
                result.push(leftArr.shift())
            } else {
                result.push(rightArr.shift())
            }
        }
        return leftArr.length ? result.concat(leftArr) : result.concat(rightArr)
    }
}

console.log(mergeSort([5, 1, 3, 2, 9, 6, 8, 4]))