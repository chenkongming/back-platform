import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie
// 开发环境不适用懒加载
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const routerList = [
  { path: '/', component: _import('testRouter/HelloWorld') }
]

Router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {

    }
  } else {

  }
})

Router.afterEach(() => {
  NProgress.done() // finish progress bar
})

export default new Router({
  routes: routerList
})
