import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/gomel'
  },
  {
    path: '/gomel',
    component: () => import(/* webpackChunkName: "gomel" */ "./views/Gomel")
  },
  {
    path: '/grodno',
    component: () => import(/* webpackChunkName: "grodno" */ "./views/Grodno")
  },
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */ "./views/News")
  }
  // {
  //   path: '/gomel/news',
  //   redirect: '/news'
  // },
  // {
  //   path: '/grodno/news',
  //   redirect: '/news'
  // }
]

export default new VueRouter({
  routes,
  mode: 'history'
});
