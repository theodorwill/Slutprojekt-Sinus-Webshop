import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Contact from '../views/Contact.vue'
import LoginPage from '../views/LoginPage.vue'
import UserProfile from '../views/UserProfile.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Cart from '../views/Cart.vue'



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
    path: '/products',
    name: 'Products',
    component: Products
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
    path: '/products/:id',
    

    component: SingleProduct

  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
