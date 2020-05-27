import Vue from 'vue'
import App from './App.vue'
import '@/styles/base.scss'
import '@/utils/rem'
import router from '@/router'
import store from '@/store'
import '@/mock/index.js'
import { Tabbar, TabbarItem,Icon,Swipe, SwipeItem,Grid, GridItem,List,Cell, CellGroup,Lazyload,Popup } from 'vant'
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(List)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Lazyload)
Vue.use(Popup)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
