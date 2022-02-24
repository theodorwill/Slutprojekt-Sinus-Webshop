import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '../store/api'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    token: null,
    products: [],
    cart: [],
    user: [],
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, items) {
      state.products = items
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
  },

  // ACTIONS.................
  actions: {

    async fetchItems(context) {
      const response = await API.getItems()
      context.commit('saveItems', response.data)
      // console.log(context)
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
    }
  },

  // GETTERS.................
  getters: {

    cartsProduct: (state) => state.cart.map(id => state.products.products.find(product => product.id == id)),

    getClickedItem(state, id) {
      return state.products.products[id];

    },

  }
})