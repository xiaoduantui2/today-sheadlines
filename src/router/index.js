import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import('../views/Home.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  
  //   component:
  // }
]

const router = new VueRouter({
  routes
})

export default router
