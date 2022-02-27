import Vue from 'vue'
import Vuex from 'vuex'



import * as API from '@/api'

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    token: null,
    productList: [],
    products: {},
    cart: [],
    categoryName: null,
    catgStorage: [],
    
    catgObjects: {},
   
    currentPage: 1,
    maxPage: 4,
    start: 0,
    end: 10,
    user: [],

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

      state.start += 10
      state.end += 10
    },

    searchCategory(state, payload) {
      state.categoryName = payload
      state.catIsTrue = false
    },

    saveCategory(state, categoryList) {
      
      
      for (let product of categoryList) {
        if (!state.catgStorage.find((item) => item.id === product.id)) {
          state.catgStorage.push({ ...product })
        }
        Vue.set(state.catgObjects, product.id, product)
      }
      
    },


    // saveFavProd(state, payload) {
    //   state.favProduct = payload
    // },

    nextPage(state) {
      state.currentPage < state.maxPage ? state.currentPage += 1 : state.currentPage = 1
    },

    previousPage(state) {
      state.currentPage > 1 ? (state.currentPage -= 1, state.start -= 10, state.end -= 10) : ''

    },

    saveAuthData(state, authData) {
      state.token = authData.token
      console.log(state.token)
    },

    saveUserData(state, userData) {
      state.user = userData
      console.log(state.user)
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

   async fetchCategory(context, payload){
     context.commit('searchCategory', payload)
     context.state.catgStorage = []
     const response = await API.getCategory(context.state.categoryName)
     context.commit('saveCategory', response.data)
     console.log(response.data)
     
    
    
   },




    // async getFavProd(context) {

    //   if (context.state.favProduct == null) {
    //     const res = await API.getFavItem()
    //     context.commit('getFavProd', res.data.post)
    //   }
    // },



    async login(context, { email, password }) {
      const response = await API.login(email, password)
      console.log(response)
      API.saveToken(response.data.token)

      context.commit('saveAuthData', response.data)
    },

    async getCurrentUser(context) {
      const response = await API.getUser()
      context.commit('saveUserData', response.data)
    },

    async signup(context, payload) {
      console.log("Store", payload)
      const response = await API.registerAccount(payload)
      if (response) {
        context.commit('setUser', response.user)
      } else {
        throw new Error('could not complete signup')
      }
    },


    getPrevPage(context) {
      context.commit('previousPage')
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

    catalogues: (state) => state.productList.slice(state.start, state.end),

    cartsProduct: (state) => state.cart.map(id => state.productList.find(product => product.id == id)),

    // singleCategory: (state) => state.catgStorage.filter(product => product.category == state.categoryName),

    nextBtnDisabled: (state) => state.currentPage == state.maxPage ? true : false,
    prevBtnDisabled: (state) => state.start == 0 ? true : false

  }


})