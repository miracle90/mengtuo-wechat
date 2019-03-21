<template>
  <div class="index">
    <router-view class="router-view"/>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/index">
        <i class="iconfont icon-sidebar-Home"></i>
        <p>推荐</p>
      </router-link>
      <router-link tag="div" class="tab-item" to="/course">
        <i class="iconfont icon-home-Time"></i>
        <p>预约</p>
      </router-link>
      <router-link tag="div" class="tab-item" to="/mall">
        <i class="iconfont icon-store_icon"></i>
        <p>商城</p>
      </router-link>
      <router-link tag="div" class="tab-item" to="/my">
        <i class="iconfont icon-icon-3"></i>
        <p>我的</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
    if (!localStorage.getItem('MTINFO')) {
      this.$router.push('/')
    }
  },
  methods: {
    // getUrlParam (name) {
    //   let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    //   let r = location.search.substr(1).match(reg)
    //   if (r != null) return unescape(r[2])
    //   return null
    // },
    // userCenter () {
    //   this.$router.push('my')
    // }
  }
}
</script>

<style lang="stylus" scoped>
  .tab
    position fixed
    bottom 0
    left 0
    right 0
    display flex
    height 44px
    line-height 44px
    border-top 1px solid #eee
    background #fff
    font-size 10px
    font-weight bold
    .tab-item
      flex 1
      text-align center
      color #000000
      i
        display block
        transform translate3d(0, -6px, 0)
        height 12px
      &.router-link-active
        color #f7c033
  .router-view
    width 100%
    box-sizing border-box
</style>
