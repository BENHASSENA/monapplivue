import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Aide from '../views/Aide.vue'
import Moncompte from '../views/Moncompte.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    
  },
  {
    path: '/aide',
    name: 'Aide',
    component: Aide
    
  },
  {
    path: '/moncompte',
    name: 'Moncompte',
    component: Moncompte
    
  },
  {
    path: '/reglages',
    name: 'Reglages',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reglages.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
