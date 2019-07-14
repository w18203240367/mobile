import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn' // 按需加载
dayjs.extend(relativeTime) // 扩展相对事件插件
dayjs.locale('zh-cn') // 设置使用中文

export default (value) => {
  return dayjs().from(dayjs(value))
}
