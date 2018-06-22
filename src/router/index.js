import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Animation from '@/components/Animation'
import RequestAnimationFrame from '../components/RequestAnimationFrame.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: RequestAnimationFrame
    }
  ]
})
