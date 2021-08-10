/**
 * 实现包括 + - * / （） 符号的计算器
 * 
 * 难点：
 * 1. 字符串数字转 number
 * 2. 利用一个变量保存上一个操作符
 * 3. 利用栈结构，保存数据栈
 * 4. 使用一个全局索引定位当前位置
 * 5. 遇到括号（）时，利用递归，将括号里的当成一个number的值
 */
module.exports = function (s) {
    function isNumber (c) {
        return c.charCodeAt() >= 48 && c.charCodeAt() <= 57
    }
    // 核心，维护一个全局的索引
    var index = 0
    return recursion()
    function recursion () {
        // 最终的累加栈
        const statck = new Array()
        // 数字前面的符号，默认开始+
        let sign = '+'
        let number = 0
        for (index; index < s.length; index++) {
            let c = s[index]
            // 数字
            if (isNumber(c)) {
                number = number * 10 + (c | 0)
            }
            if (c === '(') {
                index++
                number = recursion()
            }
            // 非数字、非空、或者到最后一个
            if (!isNumber(c) && c !== ' ' || index === s.length - 1) {
                // 判断上一个符号
                switch (sign) {
                    case '+':
                        statck.push(number)
                        break
                    case '-':
                        statck.push(-number)
                        break
                    case '*':
                        statck.push(statck.pop() * number)
                        break
                    case '/':
                        statck.push(statck.pop() / number | 0)
                        break
                }
                // 保存当前符号，重置数字
                sign = c
                number = 0
            }
            if (c === ')') {
                break
            }
        }
        let sum = 0
        while (statck.length) {
            sum += statck.pop()
        }
        return sum
    }

};
