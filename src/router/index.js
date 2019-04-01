import Vue from 'vue'
import Router from 'vue-router'
import BlogAdd from '@/page/blog/add'
import BlogList from '@/page/blog/list'
import Container from '@/page/container/Container'
import Blog from '@/page/blog/blog'
import About from '@/page/about'
// import Dashboard from '@/page/blog/dashboard'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/list',
      name: 'Container',
      component: Container,
      children: [{
          path: 'list',
          name: '我的随笔',
          component: BlogList,
        },
        {
          path: 'add',
          name: '写博客',
          component: BlogAdd,
        },
        {
          path: 'blog',
          name: '博客',
          component: Blog,
        },
        {
          path: 'about',
          name: '关于',
          component: About,
        }
      ]
    }
  ]
})
