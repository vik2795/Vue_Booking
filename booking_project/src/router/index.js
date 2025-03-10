import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/arist',
      name: 'artist',
   
      component: () => import('../views/ArtistsView.vue'),
    },
    {
      path:'/booking',
      name:"booking",

      component: () =>import('../views/BookingView.vue'),


    }
  ],
})

export default router
