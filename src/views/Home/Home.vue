<template>
  <div class="home-container">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" />
    <!-- tab分页栏 -->
    <van-tabs v-model="active" swipeable>
      <van-tab title="推荐">
        <!-- 轮播图组件 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :width="380" :height="200">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <!-- 内容区域 -->
        <!-- comic组件-->
        <ComicInfo v-for="(item,index) in title" :key="index" :title="item"  :path="item.comic_path" />
      </van-tab>
      <van-tab title="日漫">内容 2</van-tab>
      <van-tab title="国漫">内容 3</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getComicListAPI } from '@/api/comicAPI.js'

import ComicInfo from '@/components/ComicInfo/ComicInfo.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示数据
      limit: 1,
      comicList: [],
      // 轮播图
      images: [this.$store.state.baseImg + 'banner1.png',
        this.$store.state.baseImg + 'banner2.png',
        this.$store.state.baseImg + 'banner3.png'],
      // 搜索框的值
      value: '',
      // 激活的tap栏
      active: 0,
      // 板块标题
      title: ['精选新番', '精选国漫', '精选日漫'],
      num: [1, 1, 1, 1, 1, 1, 1, 1] // 测试数据
    }
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      const { data: res } = await getComicListAPI(this.page, this.limit)
      console.log(res.data)
      this.comicList = res.data
    }
  },
  components: {
    ComicInfo
  },
  created() {
    this.initArticleList()
  }
}
</script>

<style lang='less' scoped>
.home-container {
  padding: 5px 0 50px 0;
  .van-nav-bar {
    background-color: #007bff;
  }
  .van-nav-bar__title {
    color: white;
  }
  .van-swipe {
    margin: 5px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
  .van-swipe-item {
    border-radius: 15px;
    text-align: center;
    img {
      border-radius: 15px;
      width: 95%;
      height: 100%;
    }
  }
}
</style>
