const { sep } = require('path')

module.exports = ({ file }) => {
  // path.sep 用于获取操作系统的路径分隔符
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5 // vant 转换的基准值
    : 75 // 我们设置稿转换的基准值

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}

/**
 * 注意： 当前文件是 Node.js 执行的 只能写 Node.js 代码
 * post-css 是一个后处理器
 * 预处理器 less、sass 处理之后的 css 在进一步处理
 * 改文件是post-css 配置文件
 * 他有很多插件：
 *    autoprefixer 用来处理样式兼容前缀用的，你不用写兼容的前缀
 *    postcss-pxtorem 用来将 px 转rem 用的
 **/
/**
 * 如果是 vant 的样式 则基于 37.5 去转（因为 vant 是基于 375 设备像素写的）px（像素）
 * 如果我们是基于（物理像素）自己的，则基于75基准值去转换
 * 转换工具以样式文件为单位进行转换的
 * 每一个文件的转换都要调用这个函数，我们可以在这里为不同的文件设置不同的转换规则
 * file：文件信息对象
 * dirname 是当前文件的目录路径
 *  基准值是： 你写的像素值/ 37.5 转换
 * 大多数的移动网页设计稿都是以 IPhone 6 为原型（IPhone 物理像素750）设计 并且根据物理像素进行设置
 */
