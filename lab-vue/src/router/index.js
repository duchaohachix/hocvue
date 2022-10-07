import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register/Register.vue'
import Album from '../views/Album/Album.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/album',
      name: 'album',
      component: Album
    },
    {
      path: '/counter',
      name: 'counter',
      component: () => import('../views/CounterBasic.vue'),
      beforeEnter: () => { console.log("before enter") },
    },
  ]
})
router.beforeResolve((from, to, next) => { console.log(from, to); next() })
router.beforeEach((from, to, next) => { console.log(from, to); next() })
export default router
