// 搜索相关的接口

import request from '@/utils/request'

// 获取联想建议
export const getSuggestion = (q) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/suggestion',
    params: {
      q
    }
  })
}

// 获取搜索结果
export const getSearch = ({
  page = 1, // 页码
  perPage = 10, // 每页大小
  q // 搜索关键词
}) => {
  return request({
    method: 'GET',
    url: '/app/v1_0/search',
    params: {
      page,
      per_page: perPage,
      q
    }
  })
}
