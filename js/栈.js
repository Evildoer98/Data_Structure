/**
 * 
 * 在此 js 文件中封装了栈
 * 
 * 使用栈实现十进制转二进制
 * 
 */
function Stack() {
    
    var items = []
    
    // 栈相关的方法

    // 压栈操作 push()
    // 将最新的元素放在数组的末尾，那么数组末尾的元素就是栈顶元素
    this.push = function (elemrnt) {
        items.push(element)
    }

    // 出栈操作 pop()
    // 删除数组中最后一个元素，并且返回这个元素
    this.pop = function (element) {
        return items.pop()
    }

    // peek 操作
    // 只需要返回这个元素，并不需要将元素弹出
    this.peek = function (element) {
        return item[item.length - 1]
    }

    // isEmpty()
    // 直接判断数组中的元素的个数
    this.isEmpty = function () {
        return items.length === 0
    }

    // size()
    // 直接获取数组的长度
    this.size = function () {
        return items.length
    }

    // toString()
    Stack.prototype.toString = function () {
        var resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.item[i] + ''
        }
        return resultString
    }
}

// 实现十进制转二进制 
function dec2bin (decNumber) {
    // 使用栈来装
    var stack = new Stack()
    // 定义临时变量
    var remainder
    // 循环除法
    while (decNumber > 0) {
        // 获取余数
        remainder = decNumber % 2
        // 获取整除后的结果，作为下次运行的数
        decNumber = Math.floor(decNumber / 2)
        // 压入栈中
        stack.push(remainder)
    }
    // 存储结果，将0和1从栈中取出
    var binaryString = ''
    while (!stack.isEmpty) {
        binaryString += stack.pop()
    }
    return binaryString
}