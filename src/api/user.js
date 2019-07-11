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
