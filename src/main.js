import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueSmoothScroll from 'vue2-smooth-scroll'
import router from './router';
import VueHolder from 'vue-holderjs';

import VueI18n from 'vue-i18n';

import ru from './localization/ru.js';
import by from './localization/by.js';

import App from './App.vue';

import VueYoutube from 'vue-youtube';

Vue.use(VueHolder);

Vue.use(VueSmoothScroll);

library.add(faChevronRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.use(VueI18n);

Vue.use(VueYoutube);

Vue.config.productionTip = false

const messages = {
  ru,
  by
};

const i18n = new VueI18n({
  locale: "ru",
  messages
});

new Vue({
  render: h => h(App),
  router,
  i18n
}).$mount('#app');

Vue.config.devtools = true