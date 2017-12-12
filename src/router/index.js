import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Table from '@/pages/Table.vue'
import UserAdd from '@/pages/UserAdd.vue'
import UserEdit from '@/pages/UserEdit.vue'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/list',
      component: Table
    },
    {
      path: '/user/add',
      component: UserAdd
    },
    {
      path: '/user/:id',
      component: UserEdit,
      props: true
    }
  ]
})
