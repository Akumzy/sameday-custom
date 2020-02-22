import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/production-house',
    name: 'ProductionHouse',
    component: () => import(/* webpackChunkName: "ProductionHouse" */ '../views/ProductionHouse.vue')
  },
  {
    path: '/production-house/:id',
    name: 'ProductionHouseView',
    component: () => import(/* webpackChunkName: "ProductionHouseView" */ '../views/ProductionHouseView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
