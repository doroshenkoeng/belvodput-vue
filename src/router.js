import Vue from "vue";
import VueRouter from 'vue-router';
import Gomel from './views/Gomel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Gomel
  },
  {
    path: '/gomel',
    component: Gomel
  },
  {
    path: '/grodno',
    component: () => import(/* webpackChunkName: "grodno" */ "./views/Grodno")
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
});
