<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{title}}</span>
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box">
          <img :src="path" alt="犬夜叉" class="thumb">
          <img :src="path" alt="犬夜叉" class="thumb">
          <img :src="path" alt="犬夜叉" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>{{tag}} &nbsp;&nbsp; 评价 &nbsp;&nbsp;{{score}} &nbsp;&nbsp; 发布日期 : {{date}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
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
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
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
  display: flex;
  justify-content: space-between;
}
</style>
