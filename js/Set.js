/**
 * 
 * 此 js 文件封装了集合
 * 
 */

function Set() {
    // 在集合中, 添加了一个items属性, 
    // 用于保存之后添加到集合中的元素. 因为Object的keys本身就是一个集合.
    this.items = {}

    // 集合的操作方法

    // 判断集合中是否有某个元素
    Set.prototype.has = function () {
        return this.items.hasOwnProperty(value)
    }

    // 向集合中添加元素
    Set.prototype.add = function (value) {
        // 先判断集合中是否已经包含了该元素
        if (this.has(value)) {
            return false
        }
        // 将元素添加到集合中
        this.items[value] = value
        return true
    }

    // 从集合中删除某个元素
    Set.prototype.remove = function (value) {
        // 判断集合中是否已经包含了该元素
        if (!this.has(value)) {
            return false
        }
        // 包含该元素，那么就将该元素删除
        delete this.items[value]
        return true
    }

    // 清空集合中所有的元素
    Set.prototype.clear = function () {
        this.items = {}
    }

    // 获取集合的大小
    /**
     * Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
     * 数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致
     *  // simple array
     *  var arr = ['a', 'b', 'c'];
     *  console.log(Object.keys(arr)); // console: ['0', '1', '2']
     * 
     *  // array like object
     *  var obj = { 0: 'a', 1: 'b', 2: 'c' };
     *  console.log(Object.keys(obj)); // console: ['0', '1', '2']
     * 
     *  // array like object with random key ordering
     *  var anObj = { 100: 'a', 2: 'b', 7: 'c' };
     *  console.log(Object.keys(anObj)); // console: ['2', '7', '100']
     * 
     */
    Set.prototype.size = function () { 
        return Object.keys(this.items).length
        /**
         * 若考虑兼容性问题，使用下面的代码
         * var count = 0
         * for(var value in this.items) {
         *      if(this.item.hasOwnProperty(value)) {
         *          count++    
         *      }
         * }
         * return count
         */
    }

    Set.prototype.values = function () {
        return Object.keys(this.items)
        /**
         * 若考虑兼容性问题，使用下面的代码
         * var keys = []
         * for(var value in this.items) {
         *      keys.push(value)
         * }
         * return keys
         */
    }

}