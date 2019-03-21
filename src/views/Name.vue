<template>
  <div class="name-view">
    <div class="reset-content">
      <ul>
        <li>
          <input placeholder="请输入学员姓名" v-model="name" />
        </li>
      </ul>
      <button @click="finish">完成</button>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { insertNameApi } from '../common/api/index'

export default {
  data () {
    return {
      mobile: '',
      name: ''
    }
  },
  mounted () {
    this.mobile = this.$route.params.mobile
  },
  methods: {
    finish () {
      if (!this.name) {
        Toast('请输入学员姓名')
        return
      }
      insertNameApi({
        username: this.mobile,
        name: this.name,
        type: '2'
      }).then(res => {
        const { code, user } = res.data
        if (code === 0) {
          localStorage.setItem('MTINFO', JSON.stringify({
            username: this.mobile,
            name: this.name,
            id: user.id
          }))
          this.$router.push('/index')
        } else {
          Toast('录入姓名失败，请重新填写')
        }
      }).catch(() => {
        Toast('网络异常，请刷新重试')
      })
    }
  }
}
</script>

<style lang="stylus">
  .name-view
    position absolute
    top 0
    bottom 0
    width 100%
    background #fff
    overflow hidden
    .reset-content
      margin 80px auto
      padding 0 37px
      text-align center
      ul
        li
          display flex
          margin-bottom 20px
          // padding 8px 0
          border-bottom 1px solid #f2f2f2
          height 35px
          line-height 35px
          list-style none
          text-align left
          font-size 15px
          input
              flex 1
              margin 8px 0
              height 18px
              line-height 18px
              border none
              text-indent 20px
              font-size 15px
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
</style>
