<template>
  <div id="nav">
    <div class="header">
      <section class="top">
        <div class="logo"></div>
      </section>

      <section class="middle">
        <router-link to="/category">
          <input
            type="text"
            class="search"
            v-model="category"
            @change="fetchCategory(category)"
            placeholder="Serch by category"
          />
        </router-link>
      </section>

      <section class="bottom">
          <router-link to="/cart">
        <div class="card">
          <!-- <span>{{inCard.length}}</span> -->
        </div>
          </router-link>
          <router-link to="/login">
        <div class="login">
        </div>
          </router-link>
      </section>
    </div>

    <section class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </section>
  </div>
</template>

<script>
import { mapActions,  } from "vuex";
export default {
  data() {
    return {
      category: null,
    };
  },
  computed:{
    // ...mapGetters({inCart: "cartItems"})
  },
  methods: {
    ...mapActions(["fetchCategory"]),
  },
};
</script>

<style lang="scss" scoped>
#nav {
  .header{
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    }
  .top {
    width: 200px;
    height: 50px;
    background-image: url("~@/assets/sinus_logo.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
 
  }
  .middle {
   
    input {
      margin: 0;
      padding-left: 1rem;
      width: 500px;
      height: 50px;
      border-radius: 2rem;
      border: 1.33px solid;
      border-color: #ff6e40;
      background-image: url("~@/assets/search.svg");
      background-position: right top;
      background-repeat: no-repeat;
      background-size: contain;
      font-size: 1.5rem;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .bottom{
    display: flex;
    justify-content: space-evenly;
    width: 200px;
    }
    .login {
      width: 50px;
      height: 50px;
      border-radius: 0.4rem;
      border: 1px solid;
      border-color: #222222;
      background-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      transition: 0.5s;
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      background-image: url("~@/assets/icon_account.svg");
      &:hover {
        background-color: #45a049;
        }
    }
    .card {
      width: 50px;
      height: 50px;
      border-radius: 0.4rem;
      border: 1px solid;
      border-color: #222222;
      background-color: rgba(0, 0, 0, 0);
      cursor: pointer;
      transition: 0.5s;
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: center;
      background-image: url("~@/assets/shopping-cart.svg");
      &:hover {
          background-color: #45a049;
        }
    }
      
  .navbar{
     color: #ff6e40;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    padding: 1rem;
    font-size: 1.1rem;
    background-color: rgb(34, 34, 34);
    > a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
      &.router-link-exact-active {
        color: #ff6e40;
        text-decoration: underline;
        text-decoration-thickness: 0.15rem;
      }
    }
    & a:hover {
      transition: 0.5s;
      color: #ff6e40;
    }
  }

}



</style>