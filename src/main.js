import Vue from 'vue'
import App from './App.vue'
import AtComponents from './index'
import router from './router'

Vue.use(AtComponents)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
