import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vue_Router from 'vue-router'
import Vue_Resource from 'vue-resource'

import VueProgressBar from 'vue-progressbar' // get vue-progressbar
import infiniteScroll from 'vue-infinite-scroll'// get vue-infinite-scroll

var store = require('./store.js'); // get vuxe -> store

Vue.use(Vue_Router)
Vue.use(Vue_Resource)
Vue.use(VueProgressBar, infiniteScroll)

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
