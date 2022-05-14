<template>
  <div>
    <!-- 路由占位符 -->
    <router-view />
    <!-- tabBar区域 -->
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {

    }
  }
}

</script>

<style lang="less" scoped>
.swiper {
  width: 100%;
  height: 180px;
  van-swipe-item img {
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}

</style>
