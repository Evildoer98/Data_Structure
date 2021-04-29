/**
 * 
 * 此 js 文件封装了双向链表
 * 基本思路和单向链表比较相似, 都是创建节点结构函数以及定义一些属性和方法.
 * 只是Node中添加了一个this.prev属性, 该属性用于指向上一个节点.
 * 另外属性中添加了一个this.tail属性, 该属性指向末尾的节点
 * 
 */

function DoubleLinkedList () {
    // 创建节点构造函数
    function Node (element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    // 定义属性
    this.length = 0
    this.head = null
    this.tail = null

    // 方法的实现
    
    // 在尾部追加数据
    /**
     * 情况一：链表原来为空
     *      链表中原来如果没有数据，那么直接让 head 和 tail 指向这个新的节点即可
     * 
     * 情况二：链表中已经存在数据
     *  1. 首先 tail 中的 next 之前指向的是 null。现在应该指向新的节点 newNode: this.tail.next = newNode
     *  2. 因为是双向链表，新节点的 next/tail 目前都是 null。
     *  3. 但是作为最后一个节点，需要有一个前指向前一个节点的引用，所以 newNode.prev = this.tail
     *  4. 此时 newNode 已经变成了最后的节点，所以 this.tail 属性的引用应该指向最后：this.tail = newNode
     *       
     */
    DoubleLinkedList.prototype.append = function (element) {
        // 根据元素创建节点
        var newNode = new Node(element)
        // 判断列表是否为空列表
        if (this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
    }

    // 在任意位置插入数据
    /**
     * 
     * 情况一：将元素插入到头部（position === 0）
     *      事实上, 将元素插入到头部是比较简单. 只是它有分成了两种情况.
     *      情况一：列表为空，那么直接让 head/tail 指向 newNode 即可
     *      情况二：列表不为空，这个时候需要修改原来的 head 的 prev 指向新节点。
     *             新节点的 next 指向原来的 head，并且 head 现在要指向 newNode
     * 情况二：将元素插入到尾部（position === length）
     * 情况三：将元素插入到中间位置
     *      1. 找到需要插入的位置，通过 while 循环，
     *      2. 找到正确的位置后，进行插入操作
     *      3. newNode 的 next/prev 必然要指向前后的节点，也就是 current 和 previous
     *      4. current 的 prev 需要指向 newNode，而 previous 的 next 指向 newNode
     *      
     */
    DoubleLinkedList.prototype.insert = function (position, element) {
        // 判断越界情况
        if (position < 0 || position > this.length) {
            return false
        }
        // 创建新的节点
        var newNode = new Node(element)
        // 判断插入的位置
        if (position === 0) {  
            // 在第一个位置插入数据
            // 判断链表是否为空
            if (this.head === null) {
                this.head = newNode
                this.tail = newNode
            } else {
                this.head.prev = newNode
                newNode.next = this.head
                this.head = newNode
            }
        } else if (position === this.length) {
            // 插入到最后的情况
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        } else {
            // 在中间位置插入数据
            var index = 0
            var current = this.head
            var previous = null
            // 插入正确的位置
            while (index++ < position) {
                previous = current
                current = current.next
            }
            // 交换节点的指向顺序
            newNode.next = current
            newNode.prev = previous
            current.prev = newNode
            previous.next = newNode
        }
        this.length++
        return true
    }

    // 根据位置删除对应的元素
    /**
     * 
     * 情况一：删除头部元素
     *      删除头部的元素也分成两种情况
     *      情况一：链表只有一个元素，那么 head/tail 直接设置为 null 即可
     *      情况二：链表中有多个元素，这个时候删除头部的元素。
     *              head = head.next
     *              head.prev = null 
     * 情况二：删除尾部元素
     *      将 tail 设置为 tail 的 prev
     *      tail 的 next 设置为 null 即可
     * 情况三：删除中间位置的元素
     *      先使用 while 循环找到正确的位置
     *      将 previous 的 next 直接设置成 current 的 next
     *      将 current.next 的 prev 设置为 previous
     */
    DoubleLinkedList.prototype.removeAt = function (position) {
        // 判断越界的情况
        if (position < 0 || position >= this.length) {
            return false
        }
        // 判断移除的位置
        var current = this.head
        if (position === 0) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
            } else {
                this.head = this.head.next
                this.head.prev = null
            }
        } else if (position === this.length - 1) {
            current = this.tail
            this.tail = this.tail.prev
            this.tail.next = null
        } else {
            var index = 0
            var previous = null
            while (index++ < position) {
                previous = current
                current = current.next
            }
            previous.next = current.next
            current.next.prev = previous
        }
        this.length--
        return current.element
    }

    // 根据元素获取在链表中的位置
    DoubleLinkedList.prototype.indexOf = function (element) {
        // 定义变量保存信息
        var current = this.head
        var index = 0
        // 查找正确的信息
        while (current) {
            if (current.element === element) {
                return index
            }
            index++
            current = current.next
        }
        // 没有找到就返回 -1
        return -1
    }

    // 根据元素删除
    DoubleLinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element)
        return this.removeAt(index)
    }

    // 判断是否为空
    DoubleLinkedList.prototype.isEmpty = function () {
        return this.length === 0
    }

    // 获取链表长度
    DoubleLinkedList.prototype.size = function () {
        return this.length
    }

    // 获取第一个元素
    DoubleLinkedList.prototype.getHead = function () {
        return this.head.element
    }

    // 获取最后一个元素
    DoubleLinkedList.prototype.getTail = function () {
        return this.tail.element
    }

    // 遍历方法的实现

    // 正向遍历
    DoubleLinkedList.prototype.forwardString = function () {
        var current = this.head
        var forwardStr = ""
        while (current) {
            forwardStr += "," + current.element
            current = current.next
        }
        return forwardStr.slice(1)
    }

    // 反向遍历
    DoubleLinkedList.prototype.reverseString = function () {
        var current = this.tail
        var reverseStr = ""
        while (current) {
            reverseStr += "," + current.element
            current = current.prev
        }
        return reverseStr.slice(1)
    }

    // toString()
    DoubleLinkedList.prototype.toString = function () {
        return this.forwardString()
    }
}