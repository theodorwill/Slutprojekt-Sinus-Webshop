import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '../store/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    products: [],
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, items) {
      state.products = items
    },

    saveAuthData(state, authData){
      state.token = authData.token
      console.log(state.token)
    }
  },

  // ACTIONS.................
  actions: {

    async fetchItems(context) {
      const response = await API.getItems()
      context.commit('saveItems', response)
    },

    async login(context, {email,password}) {
      const response = await API.login(email, password)
      console.log(response)
      API.saveToken(response.data.token)

      context.commit('saveAuthData', response.data)
    },

  },

  // GETTERS.................
  getters: {
    async getCurrentUser(context) {
      const response = await API.getUser()
      context.console.log(response.data)

    },

    getClickedItem(state, id) {
      return state.products.products[id];

    }
  }
})