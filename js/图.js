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

}