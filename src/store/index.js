import Vue from 'vue'
import Vuex from 'vuex'


import * as API from '../store/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: []
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, items) {
      state.products = items
    }
  },

  // ACTIONS.................
  actions: {

    async fetchItems(context) {
      const response = await API.getItems()
      context.commit('saveItems', response.data)
    }
  },

  // // GETTERS.................
  getters: {
    getClickedItem: (state) => (id) => {
      return state.products.products[id];

    }
  }
})