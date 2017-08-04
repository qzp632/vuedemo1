import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list'
import detali from '@/components/detali'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/detali',
      name: 'detali',
      component: detali
    }
  ]
})
