import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const About = () => import('../views/about/About');
const Community = () => import('../views/community/Community');
const Shop = () => import('../views/shop/Shop');
const Store = () => import('../views/store/Store');
const Create = () => import('../views/create/Create');

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/community',
    component: Community
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/store',
    component: Store
  },
  {
    path: '/create',
    component: Create
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
