import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import { Swipe, SwipeItem } from 'vant'
import 'vant/lib/index.css'
// import VConsole from 'vconsole'

/* eslint-disable no-unused-vars */
// let vConsole = new VConsole()

Vue.use(Swipe).use(SwipeItem)

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
