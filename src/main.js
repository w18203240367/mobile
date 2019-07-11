import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入 Vuex
import store from './store'
// 引入转换rem包 他会自动根据页面宽度设置网页基准字体大小
import 'amfe-flexible'
// 引入转换rem包 自动把px（像素） 转换 rem单位
import 'postcss-pxtorem'
// 引入vant工具
import {
  Button,
  NavBar,
  Field,
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  List,
  Cell,
  CellGroup,
  PullRefresh
} from 'vant'
Vue.use(Button)
  .use(NavBar)
  .use(Field)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Cell)
  .use(CellGroup)
  .use(PullRefresh)
Vue.config.productionTip = false
Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve()
    }, time)
  })
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
