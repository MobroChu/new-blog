import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../config/env'
import App from '../App'

Vue.use(Router)
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const todoDemo = r => require.ensure([], () => r(require('@/pages/demo/todo/')), 'todoDemo')

export default new Router({
  routes: (() => {
    return [
      {
        path: '/',
        component: App,
        children: [
          {
            path: '/',
            redirect: '/home'
          },
          {
            path: '/home',
            component: home
          },
          {
            path: '/todo',
            component: todoDemo
          }
        ]
      }
    ]
  })(),
  mode: routerMode
})
