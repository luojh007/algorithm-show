/**
 * 将一个数组打乱，重新排列，使每一个数字出现的位置概率相同
 */

function rearrange (arr = []) {
    for (let i = 0; i < arr.length; i++) {
        let randomIndex = Math.random() * (arr.length - 1) | 0

        let tmp = arr[randomIndex]
        arr[randomIndex] = arr[i]
        arr[i] = tmp
    }
    return arr
}

console.log(rearrange([1, 2, 3, 4]))