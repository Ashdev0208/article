import { createRouter, createWebHistory } from 'vue-router'
import { homeView, registerView, loginView } from '@/views'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/register',
      name: 'register',
      component: registerView,
    },
    {
      path: '/login',
      name: 'login',
      component: loginView,
    },
  ],
})

export default router
