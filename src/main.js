import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// axios
import axios from 'axios'
Vue.prototype.axios = axios

// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

// 懒加载
import Vuelazyload from 'vue-lazyload'
Vue.use(Vuelazyload, {
  // error: require("./assets/error.jpg"),
  // loading: require("./assets/loading.gif")
});

// 导航钩子，全局钩子
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem('token')
//   let isLogin
//   if (!token) {
//     isLogin = false
//   } else {
//     isLogin = true
//   }
//   if (!isLogin) {
//     if (to.path !== '/login') {
//       return next({ path: '/login' })
//     } else {
//       next()
//     }
//   } else {
//     if (to.path === '/login') {
//       return next({ path: '/home' })
//     }
//     next()
//   }
// })

// //全局请求拦截
// axios.interceptors.request.use((config) => {
//   //请求的接口不是登录和验证码接口
//   if (['/sysAdmin/login', '/captcha'].indexOf(config.url) === -1) {
//     const token = localStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = token
//       config.headers.id = localStorage.getItem('id')
//     }
//   }
//   return config
// })

new Vue({
  router,
  store,
  Vant,
  render: (h) => h(App)
}).$mount('#app')
