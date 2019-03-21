<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style lang="stylus">
  @import './style/common.styl'

  #app
    position relative
    min-height 100%
    font-family 'PingFang SC', 'STHeitiSC-Light', 'Helvetica-Light', arial, sans-serif, 'Droid Sans Fallback'
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    background #eee
    font-size 14px
    color #000000
</style>
