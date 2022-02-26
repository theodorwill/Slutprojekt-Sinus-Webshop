import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '@/api'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    token: null,
    productList: [],
    productCatalogs: [],
    currentPage: 1,
    products: {},
    cart: [],
    user: [],
    favProduct: null
  },

  // MUTATIONS..............
  mutations: {
    saveItems(state, products) {

      for (let product of products) {
        if (!state.productList.find((item) => item.id === product.id)) {
          state.productList.push({ ...product })
        }
        Vue.set(state.products, product.id, product)
      }
    },



    // TESTING PAGINATION

    savePage(state, products) {

      for (let product of products) {
        if (!state.productList.find((item) => item.id === product.id)) {
          state.productList.push({ ...product })
        }
        Vue.set(state.products, product.id, product)
      }
    },


    getFavProd(state, payload) {
      state.favProduct = payload
    },

    nextPage(state) {
      if (state.currentPage < 4) {
        state.currentPage++
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

    removeProduct(state, payload) {
      state.cart.splice(payload, 1)
    }
  },

  // ACTIONS.................
  actions: {

    async fetchItems(context) {

      if (context.state.productList.length == 0) {
        const response = await API.getItems()
        context.commit('saveItems', response.data)
        console.log('x' + response)

      }


    },


    // TESTING PAGINATION
    async fetchPage(context) {

      context.commit('nextPage')

      const response = await API.getPage(context.state.currentPage)
      context.commit('savePage', response.data)
      console.log(response)

    },

    // async fetchThirdPage(context,page) {
    //   page = 3
    //   if (context.state.productList.length < 21 ) {
    //     const response = await API.getPage(page)
    //     context.commit('savePage', response.data)
    //     console.log(response)
    //   }

    // },

    // async fetchFourthPage(context,page) {
    //   page = 4
    //   if (context.state.productList.length < 31 ) {
    //     const response = await API.getPage(page)
    //     context.commit('savePage', response.data)
    //     console.log(response)
    //   }

    // },


    async getFavProd(context) {

      if (context.state.favProduct == null) {
        const res = await API.getFavItem()
        context.commit('getFavProd', res.data.post)
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

    removeProduct(context, payload) {
      context.commit('removeProduct', payload)
    }
  },

  // GETTERS.................
  getters: {

    cartsProduct: (state) => state.cart.map(id => state.productList.find(product => product.id == id)),

  }


})