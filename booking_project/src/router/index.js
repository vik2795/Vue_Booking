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
      path: '/artist',
      name: 'artist',
   
      component: () => import('../components/ArtistsView.vue'),
    },
    {
      path:'/booking',
      name:"booking",

      component: () =>import('../components/BookingView.vue'),


    }
  ],
})

export default router
