// 封装axios api
import axios from 'axios'

// axios.created 创建一个 axios 实例，改实例和 axios 一样的功能
// 这样做可以拥有多个请求函数，而他们的配置不一样
// 例如： 有些项目接口路径不一 使用不用的接口路径
//  'http://toutiao.course.itcast.cn'
// 'http://c.cn'
// 'http://a.cn'
const request = axios.create({
  // baseURL: 'http://toutiao.course.itcast.cn' // 本地接口地址
  baseURL: 'http://ttapi.research.itcast.cn' // 线上接口地址

})

// 路由拦截器

// 请求拦截器
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  // 如果响应结果对象中有 data 则直接返回这个 data 数据
  // 如果响应结果对象中没有 data 则不做任何处理， 直接原样返回这个数据
  return response.data.data || response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
