<template>
  <ul class="mall">
    <li v-for="(item, index) in mallList" :key="index">
      <div class="img-wrapper">
        <img :src="item.url" alt="">
      </div>
      <div class="info">
        <p class="title">{{item.name}}</p>
        <p class="score"><span>{{item.points}}</span>积分</p>
        <p class="price">市场价：{{item.price}} 元</p>
      </div>
      <div class="exchange" @click="exchange(item.id)">立即兑换</div>
    </li>
  </ul>
</template>

<script>
import { Toast } from 'vant'
import { getGoodsList, orderGoodsApi } from '../common/api/index.js'

export default {
  data () {
    return {
      mallList: [
        // {}
      ]
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('MTINFO'))) {
      this.userId = JSON.parse(localStorage.getItem('MTINFO')).id
    }
    this.getList()
  },
  methods: {
    exchange (id) {
      orderGoodsApi({
        goodsId: id,
        userId: this.userId
      }).then(res => {
        const { code } = res.data
        if (code === 0) {
          Toast.success('兑换成功')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getList () {
      getGoodsList({
        userId: '',
        page: 1,
        size: 10
      }).then(res => {
        const { code, page } = res.data
        if (code === 0) {
          this.mallList = page.records
        } else {

        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus">
  .mall
    padding-top 10px
    padding-bottom 40px
    li
      display flex
      position relative
      margin 0 10px 10px
      padding 10px
      // border-bottom 1px solid #eee
      background #fff
      color hsla(0,0%,100%,.3)
      font-size 14px
      .img-wrapper
        width 100px
        img
          width 100px
          height 100px
      .info
        flex 1
        padding-left 10px
        .title
          color #000000
          font-weight bold
        .score
          margin-top 30px
          color rgb(255, 80, 0)
          span
            margin-right 4px
            font-size 20px
            font-weight bold
        .price
          color rgba(0, 0, 0, 0.6)
      .exchange
        position absolute
        right 20px
        top 50%
        transform translateY(-50%)
        height 30px
        line-height 30px
        width 80px
        border-radius 4px
        text-align center
        background #f7c033
        color #fff
        font-weight bold
</style>
