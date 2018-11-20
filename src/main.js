// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import './config/rem'
import './assets/base.css'
import '@/assets/font/iconfont.css'
import FastClick from 'fastclick'
import store from '@/store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

if (process.env.NODE_ENV === 'development') require('@/mock/')

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  }, false)
}

/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
