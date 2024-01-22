import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: 'home',
      component: HomeView
    },
    {
      path: '/list-posts',
      name: 'list-posts',
      meta: 'list-posts',
      component: () => import('../views/ListPostView.vue')
    },
    {
      path: '/list-posts/post/:id',
      name: 'post',
      meta: 'post',
      component: () => import('../views/PostView.vue')
    }
  ]
})

export default router
