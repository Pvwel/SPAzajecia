import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Product',
    name: 'ProductView',
    component: () => import('@/views/ProductView.vue'),
    
  },
  {
  path: '/Maski',
  name: 'MaskView',
  component: () => import('@/views/MaskView.vue'),
  }
  ,
  {
  path: '/Bluzy',
  name: 'BluzyView',
  component: () => import('@/views/BluzyView.vue'),
  }
  ,
  {
  path: '/Buty',
  name: 'ButyView',
  component: () => import('@/views/ButyView.vue'),
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
