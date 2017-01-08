/**
 * Created by sinlov on 17/1/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 告诉vue要使用router
Vue.use(VueRouter)
/* eslint-disable no-new */
// 实例化router对象
const router = new VueRouter({
  mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
  linkActiveClass: 'u-link--Active', // 这是链接激活时的class
  // base: '/app/v1/', // 这个是设置根目录路径，用不到时就不写，默认'/'
  routes // 挂载路由集合
})

// 导出router对象
export default router
