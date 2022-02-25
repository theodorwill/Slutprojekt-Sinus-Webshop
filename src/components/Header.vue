<template>
  <div id="nav">
    <section class="top">
      <div class="logo" />
      <input type="text"  class="search"/>

     <router-link to="/cart">
        <button>
          <div class="card">
          </div>
        </button>
      </router-link>

      <router-link to="/login">
        <button>
          <div class="login">
          </div>
        </button>
      </router-link>
    </section>

    <section>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link> 
    
      
     
    </section>
  </div>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style lang="scss" scoped>
.top{
  margin: 10px;
}
.logo {
  width: 200px;
  height: 50px;
  background-image: url("~@/assets/sinus_logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.search { 
  background-image: url("~@/assets/search.svg");
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 1.5rem;
  cursor: pointer;
  
  
  
}
.login {
  padding: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  background-image: url("~@/assets/icon_account.svg");
}
.card {
  padding: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  background-image: url("~@/assets/shopping-cart.svg");
}

#nav {
  > section {
    &:nth-child(1) {
      display: flex;
      flex-flow: row;
      justify-content: center;
      padding: 0.5rem;
      * {
        margin: 0 0.4rem;
      }
      > input {
        width: 500px;
        border-radius: 2rem;
        border: 1.33px solid;
        border-color: #ff6e40;
      }
      button {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        border-radius: 0.4rem;
        border: 1px solid;
        border-color: #222222;
        background-color: rgba(0, 0, 0, 0);
        cursor: pointer;
        transition: 0.5s;
      }

      button:hover {
        background-color: #45a049;
      }
    }
    &:last-of-type {
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
        &.router-link-exact-active {
          color: #ff6e40;
          text-decoration: underline;
          text-decoration-thickness: 0.15rem;
        }
      }

      & a:hover {
        color: #ff6e40;
      }
    }
  }
}
</style>