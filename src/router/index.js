import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path:'/home',
      name:'home',
      component:()=>import('../components/Home'),
      children:[
      //  文章管理
        {
          path:'/articleManagement',
          name:'articleManagement',
          // meta:{
          //   required:true
          // }
          component:()=>import('../components/article/articleManagement'),

        }
      ]
    }
  ]
})
