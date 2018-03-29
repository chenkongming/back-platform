import Vue from 'vue'
import Router from 'vue-router'

//开发环境不适用懒加载
const _import = require('./_import_' + process.env.NODE_ENV);

Vue.use(Router)
const routerList=[
  { path: '/', component: _import('testRouter/HelloWorld')},
];
export default new Router({
  routes: routerList
})
