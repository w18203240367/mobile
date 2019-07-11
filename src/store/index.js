import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 初始化的时候本地存储获取用户信息，(里面有token内容)
    user: JSON.parse(window.localStorage.getItem('user'))
  },
  mutations: {
    // 登录成功后 调用mutation 更新容器中的 user 的状态
    setUser (state, user) {
      // 将data赋值给 state.user 中
      state.user = user

      // 持久 到本地存储，防止页面刷线状态丢失
      // 将数据放到本地存储中
      window.localStorage.setItem('user', JSON.stringify(state.user))
    }
  },
  actions: {

  }
})
