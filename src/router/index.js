import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import detail from '../views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
 
  {
    path: '/detail',
    name: 'detail',
    component: detail
  },
]

const router = new VueRouter({
  routes
})

export default router
