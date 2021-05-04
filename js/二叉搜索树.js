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
    /**
     * 
     * 依次向左找到最左边的结点就是最小值
     * 依次向右找到最右边的结点就是最大值
     * 
     */
    BinarySerachTree.prototype.min = function () {
        var node = this.root
        while (node.left !== null) {
            node = node.left
        }
        return node.value
    }
    BinarySerachTree.prototype.max = function () {
        var node = this.root
        while (node.right !== null) {
            node = node.right
        }
        return node.value
    }

    // 搜索特定值
    /**
     * 
     * 递归必须有退出的条件，有两种情况
     *      node === null，也就是后面不再有结点的时候
     *      找到对应的 key，也就是 node.key === key 的时候
     * 
     * 在其他情况下，根据 node 的 key 和传入的 key 进行比较来决定向左还是向右查找
     *      如果 node.key > key，那么说明传入的值更小，需要向左查找
     *      如果 node.key < key，那么说明传入的值更大，需要向右查找
     *      
     * 非递归方法
     * BinarySerachTree.prototype.search = function (key) {
     *  var node = this.root
     *  while (node !== null) {
     *      if (node.key > key) {
     *          node = node.left
     *      } else if (node.key < key) {
     *          node = node.right
     *      } else {
     *          return true
     *      }
     *  }
     *  return false
     * }
     */
    
    BinarySerachTree.prototype.search = function (key) {
        return this.searchNode(this.root, key)
    }
    BinarySerachTree.prototype.searchNode = function (node, key) {
        // 如果传入的 node 为 null，那么就退出递归
        if (node === null) {
            return false
        }
        // 判断 node 结点的值和传入的 key 的大小
        if (node.key > key) {
            // 传入的 key 较小，向左边继续查找
            return this.searchNode(node.left, key)
        } else if (node.key < key) {
            // 传入的 key 较大时，向左边继续查找
            return this.searchNode(node.right, key)
        } else {
            // 相同
            return true
        }
    }

    // 删除结点
    /**
     * 
     * 删除结点的思路：
     *  删除结点要从查找要删的结点开始，找到结点后，需要考虑三种情况
     *      1. 该结点没有子结点
     *      2. 该结点只有一个子结点
     *      3. 该结点有两个子结点
     * 
     * 解析：
     * 变量的意义：
     * current：用于一会儿找到的要删除的结点对应的 node
     * parent：用于保存 current 结点的父结点，因为如果 current 有子节点，那么在删除 current 结点的时候，
     *          必然需要将 parent 的left 或者 right 指向它的某一个子节点，所以需要保存起来 current 的 parent（树中的结点关系不能向上的，和链表非常相似）
     * isLeftChild：boolean 类型，它用于记录我们是在 current 是在父节点的左侧还是右侧，以使到时候设置 parent 的 left 或者 right
     * 查找结点：
     *   依次向下查找结点，同时记录 current/parent/isLeftChild
     *   如果遍历到 current === null，那么说明在二叉搜索树中没有该 key，直接返回 false 即可
     *   其余情况：
     *      情况一：没有子结点
     *          这种情况相对比较简单，检测 current 的 left 以及 right 是否都为 null 
     *          都为 null 之后还要检测一个东西，就是是否 current 就是根，都为 null，并且为根，那么相当于要清空二叉树
     *          否则就把父结点的 left 或者 right 字段设置为 null 即可
     * 
     * 
     */
    BinarySerachTree.prototype.remove = function (key) {
        // 定义临时保存的变量
        var current = this.root
        var parent = this.root
        var isLeftChild = true
        // 开始查找结点
        while (current.key !== key) {
            parent = current
            if (key < current.key) {
                isLeftChild = true
                current = current.left
            } else {
                isLeftChild = false
                current = current.right
            }
            // 如果发现 current 已经指向 null，那么说明没有找到要删除的数据
            if (current === null) {
                return false
            }
        }

        // 删除的结点是叶结点
        if (current.left === null && current.right === null) {
            if (current === this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        }
        // 删除有一个子结点的结点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        }
        else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }
        // 删除有两个子结点的结点
        else {
            // 获取后续结点
            var successor = this.getSuccessor (current)
            // 判断是否是根结点
            if (current === this.root) {
                this.root = successor
            } else if (isLeftChild) {
                parent.left = successor
            } else {
                parent.right = successor
            }
            // 将删除结点的左子树赋值给 successor
            successor.left = current.left
        }
        // 
        return true
    }
    // 找后继的方法
    BinarySerachTree.prototype.getSuccessor = function (delNode) {
         // 1.使用变量保存临时的节点
        var successorParent = delNode
        var successor = delNode
        // 要从右子树开始找
        var current = delNode.right 

        // 2.寻找节点
        while (current != null) {
            successorParent = successor
            successor = current
            current = current.left
        }

        // 3.如果是删除的情况,
        if (successor != delNode.right) {
            successorParent.left = successor.right
            successor.right = delNode.right
        }
        return successor
    }
}