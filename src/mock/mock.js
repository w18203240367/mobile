import Mock, { Random } from 'mockjs'

console.log(Mock)

/**
 * @param String
 * "string|1-10": "★" 1-10 随机
 * "string|3": "★" 循环三次   (内容 * 3)
 */

/**
 * @param number
 * "number|+1": 202 @ 目测输入 202 但 官方是 调用一次 + 102  
 * "number|1-100": 100   @ 1-100整数随机
 * "number|1-100.1-10": 1  @ 1-100随机.小数 1-10 随机
 * "number|123.1-10": 1  输出 123.小数随机1-10
 * "number|123.3": 1  出入123 保存3位小数
 * "number|123.10": 1.123 保留 10位小数 前置123......
 */

/**
 * @param number
 * "boolean|1": true  随机输出 true  与 false
 */

/**
 * @param object
 * "object|2": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    }   最多输出2个 随机出
 * 
 "object|2-4": {
      "110000": "北京市",
      "120000": "天津市",
      "130000": "河北省",
      "140000": "山西省"
    }  最多输出4个 随机出
 */

/**
 * @param Array
 * "array|1": [
      "AMD",
      "CMD",
      "UMD"
    ]  每次输出1个 随机输出

    "array|+1": [
      "AMD",
      "CMD",
      "UMD"
    ]   测试 仅输出 第一个

    "array|1-10": [
      {
        "name|+1": [
          "Hello",
          "Mock.js",
          "!"
        ]
      }
    ]  1-10  随机输出  内容（[obj,obj]） 从 第一个开始循环输出

    "array|1-10": [
      "Mock.js"
    ]  1-10 随机输出


    "array|1-10": [
      "Hello",
      "Mock.js",
      "!"
    ] 没三个 为一组 1-10 随机输出

    "array|3": [
      "Mock.js"
    ] 3个为一组 输出 1次

    "array|3": [
      "Hello",
      "Mock.js",
      "!"
    ]  3个为一组 输出 3次
 */

/**
 * 
 * @param function 
 * 'foo': 'Syntax Demo',
    'name': function() {
      return this.foo
    }   输出   {foo: "Syntax Demo", name: "Syntax Demo"}

    
 */
const getMockDataList = function(options) {
  var data = JSON.parse(options.body)
  var newData = []
  for(var i = 0; i < data.count; i++) {
    var srcList = Mock.mock({
      'data':[
        {
          'title':'@name',
          'pic_src':Random.dataImage('750','mock图片')
        }
      ]
    })
    newData.push(srcList)
    console.log(newData)
  }
  return newData
}

export { getMockDataList }