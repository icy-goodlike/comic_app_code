<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span class="title-text">{{title}}</span>
          <span class="title-bt">查看全部</span>
        </div>
        <!-- 6张图片 -->
        <div class="thumb-box">
          <div v-for="i in 6" :key="i" class="thumb-box-div">
            <img :src="path" alt="犬夜叉" class="thumb">
            <span>{{title}}</span>
          </div>
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'Comic_Info',
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    score: {
      type: String,
      default: '未知'
    },
    tag: {
      type: String,
      default: '未知'
    },
    path: {
      type: String,
      default: 'https://img0.baidu.com/it/u=198555477,943855279&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
    }
  },
  data() {
    return {
      date: '2022-05-13'
    }
  }
}
</script>

<style lang='less' scoped>
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  width: 100%;
  height: 360px;
  .thumb-box-div {
    display: inline-block;
    width: 30%;
    height: 48%;
    margin: 1%;
    text-align: center;
    img {
      width: 80%;
      height: 80%;
    }
    span {
      display: block;
    }
  }
}
.title-text {
  font-weight: 600;
  font-size: 17px;
  font-family: '微软雅黑';
}
.title-bt {
  color: #aaa;
}
</style>
