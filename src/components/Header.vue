<template>
  <div id="nav">
    <section>
      <div class="logo" />
      <input type="text" />
      <button>User</button>

      <router-link to="/login">
        <button>
          <div class="icon-account">
          </div>
        </button>
      </router-link>
    </section>

    <section>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/singlep">About</router-link> |
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
.logo {
  width: 200px;
  height: 50px;
  background-image: url("~@/assets/sinus_logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
}
.icon-account {
  padding: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: center center;
  background-image: url("~@/assets/icon_account.svg");
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