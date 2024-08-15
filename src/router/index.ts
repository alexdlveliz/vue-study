import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    {
      path: '/counter',
      name: 'Contador',
      component: () => import('@/views/CounterView.vue')
    },
    {
      path: '/tasks',
      name: 'Lista de tareas',
      component: () => import('@/views/TaskListView.vue')
    },
    {
      path: '/register',
      name: 'Registro',
      component: () => import('@/modules/register/views/RegisterView.vue')
    }
  ]
})

export default router
