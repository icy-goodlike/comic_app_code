import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入并安装vant插件和vant组件库
import vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
// 导入图片懒加载模块

Vue.use(vant)
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
