import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入需要的组件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'
Vue.use(VueRouter)

// 路由规则的数组
const routes = [
  // 定义首页路由规则
  { path: '/', component: Home },
  { path: '/user', component: User }
]

// 创建路由实例对象
const router = new VueRouter({
  routes
})
// 解决重复点击路由报错问题
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
