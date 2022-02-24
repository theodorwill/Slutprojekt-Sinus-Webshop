import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '../store/api'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    token: null,
    productList: [],
    products:{},
    cart: [],
    user: [],
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, products) {
      
        for(let product of products){
          state.productList.push(product)
          Vue.set(state.products, product.id, product)
        }
      
     
    },

    saveAuthData(state, authData) {
      state.token = authData.token
      console.log(state.token)
    },

    saveUserData(state, userData) {
      state.user.pop()
      state.user.push(userData)
    },

    toCart(state, payload) {
      state.cart.push(payload);
    },

    removeProduct(state, payload){
      state.cart.splice(payload, 1)
    }
  },

  // ACTIONS.................
  actions: {

    async fetchItems(context) {
      
      if(context.state.productList == 0){
        const response = await API.getItems()
        context.commit('saveItems', response.data)
        
      }
     
    
     
      
    },

    async login(context, {
      email,
      password
    }) {
      const response = await API.login(email, password)
      console.log(response)
      API.saveToken(response.data.token)

      context.commit('saveAuthData', response.data)
    },

    async getCurrentUser(context) {
      const response = await API.getUser()
      context.commit('saveUserData', response.data)
    },

    toCart(context, payload) {
      if (!context.state.cart.includes(payload)) {
        context.commit("toCart", payload)
      } else {
        alert('This item already in the cart!')
      }
    },

    removeProduct(context, payload){
      context.commit('removeProduct', payload)
    }
  },

  // GETTERS.................
  getters: {

    cartsProduct: (state) => state.cart.map(id => state.productList.find(product => product.id == id)),

  }

  
})