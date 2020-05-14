import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
// import Recommend from '../components/Recommend.vue'

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
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      }
      // {
      //   path: '/recommend',
      //   name: 'Recommend',
      //   component: Recommend
      // },
    ]
  },
  {
    path: '/register',
    name: 'Registor',
    component: () => import('../views/Registor.vue')
  },
  {
    path: '/userInfo',
    name: 'User',
    component: () => import('../components/User.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
