/**
 * Created by sinlov on 17/1/7.
 */

// 当路由集合变得庞大时，如果还是写在router.js里，就会显得拥挤，不便于阅读 所以另外设立了一个 routers

// 导入之前写好的两个模板 Home Article
import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Pager from './components/Pager.vue'

// 编写路由集合
const routes = [
  {
    name: 'Home', // 路由名，这个字段是可选的
    path: '/', // 路由路径，这里是根路径所以是'/'
    component: Home // 模板
  }, // 这些是常用的
  {
    name: 'Article',
    path: '/article',
    component: Article
  },
  {
    name: 'Pager',
    path: '/pager',
    component: Pager
  }
]
// 导出路由集合
export default routes
