// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App) // 箭头函数(=>)是ES6的新语法,扩展开就是render: (h) => { return h(App) }
}).$mount('#app')

