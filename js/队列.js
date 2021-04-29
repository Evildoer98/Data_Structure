/**
 * 
 * 在此 js 文件中封装了普通队列和优先级队列
 * 
 * 使用队列实现了击鼓传花（面试题）
 * 
 */
// 普通队列
function Queue () {
    
    var items = []

    // 方法的实现

    // 添加元素
    this.enqueue = function (element) {
        items.push(element)
    }

    // 移除队头元素
    this.dequeue = function () {
        return items.shift()
    }

    // font()
    this.font = function () {
        return items[0]
    }

    // isEmpty()
    this.isEmpty = function () {
        return items.lengt === 0
    }

    // size()
    this.size = function () {
        return items.length
    }
    
    // toString()
    Queue.prototype.toString = function () {
        var resultString = ''
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ''
        }
        return resultString
    }
}

// 优先级队列
function PriorityQueue () {
    var items = []
    // 封装一个新的构造函数，用来保存元素和元素的优先级
    // 在 priorityQueue 重新封装了一个类：可以理解为内部类
    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    // 方法的实现

    // 添加元素的方法
    this.enqueue = function (element, priority) {
        // 1. 根据传入的元素，创建新的 QueueElement
        var queueElement = new QueueElement(element, priority)
        // 2. 获取传入的元素应该在正确的位置
        if (this.isEmpty) {
            items.push(queueElement)
        } else {
            var added = false
            for (let i = 0; i < items.length; i++) {
                // 注意：这里数字越小，优先级越高
                /**
                 *  splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目
                 *  arrayObject.splice(index,howmany,item1,.....,itemX)
                 *  index 	            必需    整数，规定添加/删除项目的位置，使用负数可从数组结尾处规定位置。
                 *  howmany 	        必需    要删除的项目数量。如果设置为 0，则不会删除项目。
                 *  item1, ..., itemX 	可选    向数组添加的新项目。
                 */
                if (queueElement.priority < item[i].priority) {
                    items.splice(i, 0, queueElement)
                    added = true
                    // 遇到插入的位置后，终止循环
                    break
                } 
            }
            // 遍历完所有的元素，优先级都大于新插入的元素时，就插入到最后
            if (!added) {
                items.push(queueElement)
            }
        }
    }
       
    // 删除第一个元素并且返回第一个元素的值
    this.dequeue = function () {
        return items.shift()
    }

    // 获取前端的元素
    this.front = function () {
        return items[0]
    }

    // 查看元素是否为空
    this.isEmpty = function () {
        return items.length === 0
    }

    // 获取元素的个数
    this.size = function () {
        return items.length
    }
}

// 击鼓传花
function passGame (nameList, num) {
    // 创建队列，并且将所有人放在队列中
    var queue = new Queue()
    for (let i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i])
    }
    // 寻找最后剩下的人
    while(queue.size() > 1) {
        // 将前 num - 1 中的人，都从队列的前端取出放在队列的后端
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue())
        }
        // 将第 num 个人，从队列中移除
        queue.dequeue()
    }
    // 获取剩下的一个人
    alert(queue.size())
    var endName = queue.dequeue()
    alert("最后留下来的人:" + endName)
    // 返回这个人在原队列中的位置
    return nameList.indexOf(endNmae)
}