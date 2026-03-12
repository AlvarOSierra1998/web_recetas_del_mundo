import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/InicioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'inicio',
    component: () => import('../views/InicioView.vue')
}
    
  ],
})

export default router
