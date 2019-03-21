<template>
  <ul class="course">
    <li v-for="(item, index) in courseList" :key="index">
      <p><span class="label">内容：</span><span>{{item.contentName}}</span></p>
      <p><span class="label">老师：</span><span>{{item.teacherName}}</span></p>
      <p><span class="label">时间：</span><span>{{item.startTime}}</span></p>
      <p class="number"><span class="label">课程人数：</span><span>{{item.number}}</span></p>
      <div class="appointment" @click="order(item.id)">预约</div>
    </li>
  </ul>
</template>

<script>
import { Toast } from 'vant'
import { getCourseList, orderContentApi } from '../common/api/index.js'

export default {
  data () {
    return {
      courseList: []
    }
  },
  mounted () {
    if (JSON.parse(localStorage.getItem('MTINFO'))) {
      this.username = JSON.parse(localStorage.getItem('MTINFO')).username
    }
    this.getList()
  },
  methods: {
    order (id) {
      orderContentApi({
        contentId: id,
        wechat: this.username,
        name: ''
      }).then(res => {
        const { code } = res.data
        if (code === 0) {
          Toast.success('预约成功')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getList () {
      getCourseList({
        // userId: '',
        type: '1',
        page: 1,
        size: 30
      }).then(res => {
        const { code, list } = res.data
        if (code === 0) {
          this.courseList = list.records
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
  .course
    padding 12px 12px 40px
    font-size 14px
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
      p
        flex 1
        span
          vertical-align -webkit-baseline-middle
        .label
          font-weight bold
      .number
        position absolute
        right 24px
      .appointment
        position absolute
        top 65%
        right 40px
        transform translateY(-50%)
        height 28px
        line-height 28px
        width 60px
        text-align center
        background #f8c233
        border-radius 4px
        color #fff
        font-weight bold
</style>
