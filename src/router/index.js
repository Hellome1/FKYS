import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  {
    path: '/c',
    name: 'comp',
    component: () => import('@/components/tool/index.vue')
  },
  {
    path: '/edit',
    name: 'edit',
    component: () => import('@/views/edit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
