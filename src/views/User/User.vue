<template>
  <div class="user-container">
    <!-- 用户基本信息面板 -->
    <div class="user-card" ref="userCard">
      <!-- 用户头像、姓名 -->
      <UserInfo :isVip="isVip"></UserInfo>
      <!-- 动态、关注、粉丝 -->
      <div class="user-data">
        <div class="user-data-item">
          <span>0</span>
          <span>动态</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>关注</span>
        </div>
        <div class="user-data-item">
          <span>0</span>
          <span>粉丝</span>
        </div>
      </div>
    </div>

    <!-- 操作面板 -->
    <div class="operation">
      <van-cell-group inset class="group others">
        <van-cell title="我的收藏" is-link />
      </van-cell-group>
      <van-cell-group inset class="group large">
        <van-cell title="常用功能" />
        <van-grid :gutter="0" border:false>
          <van-grid-item  :icon="history" text="历史记录" />
          <van-grid-item  :icon="vip" text="VIP会员" />
          <van-grid-item  :icon="download" text="我的下载" />
          <van-grid-item  :icon="message" text="消息" />
        </van-grid>
      </van-cell-group>
      <van-cell-group inset class="group large">
        <van-cell title="其他功能" />
        <van-grid :gutter="0" border:false>
          <van-grid-item  :icon="settings" text="设置" />
          <van-grid-item  :icon="charge" text="充值中心" />
          <van-grid-item  :icon="comments" text="留言求片" />
          <van-grid-item  :icon="share" text="分享APP" />
        </van-grid>
      </van-cell-group>
    </div>

  </div>
</template>

<script>
// 导入用户信息组件
import UserInfo from '@/components/UserInfo/UserInfo'

export default {
  components: { UserInfo },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'User',
  data() {
    return {
      isVip: true,
      user_card: this.$store.baseImg + 'user_card_bg3.png',
      history: 'http://127.0.0.1:3007/icon/history.png',
      vip: 'http://127.0.0.1:3007/icon/vip.png',
      charge: 'http://127.0.0.1:3007/icon/charge.png',
      comments: 'http://127.0.0.1:3007/icon/comments.png',
      download: 'http://127.0.0.1:3007/icon/download.png',
      settings: 'http://127.0.0.1:3007/icon/settings.png',
      message: 'http://127.0.0.1:3007/icon/message.png',
      share: 'http://127.0.0.1:3007/icon/share.png'
    }
  }
}
</script>

<style lang="less" scoped>
.user-container {
  .user-card {
    background-color: #007bff;
    background-size: 100% 100%;
    background-image: url('http://127.0.0.1:3007/img/user_card_bg3.png');
    height: 250px;
    color: white;
    padding-top: 20px;
    .van-cell {
      color: white;
      background: transparent;
      &::after {
        display: none;
      }
      .avatar {
        width: 60px;
        height: 60px;
        background-color: #fff;
        border-radius: 50%;
        margin-right: 10px;
      }
      .username {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
  .user-data {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 14px;
    padding: 30px 0;
    .user-data-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 33.33%;
    }
  }
  .others {
    .van-cell {
      width: 100%;
      margin: 7px 0px;
    }
  }
  .van-cell__title span {
    font-weight: 600;
    font-size: 18px;
  }
  .group {
    margin: 20px 10px;
    height: 60px;
  }
  .large {
    height: 180px;
  }
  .operation {
    background-color: #eee;
    margin: 0px auto 10px auto;
    padding: 10px 0px;
    height: 500px;
  }
  .van-grid{
    height: 90px;
    box-shadow: none;
  }
}
</style>
