import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '@/views/CounterView.vue'
import TaskListComponent from '@/components/TaskListComponent.vue'

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
      component: import('@/views/CounterView.vue')
    },
    {
      path: '/tasks',
      name: 'Lista de tareas',
      component: import('@/views/TaskListView.vue')
    }
  ]
})

export default router
