/**
 * 
 * 此 js 文件封装了 字典
 * 
 */

function Dictionay() {
    // 字典属性
    this.items = {}

    // 操作方法

    // 在字典中添加键值对
    Dictionay.prototype.set = function (key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个 key
    Dictionay.prototype.has = function(key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    Dictionay.prototype.remove = function (key) {
        // 判断字典中是否有这个 key
        if (!this.has(key)) {
            return false
        }
        // 从字典中删除 key
        delete this.items[key]
        return true
    }

    // 根据 key 去获取 value 
    Dictionay.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的 keys
    Dictionay.prototype.keys = function () {
        return Object.keys(this.items)
    }

    // 获取所有的 value
    Dictionay.prototype.values = function () {
        return Object.values(this.items)
    }

    // size 方法
    Dictionay.prototype.size = function () {
        return this.keys().length
    }

    // clear 方法
    Dictionay.prototype.clear = function () {
        this.items = {}
    }
}