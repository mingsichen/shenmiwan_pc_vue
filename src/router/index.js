import Vue from 'vue'
import VueRouter from 'vue-router'
import homeRouter from "./home/home"
import gameRouter from "./gameCenter/gameCenter"
import giftRouter from "./giftCenter/giftCenter"


Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    homeRouter,
    gameRouter,
    giftRouter,
    {
      path: '/customer',
      name: 'Customer',
      component: () => import('@/views/Customer/Customer.vue')
    },
    {
      path: '/gameInfo',
      name: 'GameInfo',
      component: () => import('@/views/GameInfo/GameInfo.vue')
    }, {
      path: '/news',
      name: 'News',
      component: () => import('@/views/News/News.vue')
    },
    {
      path: '/personalCenter',
      name: 'PersonalCenter',
      component: () => import('@/views/PersonalCenter/PersonalCenter.vue')
    },
    {
      path: './*',
      redirect: '/home'
    }
  ],


})

export default router