import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '../store/api'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currentPage:3
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, items){
      state.products = items
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

    toCart(context, payload) {
      if (!context.state.cart.includes(payload)) {
        context.commit("toCart", payload)
      } else { alert('This item already in the cart!') }

    },
  },

  // // GETTERS.................
  getters: {
   
    cartsProduct: (state) => state.cart.map(id => state.products.products.find(product => product.id == id)),
  },

  //Uses in checkout.vue for building dynamic cards.
  
 
})
