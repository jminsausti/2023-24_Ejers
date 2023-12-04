import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import RequisitosView from '../views/RequisitosView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component : AboutView
    },
    {
      path : '/contacto',
      name: 'contacto',
      component : ContactView
    },
    {
      path: '/requisitos',
      name : 'requisitos',
      component: RequisitosView
    }
  ]
})

export default router
