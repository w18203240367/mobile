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
// 引入表单验证包
import VeeValidate, { Validator } from 'vee-validate'
// 引入表单验证汉化包
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 引入时间格式包
import relativeTime from './filters/relative-time'
// 登录状态
import checkLogin from '@/utils/check-login'
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
  PullRefresh,
  Popup,
  Icon,
  Grid,
  GridItem,
  Image,
  Lazyload,
  Dialog,
  Toast,
  Search
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
  .use(Popup)
  .use(Icon)
  .use(Grid)
  .use(GridItem)
  .use(Image)
  .use(Lazyload)
  .use(Dialog)
  .use(Toast)
  .use(Search)

Vue.config.productionTip = false
// 注册一个全局过滤器：处理相对时间
Vue.filter('relativeTime', relativeTime)
Vue.use(VeeValidate, {
  event: '' // 禁用默认事件验证
})
// 调用语言包
Validator.localize('zh_CnN', zhCN)
Vue.prototype.$sleep = time => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve()
    }, time)
  })
}
// 将检查登录状态挂在到 Vue 原型 对象上，这样的话任何组件都可以使用了
Vue.prototype.$checkLogin = checkLogin
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
