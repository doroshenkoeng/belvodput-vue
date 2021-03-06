import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSmoothScroll from 'vue2-smooth-scroll'

import LoadScript from 'vue-plugin-load-script';

import App from './App.vue'

Vue.use(VueSmoothScroll)
Vue.use(LoadScript);
Vue.loadScript("https://code.jquery.com/jquery-3.6.0.min.js")

library.add(faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
