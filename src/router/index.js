import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('../views/Recommend.vue')
      },
      {
        path: '/top',
        name: 'Top',
        component: () => import('../views/Top.vue')
      },
      {
        path: '/singer',
        name: 'Singer',
        component: () => import('../views/Singer.vue')
      }
    ]
  },
  {
    path: '/registor',
    name: 'Registor',
    component: () => import('../views/Registor.vue')
  },
  {
    path: '/userInfo',
    name: 'User',
    component: () => import('../components/User.vue')
  },
  {
    path: '/top/:id',
    name: 'TopDetail',
    component: () => import('../views/TopDetail.vue')
  },
  {
    path: '/update',
    name: 'UpdateUser',
    component: () => import('../views/UpdateUser.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
