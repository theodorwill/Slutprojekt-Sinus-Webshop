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
    orderList: [],
    currentPage: 1,
    maxPage: null,
    start: 0,
    end: 10,
    user: [],


  },


  // MUTATIONS..........................................

  mutations: {

    // Products Catalogues
    saveItems(state, products) {

      for (let product of products) {
        if (!state.productList.find((item) => item.id === product.id)) {
          state.productList.push({
            ...product
          })
        }
        Vue.set(state.products, product.id, product)
      }
    },


    //Products categories


    searchCategory(state, payload) {
      state.categoryName = payload
    },

    saveCategory(state, categoryList) {
      for (let product of categoryList) {
        if (!state.catgStorage.find((item) => item.id === product.id)) {
          state.catgStorage.push({
            ...product
          })
        }
        Vue.set(state.catgObjects, product.id, product)
      }

    },



    // Customers Actions

    toCart(state, payload) {
      state.cart.push(payload);
    },

    removeProduct(state, payload) {
      state.cart.splice(payload, 1)
    },
    removeAllProduct(state) {
      state.cart = []
    },


    // saveFavProd(state, payload) {
    //   state.favProduct = payload
    // },



    // Pagination

    setMaxPage(state) {
      state.maxPage = Math.ceil(state.productList.length / 10)
    },

    nextPage(state) {
      state.currentPage < state.maxPage ? (state.currentPage += 1, state.start += 10, state.end += 10) : ''

    },

    previousPage(state) {
      state.currentPage > 1 ? (state.currentPage -= 1, state.start -= 10, state.end -= 10) : ''

    },



    // Orders

    saveOrder(state, payload) {
      state.orderList = payload
    },


    // Users Authentications

    saveAuthData(state, authData) {
      state.token = authData.token
    },

    saveUserData(state, userData) {
      state.user = userData
      console.log("saveUserData log", state.user)
    },

    signOut(state) {
      state.token = null;
    },
  },




  // ACTIONS.................
  actions: {

    async fetchItems(context) {
      try {
        if (context.state.productList.length < 1) {


          const response = await API.getPage(1)
          context.commit('saveItems', response.data)
          const responseTwo = await API.getPage(2)
          context.commit('saveItems', responseTwo.data)
          const responseThree = await API.getPage(3)
          context.commit('saveItems', responseThree.data)
          const responseFour = await API.getPage(4)
          context.commit('saveItems', responseFour.data)

          context.commit('setMaxPage')
        }
      } catch (error) {
        console.log(error)
      }
    },



    async fetchCategory(context, payload) {

      try {
        context.commit('searchCategory', payload)
        context.state.catgStorage = []
        if (context.state.catgStorage.length < 1) {
          const response = await API.getCategory(context.state.categoryName)
          context.commit('saveCategory', response.data)
          console.log('Categoy- ' + response.data)
        }


      } catch (error) {
        console.log(error)
      }
    },


    async fetchOrders(context) {
      try {
        const response = await API.getOrder();
        context.commit("saveOrder", response.data);
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },

    
    async postOrders(_,items) {

      const response = await API.postOrder(items)
      console.log('My post order' + response)
      
    },




    // async getFavProd(context) {

    //   if (context.state.favProduct == null) {
    //     const res = await API.getFavItem()
    //     context.commit('getFavProd', res.data.post)
    //   }
    // },



    async login(context, {
      email,
      password
    }) {
        const response = await API.login(email, password)
        console.log(response)
        API.saveToken(response.data.token)
        context.commit('saveAuthData', response.data)   
    },

    loggingOut(context){
      context.commit('signOut')
    },

    async getCurrentUser(context) {

      try {
        const response = await API.getUser()
        context.commit('saveUserData', response.data)
      } catch (error) {
        console.log("getCurrentUser error", error)
      }
    },

    async signup(context, payload) {
      try {
        await API.registerAccount(payload)
      } catch (error) {
        console.log("signup error", error)
      }
    },

    async updateUserInfo(context, payload) {
      try {
         await API.updateAccount(payload)
      } catch (error) {
        console.log("update user error!", error)
        throw error
      }
      context.commit('saveUserData', payload)
    },


    getPrevPage(context) {
      context.commit('previousPage')
    },

    getNextPage(context) {
      context.commit('nextPage')
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
    },

    removeAllProduct(context) {
      context.commit('removeAllProduct')
    }
  },

  // GETTERS.................
  getters: {

    ids: (state)=> state.cart.map(id => id),

    catalogues: (state) => state.productList.slice(state.start, state.end),

    cartsProduct: (state) => state.cart.map(id => state.productList.find(product => product.id == id)),

    // singleCategory: (state) => state.catgStorage.filter(product => product.category == state.categoryName),

    nextBtnDisabled: (state) => state.currentPage == state.maxPage ? true : false,
    prevBtnDisabled: (state) => state.start == 0 ? true : false,

    

  }


})