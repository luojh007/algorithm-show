/**
 * 树形选择器的正选，反选
 * 
 */
const tree = {
    name: '所有',
    children: [
        {
            name: '上海',
            children: [
                { name: 'A' },
                { name: 'B' },
                { name: 'C' }
            ]
        },
        {
            name: '北京',
            children: [
                { name: 'D' },
                { name: 'E' },
                { name: 'F' }
            ]
        },
        {
            name: '杭州',
            children: [
                { name: 'G' },
                { name: 'H' },
                { name: 'I' }
            ]
        }
    ]
}


function check(tree, value, check) {
    const ans = []
    let arr = [...value, check]
    let alldata = tree.children
    for (let i = 0; i < alldata.length; i++) {
        if (arr.includes(alldata[i].name)) {
            ans.push(alldata[i].name)
        } else {
            let children = alldata[i].children
            let tmp = []
            for (let j = 0; j < children.length; j++) {
                if (arr.includes(children[j].name)) {
                    tmp.push(children[j].name)
                }
            }
            if (tmp.length === children.length) {
                ans.push(alldata[i].name)
            } else {
                ans.push(...tmp)
            }
        }
    }
    return ans
}

function uncheck(tree, value, uncheck) {
    let index = value.indexOf(uncheck)
    if (index > -1) {
        value.splice(index, 1)
        return value
    }
    let alldata = tree.children
    let tmp = []
    let name = ''
    const ans = []
    for (let i = 0; i < alldata.length; i++) {
        let children = alldata[i].children
        tmp = []
        for (let j = 0; j < children.length; j++) {
            if (children[j].name === uncheck) {
                name = alldata[i].name
            } else {
                tmp.push(children[j].name)
            }
        }
        if (name !== '') {
            break
        }
    }
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== name) {
            ans.push(value[i])
        }
    }
    ans.push(...tmp)
    return ans
}

console.log(check(tree, ['上海', 'D',], 'F'))

console.log(uncheck(tree, ['上海', '北京'], 'D'))