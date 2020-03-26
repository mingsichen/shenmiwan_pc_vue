import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/css/swiper.css'

Vue.config.productionTip = false



Vue.use(VueAwesomeSwiper)

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')