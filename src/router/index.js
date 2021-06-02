import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/demo',
    name: 'demo',
    component: () =>import('../views/demo')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/layout'),
    children:[
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
      },
      {
        path: '/qs',
        name: 'qs',
        component: () => import('../views/qs'),
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video'),
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my'),
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
