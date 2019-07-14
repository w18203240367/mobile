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

// 重置用户频道列表
export const resetUserChannels = channels => {
  // 指向其他逻辑
  return request({
    method: 'PUT',
    url: '/app/v1_0/user/channels',
    data: {
      channels
    }
  })
}

// 获取所有用户频道列表
export const getAllChannels = () => {
  // 指向其他逻辑
  return request({
    method: 'GET',
    url: '/app/v1_0/channels'
  })
}

// 删除用户指定频道
export const deleteUserChannel = channelId => {
  // 指向其他逻辑
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/channels/${channelId}`
  })
}

// 批量修改用户列表数据（部分覆盖）
// channels [] {id: 频道id, seq: 频道序号} 后端保存用户频道的时候为每一个频道设置了一个序号 从1 开始
// 注意: 推荐 频道 不参与序号的排列
export const updateUserChannel = channels => {
  // 指向其他逻辑
  return request({
    method: 'PATCH',
    url: `/app/v1_0/user/channels`,
    data: {
      channels
    }
  })
}
