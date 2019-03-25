<template>
  <div class="home">
    <div style="display: none;">
      <img src="../assets/1.jpg" alt="">
      <img src="../assets/2.jpg" alt="">
      <img src="../assets/3.jpg" alt="">
      <img src="../assets/4.jpg" alt="">
    </div>
    <van-swipe :auto="4000" :autoplay="3000" class="swiper">
      <van-swipe-item>
        <img src="../assets/place.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/child.jpg" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/team.jpg" alt="">
      </van-swipe-item>
    </van-swipe>
    <div class="list-wrapper">
      <h1 class="list-title">热门文章推荐</h1>
      <ul>
        <li v-for="(item, index) in articleList" :key="index" @click="view(item.url)">
          <img :src="item.image" alt="">
          <div class="right">
            <p class="title">{{item.title}}</p>
            <p class="type">{{item.type}}</p>
            <span class="number"><i class="iconfont icon-zhiboguankanshu"></i> {{item.number}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getIndexList } from '../common/api'
import { Toast } from 'vant'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      imgs: [],
      articleList: [
        // {
        //   title: '橄榄球青训到底怎么“训”？梦拓带你一探究竟',
        //   desc: '青训项目',
        //   img: location.origin + '/mengtuo/img/' + '1.2e161d38.jpg',
        //   number: 2401,
        //   url: 'https://mp.weixin.qq.com/s/wYdeE8DVh8uxn0qMGCz6NA'
        // },
        // {
        //   title: '听说，北京有个NFL都没有的球场配置',
        //   desc: '场地介绍',
        //   img: location.origin + '/mengtuo/img/' + '2.c6e05fec.jpg',
        //   number: 1890,
        //   url: 'https://mp.weixin.qq.com/s/Sws72K0F3TAeaZbZ4Lm5TA'
        // },
        // {
        //   title: '梦拓DREAMTOP国际青少年夏令营开营啦',
        //   desc: '夏令营',
        //   img: location.origin + '/mengtuo/img/' + '3.a78e217a.jpg',
        //   number: 999,
        //   url: 'https://mp.weixin.qq.com/s/IpZDgc6mlH05glVv8kPLcg'
        // },
        // {
        //   title: '开课通知！3月2日我们不见不散！',
        //   desc: '开课通知',
        //   img: location.origin + '/mengtuo/img/' + '4.8267410f.jpg',
        //   number: 1092,
        //   url: 'https://mp.weixin.qq.com/s/VbIiowuGnoGaGv3a642lOA'
        // }
      ]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      getIndexList({
      }).then(res => {
        const { code, list } = res.data
        if (code === 0) {
          list.forEach(item => (item.number = Math.floor(Math.random() * 2000)))
          this.articleList = list
          // this.courseList.map(item => (item.state = true))
        } else {
          Toast('查询数据失败，请刷新重试')
          // this.$notify.error({
          //   title: '错误',
          //   message: '查询数据失败，请刷新重试',
          //   offset: 100
          // })
        }
      }).catch(() => {
        Toast('网络异常，请刷新重试')
        // this.$notify.error({
        //   title: '错误',
        //   message: '网络异常，请刷新重试',
        //   offset: 100
        // })
      })
    },
    view (url) {
      location.href = url
    }
  }
}
</script>

<style lang="stylus">
  .home
    .van-swipe
      width 100%
      height 240px
      .van-swipe-item
        img
          width 100%
          display block
          box-sizing border-box
          background-color #fff
          pointer-events none
      .custom-indicator
        position absolute
        right 5px
        bottom 5px
        padding 2px 5px
        font-size 12px
        color #fff
        background rgba(0, 0, 0, .1)
    .list-wrapper
      padding-bottom 53px
      .list-title
        height 65px
        line-height 65px
        text-align center
        font-size 14px
        color #000000
      ul
        padding 0 10px
        background #fff
        li
          display flex
          padding 20px 0
          border-bottom 1px solid #eee
          img
            width 100px
            height 64px
          .right
            position relative
            display flex
            flex-direction column
            flex 1
            padding-left 10px
            .title
              flex 1
            .type
              height 20px
              line-height 20px
              width 70px
              border 1px solid red
              color red
              border-radius 4px
              text-align center
            .number
              position absolute
              right 10px
              bottom 0
              height 20px
              line-height 20px
</style>
