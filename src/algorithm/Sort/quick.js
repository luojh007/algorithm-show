/**
 * 快排
 * 先排序后分割，前序
 */

function quick (arr = []) {
    recursion(0, arr.length - 1)
    return arr
    function recursion (left, right) {
        if (left >= right) return
        let pivot = getPoint(left, right)
        recursion(left, pivot - 1)
        recursion(pivot + 1, right)
    }
    function getPoint (start, end) {
        let point = start
        let index = point + 1

        for (let i = index; i <= end; i++) {
            if (arr[i] < arr[point]) {
                swap(index, i)
                index++
            }
        }
        swap(point, index - 1)
        return index - 1
    }
    function swap (i, j) {
        const tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
}

console.log(quick([5, 1, 3, 2, 9, 6, 8, 4]))