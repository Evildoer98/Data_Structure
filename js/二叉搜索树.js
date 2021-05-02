/**
 * 
 * 此 js 文件封装了二叉搜索树
 * 封装BinarySearchTree的构造函数.
 * 还需要封装一个用于保存每一个结点的类Node.
 * 该类包含三个属性: 结点对应的key, 指向的左子树, 指向的右子树
 * 对于BinarySearchTree来说, 只需要保存根结点即可, 因为其他结点都可以通过根结点找到.
 */

function BinarySerachTree () {
    // 创建结点构造函数
    function Node (key) {
        this.key = key
        this.left = left
        this.right = right
    }
    // 保存根的属性
    this.root = null

    // 操作方法

    // 插入非根结点
    /**
     * 插入其他节点时，我们需要判断该值到底是插入到左边还是右边
     * 判断的依据来自于新节点的 key 和原来结点的 key 值的比较
     *      如果新结点的 newKey 小于原结点的 oldKey，那么就向左边插入
     *      如果新结点的 newKey 大于原结点的 oldKey，那么就向右边插入
     * 1. 向左子树插入数据，分为两种情况：
     *      1. 左子树上原来没有内容，那么直接插入即可
     *      2. 左子树上已经有了内容，那么就一次向下继续查找新的走向，所以使用递归调用即可
     * 
     * 2. 向右子树插入数据，分为两种情况：
     *      1. 右子树上原来没有内容，那么直接插入即可
     *      2. 右子树上已经有了内容，那么就一次向下继续查找新的走向，所以使用递归调用即可
     */
    BinarySerachTree.prototype.insertNode = function (node, newNode) {
        // 准备向左子树插入数据
        if (newNode.key < node.key) {
            // node 的左子树上没有内容
            if (node.left === null) {
                node.left = newNode
            } else {
                // node 的左子树上已经有了内容
                this.insertNode(node.left, newNode)
            }
            // 准备向右子树插入数据
        } else {
            // node 的右子树没有内容
            if (node.right === null) {
                node.right = newNode
            } else {
                // node 的右子树上有内容
                this.insertNode(node.right, newNode)
            }
        }
    }

    // 向树中插入数据
    /**
     * 
     * 首先，根据传入的 key，创建对应的 Node
     * 其次，向树中插入数据需要分成两种情况
     *    第一次：直接修改根结点即可
     *    第二次：其他次插入，需要进行相关的比较决定插入的位置
     *
     */
    BinarySerachTree.prototype.insert = function () {
        // 根据 key 创建对应的 node
        var newNode = new Node()
        // 判断根结点是否有值
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    // 遍历
    // 先序遍历
    /**
     * 
     * 遍历过程：
     * 1. 访问根结点
     * 2. 先序遍历其左子树
     * 3. 先序遍历其右子树
     * 
     * 测试代码：
     * var resultString = ""
     * bst.proOrderTraversal(function (key) {
     *      resultString += key + " "
     * })
     * 
     * alert(resultString) 
     * 
     * 遍历树最好用的办法就是递归，因为每个结点都可能有自己的子结点，所以递归调用是最好的方式
     * 在先序遍历中，我们在经过结点的时候，会先将该节点打印出来
     * 然后，我们会遍历结点的左子树，在然后遍历结点的右子树
     * 
     */
    BinarySerachTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler)
    }
    BinarySerachTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            // 打印当前经历的结点
            handler(node.key)
            // 遍历所有的左子树
            this.preOrderTraversalNode(node.left, handler)
            // 遍历所有的右子树
            this.preOrderTraversalNode(node.right, handler)
        }
    }

    // 中序遍历
    /**
     * 
     * 遍历过程：
     * 1. 中序遍历其左子树
     * 2. 访问根结点
     * 3. 中序遍历其右子树
     * 
     * 测试代码：
     * resultString = ""
     * bst.inOrderTraversal(function (key) {
     *      resultString += key + " "
     * })
     * alert(resultString) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25 
     * 
     * 先从最左边开始，进行中序遍历，
     * 依次向右移动，最后遍历最右边
     * 
     * 
     */

    BinarySerachTree.prototype.inOrderTraversal = function (handler) {
        this.inOrderTraversalNode(this.root, handler)
    }
    BinarySerachTree.prototype.inOrderTraversalNode = function (handler) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, handler)
            handler(node.key)
            this.inOrderTraversalNode(node.right, handler)
        }
    }

    // 后续遍历
    /**
     * 
     * 遍历过程：
     * 1. 后序遍历其左子树
     * 2. 后序遍历其右子树
     * 3. 访问根结点
     * 测试代码：
     * resultString = ""
     * bst.inOrderTraversal(function (key) {
     *      resultString += key + " "
     * })
     * alert(resultString) // 3 5 6 7 8 9 10 11 12 13 14 15 18 20 25 
     * 
     * 先遍历左子树上的结点，在遍历右子树上的结点，最后遍历根结点
     * 
     */

    BinarySerachTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler)
    }
    BinarySerachTree.prototype.postOrderTraversalNode = function (handler) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler)
            this.postOrderTraversalNode(node.right, handler)
            handler(node.key)
        }
    }

    // 最大值&最小值
}