import { createRouter, createWebHistory } from 'vue-router'
import CustomerPoints from '../components/points/CustomerPoints.vue'
import CustomerForm from '../components/customers/CustomerForm.vue'
import DashboardView from '../components/dashboard/DashboardView.vue'


const routes = [
  {
    path: '/points',
    name: 'Points',
    component: CustomerPoints
  },
  {
    path: '/customers',
    name: 'Customers',
    component: CustomerForm
  },
  {
    path: '/',
    redirect: '/points'
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
