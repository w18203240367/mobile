/**
 *  校验登录状态
 */
import store from '@/store'
import router from '@/router'
import { Dialog } from 'vant'

export default () => {
  const { user } = store.state
  // checkLogin()
  /**
   * 返回布尔值，表示是否登录
   */
  if (user) {
    return true
  }
  // 如果没有登录，则提示 “ 该操作需要登录”
  Dialog.confirm({
    title: '操作提示',
    message: '该操作需要登录，是否登录？'
  }).then(() => {
    // 用户点击确认跳转到登录页
    router.push({
      name: 'login'
    })
    // 登录成功，返回之前的页面
  }).catch(() => {
    // on cancel
  })
}
