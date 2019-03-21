<template>
  <transition name="slide">
    <div class="earn">
      <Back></Back>
      <div class="earn-item">
        <span class="title">缴费</span>
        <ul>
          <li>
            <span>4000半年</span>
            <span>50</span>
          </li>
          <li>
            <span>6999全年</span>
            <span>100</span>
          </li>
          <li>
            <span>9600u12全装备</span>
            <span>100</span>
          </li>
        </ul>
      </div>
      <div class="earn-item">
        <span class="title">推荐</span>
        <ul>
          <li>
            <span>4000半年</span>
            <span>50</span>
          </li>
          <li>
            <span>6999全年</span>
            <span>100</span>
          </li>
          <li>
            <span>9600u12全装备</span>
            <span>100</span>
          </li>
        </ul>
      </div>
      <div class="earn-item">
        <span class="title">活动</span>
        <ul>
          <li>
            <span>参加各种节日party</span>
            <span>积分不等</span>
          </li>
        </ul>
      </div>
      <div class="earn-item">
        <span class="title">上课</span>
        <ul>
          <li>
            <span>连续3次出勤</span>
            <span>3</span>
          </li>
          <li>
            <span>体能测试合格</span>
            <span>10</span>
          </li>
          <li>
            <span>上课表现评分</span>
            <span>教练评分</span>
          </li>
          <li>
            <span>课后作业</span>
            <span>1</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Back from '../components/Back.vue'

export default {
  components: {
    Back
  },
  data () {
    return {}
  },
  methods: {
    back () {
      history.back()
    }
  }
}
</script>

<style lang="stylus">
  .earn
    position fixed
    top 0
    bottom 0
    z-index 100
    width 100%
    background #eee
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .earn-item
      position relative
      margin 10px 10px 15px
      padding 30px 10px 20px
      background #fff
      .title
        position absolute
        top 0
        left 0
        width 50px
        height 22px
        line-height 22px
        text-align center
        font-weight bold
        background #f7c033
        color #fff
        border-radius 0 0 6px 0
      ul
        li
          overflow hidden
          span
            &:first-child
              float left
            &:last-child
              float right
</style>
