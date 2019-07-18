// 封装 axios
import request from '@/utils/request'

// 用户相关接口封装 模块
// 最佳实践 建议将所有请求封装成一个一个的小函数，在需要的时候直接调用 好处 方便维护 同意管理 可重用
// 遵循一个原则 ： 不要直接在组件中发送请求，都封装成函数进行调用
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data: {
      mobile,
      code
    }
  })
}

// 拉黑作者(添加黑名单)
export const addBlacklist = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/blacklists',
    data: {
      target: userId
    }
  })
}

// 关注用户
export const followUser = userId => {
  return request({
    method: 'POST',
    url: '/app/v1_0/user/followings',
    data: {
      target: userId
    }
  })
}

// 取消关注用户
export const unFollowUser = userId => {
  return request({
    method: 'DELETE',
    url: `/app/v1_0/user/followings/${userId}`,
    data: {
      target: userId
    }
  })
}
