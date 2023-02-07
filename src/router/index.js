import vMainPage from '@/components/main-page/v-main-page'
import { createRouter, createWebHashHistory } from 'vue-router'




const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: vMainPage
  },
  {
    path: '/catalog',
    name: 'catalog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/components/catalog/v-catalog')
  },
  {
    path: '/transfer',
    name: 'transfer',
    component: () => import(/* webpackChunkName: "about" */ '@/components/main-page/v-transfer')
  },
  {
    path: '/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '@/components/main-page/v-info')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "about" */ '@/components/cart/v-cart'),
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
