<template>
  <div class="home-container">
    <!-- navbar -->
    <van-nav-bar class='top'
    fixed
    title="动漫精选"/>

    <!-- 轮播图组件 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :width="360" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 上拉加载 -->
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
          <!-- comic组件-->
          <ComicInfo v-for="item in comicList" :key="item.id"
          :title="item.comic_name"
          :score="item.comic_score"
          :tag="item.comic_tag"
          :path="item.comic_path"
          />
      </van-list>
    </van-pull-refresh>
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
      page: 1, // 页码值
      limit: 1, // 每页显示数据
      comicList: [],
      images: ['https://img1.baidu.com/it/u=3916934225,590015279&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500',
        'https://img0.baidu.com/it/u=198555477,943855279&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
        'https://img0.baidu.com/it/u=198555477,943855279&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500'
      ], // 轮播图
      // loading为false则可以触发上拉加载事件，为true则无法触发，所以在触发loading事件时务必设置为true防止事件反复触发
      // 当数据请求回来后则记得把true改为false，防止下次触发load事件无效
      loading: true,
      // 当没有数据时，把finish设置为true
      finished: false,
      refreshing: false,
      num: [1, 1, 1, 1, 1, 1, 1, 1] // 测试数据
    }
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList() {
      const { data: res } = await getComicListAPI(this.page, this.limit)
      console.log(res.data)
      this.comicList = res.data
      // 当第一页数据请求回来后，把上拉加载的loading打开
      this.loading = false
    },
    onLoad() {
      console.log('触发了load事件')
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
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
    padding: 46px 0 50px 0;
      .van-nav-bar {
        background-color: #007bff;
      }
      .van-nav-bar__title{
        color:white;
      }
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
      }
      .van-swipe-item{
         border-radius: 15px;
        img{
          border-radius: 15px;
          width:95%;
          height:100%;
        }
      }
  }

</style>
