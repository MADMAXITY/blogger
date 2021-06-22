import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Write from '../views/Write.vue'
import PostPage from '../views/PostPage.vue'

const routes = [
  {
    path: '/',
    name: 'Homepage',
    component: Homepage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/login',
    name: 'Login',
    component:Login
  },
  {
    path : '/signup',
    name: 'SignUp',
    component:Register
  },
  {
    path : '/write',
    name: 'Write',
    component:Write
  },
  {
    path: '/postpage',
    name: 'PostPage',
    component: PostPage,
    props: true
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
