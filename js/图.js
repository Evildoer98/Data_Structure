/**
 * 
 * 此 js 文件封装了 图
 *  创建 Graph 的构造函数
 *  定义属性：
 *      vertexes: 用于存储所有的顶点，使用一个数组来保存
 *      adjList: 存储所有的边，采用邻接表的形式
 * 
 */

function Graph () {
    // 属性
    this.vertexes = []
    this.adjList = new Doctionay()

    // 操作
    // 添加顶点
    /**
     * 
     * 将添加的顶点放入到数组中
     * 给该顶点数组创建一个数组[]，该数组用于存储顶点连接的所有边
     * 
     */
    Graph.prototype.addVertex = function (v) {
        this.vertexes.push(v)
        this.adjList.set(v, [])
    }

    // 添加边
    /**
     * 
     * 添加边需要传入两个顶点，因为边是两个顶点之间的边，边不可能单独存在
     * 根据顶点 v 取出对应的数组，将 w 加入到它的数组中
     * 根据顶点 w 取出对应的数组，将 v 加入到它的数组中
     * 根据顶点 w 取出对应的数组，将 v 加入到它的数组中
     * 因为实现的是无向图，所以边可以是双向的
     * 
     */
    Graph.prototype.addEdge = function (v, w) {
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    // toString()
    Graph.prototype.toString = function () {
        var resultStr = ""
        for (let i = 0; i < this.vertexes.length; i++) {
            resultStr += this.vertexes[i] + "->"
            var adj = this.adjList.get(this.vertexes[i])
            for (let j = 0; j < adj.length; j++) {
                resultStr += adj[i] + " "
            }
            resultStr += "\n"
        }
        return resultStr
    }

    // 初始化颜色代码
    Graph.prototype.initializeColor = function () {
        var color = []
        for (let i = 0; i < this.vertexes.length; i++) {
            colors[this.vertexes[i]] = "white"
        }
        return colors
    }

    // 广度优先搜索算法
    /**
     * 
     * 广度优先算法会先从指定的第一个顶点开始遍历图，先访问其所有的相邻点，就像一次访问图的一层
     * 就是先宽后深的访问顶点
     * 
     * 实现过程：
     *  创建一个队列 Q
     *  将 v 标注为被发现的（灰色），并将 v 放入 队列 Q
     *  如果队列 Q 非空，则
     *      将 v 从 Q 中取出队列
     *      将 v 标注为被发现的灰色
     *      将 v 所有的未被访问过的邻接点（白色），加入到队列中
     *      将 v 标志位黑色
     */
    Graph.prototype.bfs = function (v, handler) {
        // 初始化颜色
        var color = this.initializeColor()
        // 创建队列
        var queue = new Queue()
        // 将传入的顶点放入队列中
        while (!queue.isEmpty()) {
            // 从队列中取出数据
            var qv = queue.dequeue()
            // 获取 qv 相邻的所有顶点
            var qAdj = this.adjList.get(qv)
            // 将颜色设置为灰色
            color[qv] = "gray"
            // 将 qAdj 的所有顶点依次压入队列中
            for (let i = 0; i < qAdj.length; i++) {
                var a = qAdj[i]
                if (color[a] === "white") {
                    color[a] = "gray"
                    queue.enqueue(a)
                }
            }
            // 因为 qv 已经探测完毕，将 qv 设置成黑色
            color[qv] = "black"
            // 处理 qv
            if (handler) {
                handler(qv)
            }
        }
    }

    
}