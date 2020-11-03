import Vue from 'vue'
import Router from 'vue-router'
import Monopoly from '@/components/Monopoly'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Monopoly
    }
  ]
})
