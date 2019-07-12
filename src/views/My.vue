<template>
  <div class="my">
    <div class="header">
      <img src="../assets/logo.png" alt="">
      <p>Hi，{{name}}</p>
      <p>我的积分：{{myScore}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;剩余课时：{{remain || 0}}</p>
    </div>
    <div class="btn-wrapper">
      <router-link to="/earn">
        <span class="fl"><i class="iconfont icon-jifen"></i>赚取积分</span>
        <i class="iconfont icon-arrowright fr"></i>
      </router-link>
      <router-link to="/lesson">
        <span class="fl"><i class="iconfont icon-kecheng-"></i>我的课程</span>
        <i class="iconfont icon-arrowright fr"></i>
      </router-link>
      <router-link to="/order">
        <span class="fl"><i class="iconfont icon-dingdan"></i>我的订单</span>
        <i class="iconfont icon-arrowright fr"></i>
      </router-link>
      <a @click="logout">退出登录</a>
    </div>
  </div>
</template>

<script>
import { getUserInfo } from '../common/api/index.js'
import { Toast } from 'vant'

export default {
  data () {
    return {
      id: '',
      myScore: 0,
      remain: 0,
      name: ''
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('MTINFO'))) {
      let user = JSON.parse(localStorage.getItem('MTINFO'))
      this.id = user.id
      this.getUserInfo()
    }
  },
  methods: {
    getUserInfo () {
      getUserInfo({
        id: this.id
      }).then(res => {
        const { code, user } = res.data
        if (code === 0) {
          this.name = user.name
          this.myScore = user.points
          this.remain = user.remain
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
    logout (e) {
      e.preventDefault()
      localStorage.removeItem('MTINFO')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
  .my
    background #eee
    .header
      background #fff
      padding 50px 0 30px
      text-align center
      img
        width 80px
        height 80px
        border-radius 50%
      p
        margin-top 20px
    .btn-wrapper
      a
        display block
        margin-top 10px
        padding 0 10px
        background #fff
        height 40px
        line-height 40px
        text-align center
        color #000000
        .fl
          float left
        .fr
          float right
        span
          i
            margin-right 10px
</style>
