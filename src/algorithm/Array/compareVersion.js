/**
 * 版本号比较
 */

function compareVersion (version1 = '', version2 = '') {
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')

    while (arr1.length && arr2.length) {
        let cur1 = arr1.shift()
        let cur2 = arr2.shift()
        if ((cur1 | 0) > (cur2 | 0)) return 1
        else if ((cur1 | 0) < (cur2 | 0)) return -1
    }

    let tag = arr1.length ? 1 : -1
    let arr = arr1.length ? arr1 : arr2 || []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] | 0) return tag
    }
    return 0
}