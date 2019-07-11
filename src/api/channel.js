// 封装频道的api
import request from '@/utils/request'

// 获取首页频道列表
// 已登录（携带 token）： 用户频道列表
// 未登录： 推荐频道列表
export const getUserChannels = () => {
  // 指向其他逻辑
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
