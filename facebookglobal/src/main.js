import '@babel/polyfill'
import './plugins'
import './assets/scss/main.min.css'
import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './store'
import router from './router'
import Notifications from 'vue-notification'

Vue.use(Notifications)

Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),

})
