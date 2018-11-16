import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '../config/env'
// import App from '../App'

Vue.use(Router)
const helloWorld = r => require.ensure([], () => r(require('@/components/helloWorld')), 'helloWorld')

export default new Router({
  routes: (() => {
    return [
      {
        path: '/',
        component: helloWorld,
        redirect: '/hello',
        children: [
          {
            path: '/hello',
            component: helloWorld
          }
        ]
      }
    ]
  })(),
  mode: routerMode
})
