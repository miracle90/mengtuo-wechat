<template>
  <div class="login-view">
    <div class="forget-content">
      <ul>
        <li>
          <input placeholder="请输入手机号" v-model="mobile" />
        </li>
        <li>
          <input placeholder="请输入验证码" v-model="verifyCode" maxlength="6" />
          <span @click="getCode">{{tips}}</span>
        </li>
      </ul>
      <button @click="next">登录</button>
    </div>
    <div class="login-footer">
      <p>梦拓达阵美式橄榄球</p>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { sendSMSApi, validationSMSApi } from '../common/api/index'

export default {
  data () {
    return {
      mobile: '',
      verifyCode: '',
      isSending: false,
      count: 30
    }
  },
  computed: {
    tips () {
      return this.isSending ? `(${this.count})再次获取` : '获取验证码'
    }
  },
  mounted () {
    if (localStorage.getItem('MTINFO')) {
      this.$router.push('/index')
    }
  },
  methods: {
    getCode () {
      if (this.isSending) return
      if (!this.mobile) {
        Toast('请输入有效的手机号')
        return
      }
      sendSMSApi({
        mobile: this.mobile
      }).then(res => {
        const { code } = res.data
        if (code === 0) {
          this.isSending = true
          let inter = setInterval(() => {
            if (this.count > 1) {
              this.count--
              return
            }
            clearInterval(inter)
            this.isSending = false
            this.count = 5
          }, 1000)
          Toast('验证码已发送至手机')
        } else {
          Toast('发送失败，请重试')
        }
      }).catch(() => {
        Toast('网络异常，请刷新重试')
      })
    },
    next () {
      if (!this.mobile || !this.verifyCode) {
        Toast('手机号和验证码不得为空')
        return
      }
      validationSMSApi({
        mobile: this.mobile,
        code: this.verifyCode
      }).then(res => {
        const { code, user } = res.data
        if (code === 0) {
          if (user) {
            const { username, name, points, id } = user
            localStorage.setItem('MTINFO', JSON.stringify({
              username,
              name,
              points,
              id
            }))
            this.$router.push('/index')
          } else {
            this.$router.push({
              name: 'name',
              params: {
                mobile: this.mobile
              }
            })
          }
        } else {
          Toast('验证码错误，请重新填写')
        }
      }).catch(() => {
        Toast('网络异常，请刷新重试')
      })
    }
  }
}
</script>

<style lang="stylus">
  .login-view
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    background #fff
    overflow hidden
    .forget-content
      margin 80px auto
      padding 0 37px
      text-align center
      ul
        li
          display flex
          margin-bottom 20px
          border-bottom 1px solid #f2f2f2
          height 35px
          line-height 35px
          list-style none
          text-align left
          font-size 14px
          span
            margin-top 8px
            height 18px
            line-height 18px
            border-right 1px solid #f2f2f2
            color #333333
          input
            flex 1
            margin 8px 0
            height 18px
            line-height 18px
            border none
            text-indent 20px
            font-size 14px
      button
        margin-top 40px
        width 90%
        height 40px
        border none
        background #ffd400
        font-size 18px
        color #000000
        border-radius 30px
        letter-spacing 4px
    .login-footer
      position absolute
      bottom 20px
      left 50%
      transform translateX(-50%)
      p
        text-align center
        font-size 12px
        color #b3b3b3
</style>
