import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Products from '@/views/Products.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import Contact from '@/views/Contact.vue'
import LoginPage from '@/views/LoginPage.vue'
import UserProfile from '@/views/UserProfile.vue'
import Admin from '@/views/Admin.vue'
import SingleProduct from '@/views/SingleProduct.vue'
import Category from '@/views/Category.vue'
import Register from '@/views/Register.vue'
import Orders from '@/views/RandomUserOrders.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    component: SingleProduct
  },
  {
    path: '/category',
    name: Category,
    component: Category
  },

  {
    path: '/orders',
    name: Orders,
    component: Orders
  },

  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }, 
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: Register
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
  },

  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
