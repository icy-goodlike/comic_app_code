<template>
  <div>
    <!-- 头像 -->
    <div>
      <img :src="headerImg" alt="" class="header">
    </div>
    <!-- 用户名 -->
    <div>
      <span>{{userName}}</span>
    </div>
    <!-- vip -->
    <div v-if="this.isVip">
     <img src="http://127.0.0.1:3007/icon/vip-s.png" alt="">
    </div>
    <div v-else>
     <img src="http://127.0.0.1:3007/icon/vip-u.png" alt="">
      </div>
    </div>
</template>

<script>
export default {
  props: {
    headerImg: {
      type: String,
      default: 'https://img1.baidu.com/it/u=3137843395,2298314441&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=562'
    },
    userName: {
      type: String,
      default: '默认用户名'
    },
    isVip: {
      type: Boolean,
      dafault: false
    }
  },
  name: 'UserInfo'
}
</script>

<style lang='less' scoped>
.header{
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
