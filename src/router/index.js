import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path:'',
      name:'Home',
      component: () => import('@/page/Home'),
      children:[
        {
          path:'/',
          name:'Main',
          component:() => import('@/page/components'),
        },
        {
          path:'/test3',
          name:'Test3',
          component:() => import('@/page/components/test3')
        },
        {
          path:'/test4',
          name:'Test4',
          component:() => import('@/page/components/test4')
        },
      ],
    },
    {
      path:'/test2:id',
      name:'Test2',
      component:() => import('@/page/components/test2')
    },
  ]
})

// children:[
//   {
//     path:'/',
//     name:'Test1',
//     component:() => import('@/page/components/test1')
//   },
//   
// ]