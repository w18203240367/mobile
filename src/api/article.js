// 封装文章列表

import request from '@/utils/request'

// 获取推荐频道列表数据
export const getArticles = ({
  channelId, // 频道
  timestamp, // 事件戳
  withTop // 是否包含置顶数据 ，进入页面第一次请求时包含置顶文章，1-包含置顶 0-不包含
}) => {
  return request({
    method: 'GET',
    url: '/app/v1_1/articles',
    params: {
      channel_id: channelId,
      timestamp,
      with_top: withTop
    }
  })
}
