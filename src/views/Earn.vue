<template>
  <transition name="slide">
    <div class="earn">
      <Back></Back>
      <div class="earn-item" v-for="(task, index) in taskList" :key="index">
        <span class="title">{{task.type}}</span>
        <ul>
          <li v-for="(item, i) in task.taskList" :key="i">
            <span>{{item.name}}</span>
            <span>{{item.reward}}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import { getTaskList } from '../common/api/index.js'
import Back from '../components/Back.vue'
import { Toast } from 'vant'

export default {
  components: {
    Back
  },
  data () {
    return {
      taskList: []
    }
  },
  methods: {
    back () {
      history.back()
    },
    filterTaskList (list) {
      const arr = []
      list.forEach(task => {
        if (arr.filter(item => item.type === task.type).length) {
          const index = arr.findIndex(i => i.type === task.type)
          arr[index].taskList.push(task)
        } else {
          arr.push({
            type: task.type,
            taskList: [task]
          })
        }
      })
      return arr
    },
    getTaskList () {
      getTaskList({
        size: 100,
        page: 1
      }).then(res => {
        const { code, page } = res.data
        if (code === 0) {
          this.taskList = this.filterTaskList(page.records)
        } else {
          Toast('查询数据失败，请刷新重试')
        }
      }).catch(() => {
        Toast('网络异常，请刷新重试')
      })
    }
  },
  mounted () {
    this.getTaskList()
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
