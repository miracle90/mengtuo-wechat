import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Course from './views/Course.vue'
import My from './views/My.vue'
import Mall from './views/Mall.vue'
import Index from './views/Index.vue'
import Earn from './views/Earn.vue'
import Lesson from './views/Lesson.vue'
import Order from './views/Order.vue'
import Login from './views/Login.vue'
import Name from './views/Name.vue'

Vue.use(Router)

export default new Router({
  // base: 'mengtuo',
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/name',
      name: 'name',
      component: Name
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/course',
          component: Course
        },
        {
          path: '/mall',
          component: Mall
        },
        {
          path: '/my',
          component: My
        }
      ]
    },
    {
      path: '/earn',
      component: Earn
    },
    {
      path: '/lesson',
      component: Lesson
    },
    {
      path: '/order',
      component: Order
    }
  ]
})
