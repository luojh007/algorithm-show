/**
 * 合并两个有序数组
 */

function mergeSort (arr1 = [], arr2 = []) {
    let left = 0

    while (arr1[left] !== undefined) {
        if (arr1[left] > arr2[0]) {
            arr1.splice(left, 0, arr2.shift())
        }
        left++
    }
    return arr1.concat(arr2)
}

console.log(mergeSort([1, 3, 6, 7, 8], [2, 3, 4, 5, 6, 8, 9, 10]))