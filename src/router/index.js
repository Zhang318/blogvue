import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from "../components/Home";
import Charts from "../components/Charts";
import ColumnManagement from "../components/ColumnManagement";
import User from "../components/User";
import ArticleList from "../components/article/ArticleManagement"
import PostArticle from "../components/article/PostArticle"
import LeaveWord from "../components/LeaveWordManage"
import Announcement from "../components/Announcement"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '登录',
      hidden: true,
      component: Login
    }, {
      path: '/home',
      name: '',
      component: Home,
      hidden: true
    },
    {
      path: '/home',
      component: Home,
      name: '文章管理',
      iconCls: 'fa fa-file-text-o',
      children: [
        {
          path: '/articleList',
          name: '文章列表',
          component: ArticleList,
          meta: {
            keepAlive: true
          }
        }, {
          path: '/postArticle',
          name: '发表文章',
          component: PostArticle,
          meta: {
            keepAlive: false
          }
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '用户管理',
      children: [
        {
          path: '/user',
          iconCls: 'fa fa-user-o',
          name: '用户管理',
          component: User
        }
      ]
    },

    {
      path: '/home',
      component: Home,
      name: '栏目管理',
      children: [
        {
          path: '/ColumnManagement',
          iconCls: 'fa fa-reorder',
          name: '栏目管理',
          component: ColumnManagement
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '留言管理',
      children: [
        {
          path: '/leaveWord',
          iconCls: 'fa fa-reorder',
          name: '留言管理',
          component: LeaveWord
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '留言管理',
      children: [
        {
          path: '/announcement',
          iconCls: 'fa fa-reorder',
          name: '系统公告',
          component: Announcement
        }
      ]
    },
    {
      path: '/home',
      component: Home,
      name: '数据统计',
      iconCls: 'fa fa-bar-chart',
      children: [
        {
          path: '/charts',
          iconCls: 'fa fa-bar-chart',
          name: '数据统计',
          component: Charts
        }
      ]
    }
  ]
})
