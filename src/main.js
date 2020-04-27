import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import axios from 'axios'
// axios.defaults.url = 'http://111.229.158.205:3000'
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
