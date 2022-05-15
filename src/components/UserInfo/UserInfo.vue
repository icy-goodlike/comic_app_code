<template>
  <div>
    <!-- 头像 -->
    <div class="header">
        <img :src="headerImg||default_header" alt="">
    </div>
    <!-- 用户名 -->
    <div class="user-name">
      <span>{{userName}}</span>
      <img v-if='this.isVip' :src='vip_s' alt="">
      <img v-else :src="vip_u" alt="">
    </div>
    </div>
</template>

<script>
export default {
  props: {
    headerImg: {
      type: String,
      default: ''
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
  name: 'UserInfo',
  data() {
    return {
      default_header: this.$store.state.baseImg + 'user_default_header.png',
      vip_s: this.$store.state.baseIcon + 'vip-s.png',
      vip_u: this.$store.state.baseIcon + 'vip-u.png'
    }
  }
}
</script>

<style lang='less' scoped>
.header{
  text-align: center;
  padding: 0 auto;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
}
.user-name{
  text-align: center;
  font-size: 18px;
  img{
    margin-left: 20px;
  }
}
</style>
