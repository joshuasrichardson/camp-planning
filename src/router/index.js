import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Campsites from '../views/Campsites.vue'
import Activities from '../views/Activities.vue'
import Preparation from '../views/Preparation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/campsites',
    name: 'Campsites',
    component: Campsites
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities,
    props: true
  },
  {
    path: '/preparation',
    name: 'Preparation',
    component: Preparation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
