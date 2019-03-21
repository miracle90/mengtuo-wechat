<template>
  <div class="go-back">
    <span @click="goBack"><i class="iconfont icon-arrow-left"></i> 返回</span>
  </div>
</template>

<script>
export default {
  methods: {
    goBack () {
      history.back()
    }
  }
}
</script>

<style lang="stylus" scoped>
  .go-back
    padding-left 12px
    height 50px
    line-height 50px
    border-bottom 1px solid #eee
    box-sizing border-box
    font-size 16px
    font-weight bold
    background #fff
</style>
