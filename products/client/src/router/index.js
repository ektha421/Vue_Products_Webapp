import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/ProductList.vue')
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: () => import('../views/ProductCreate.vue')
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: () => import('../views/ProductUpdate.vue')
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: () => import('../views/SalesList.vue')
  },
   {
    path: '/images_insert',
    name: 'ImageInsert',
    component: () => import('../views/ImageInsert.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
