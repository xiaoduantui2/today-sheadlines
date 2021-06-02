import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('../views/Home.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component:() => import('../views/layout')
  }
]

const router = new VueRouter({
  routes
})

export default router
