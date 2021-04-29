/**
 * 
 * 在此 js 文件中封装了链表
 * 
 */

function LinkedList () {
    // 创建一个 Node 类，用于保存每个节点信息
    function Node (element) {
        this.element = element
        this.next = null
    }
    // 链表的属性
    this.length = 0         // 链表的长度
    this.head = null        // 链表的第一个节点

    /**
     * 
     * 链表尾部追击元素的方法
     * 两种情况:
     * 1. 链表本身为空,新添加的数据是唯一节点
     * 2. 链表不为空,需要向其他节点后面追加节点
     * 
     */

    LinkedList.prototype.append = function (element) {
        // 根据新元素创建节点
        var newNode = new Node(element)
        // 判断原来链表是否为空
        if (this.head === null) {
            this.head = newNode
        } else {
            // 定义变量，保存当前找到的节点
            var current = this.head
            while (current.next) {
                current = current.next
            }
            // 找到最后一项，将 next 赋值为 node
            current.next = newNode
        }
        // 链表长度增加一
        this.length++
    }

    // 根据下标插入元素
    LinkedList.prototype.insert = function (position, element) {
        // 检测是否越界
        if (position < 0 || position > this.length) {
            return false
        }
        // 定义变量，保存信息
        var newNode = new Node(element)
        var current = this.head
        var previous = null
        var index = 0
        // 判断是否列表是否在第一个位置插入
        if (position === 0) {
            newNode.next = current
            this.head = newNode
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.length++
        return true
    }

    // 根据位置移除节点
    LinkedList.prototype.removeAt = function (position) {
        // 检测越界
        if (position < 0 || position >= this.length) {
            return false
        }
        var current = this.head
        var previous = null
        var index = 0

        if (position === 0) {
            this.head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
        }
        this.length--
        // 返回被移除的数据
        return current.element
    }

    // 根据元素获取在链表中的位置
    LinkedList.prototype.indexOf = function (element) {
        // 定义变量，保存信息
        var current = this.head
        var index = 0
        while (current) {
            if (current.element === element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    // toString()方法
    LinkedList.prototype.toString = function () {
        // 定义变量，保存信息
        var current = this.head
        var listString = ""
        while (current) {
            listString += "," + current.element
            current = current.next
        }
        return listString.slice(1)
    }

    // 根据元素删除信息
    LinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    // 判断链表是否为空
    LinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    // 获取链表长度
    LinkedList.prototype.size = function () {
        return this.length
    }

    // 获取第一个节点
    LinkedList.prototype.getFirst = function () {
        return this.head.element
    }
}