import Vue from 'vue'
import App from './App'
import router from './router'
import jquery from 'jquery'
import bootstrap from 'bootstrap-vue'
import axios from 'axios'

Vue.use(jquery)
Vue.use(bootstrap)
// Vue.component('font-awesome-icon',FontAwesomeIcon)
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
