<template>
  <transition name="slide">
    <div class="earn-score">
      <Back></Back>
      <ul v-if="goodsList.length">
        <li v-for="(item, index) in goodsList" :key="index">
          <p><span class="label">商品名称：</span><span>{{item.name}}</span></p>
          <p><span class="label">市场价：</span><span>{{item.price}}</span></p>
          <p><span class="label">所需积分：</span><span>{{item.points}}</span></p>
          <div class="lesson-status" :class="item.status === '1' ? 'finish' : ''">{{item.status === '1' ? '已发货' : '待发货'}}</div>
        </li>
      </ul>
      <div v-else>
        还未兑换任何商品哦，赶紧去商城页面看看吧
      </div>
    </div>
  </transition>
</template>

<script>
import { getMyGoodsApi } from '../common/api/index'
import Back from '../components/Back.vue'

export default {
  components: {
    Back
  },
  data () {
    return {
      goodsList: []
    }
  },
  mounted () {
    this.userId = localStorage.getItem('MTINFO') ? JSON.parse(localStorage.getItem('MTINFO')).id : ''
    this.getMyGoods()
  },
  methods: {
    getMyGoods () {
      getMyGoodsApi({
        page: 1,
        size: 50,
        userId: this.userId
      }).then(res => {
        const { code, pageList } = res.data
        if (code === 0) {
          this.goodsList = pageList.records
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="stylus">
  .earn-score
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #eee
    ul
      position absolute
      top 50px
      left 0
      right 0
      bottom 0
      padding 12px 12px 0
      overflow auto
      li
        position relative
        display flex
        flex-direction column
        margin-bottom 12px
        padding 8px
        height 100px
        background #fff
        border-radius 10px
        box-sizing border-box
        box-shadow 0 0 10px 1px rgba(0, 0, 0, 0.2)
        .lesson-status
          position absolute
          top 50%
          right 8px
          transform translate3d(0, -50%, 0)
          height 28px
          line-height 28px
          width 50px
          border 2px solid red
          color red
          text-align center
          border-radius 5px
          &.finish
            border-color green
            color green
        p
          flex 1
          display flex
          align-items center
          font-size 14px
          span
            &.label
              width 80px
              font-weight bold
          .cancel
            width 72px
            height 22px
            line-height 22px
            text-align center
            background #fff
            border 1px solid #000
            box-sizing border-box
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
</style>
