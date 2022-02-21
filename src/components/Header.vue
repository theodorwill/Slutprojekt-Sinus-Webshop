<template>
  <div id="nav">
    <section>
      <div class="logo" />
      <input type="text" />
      <button>User</button>
      <button>Login</button>
    </section>

    <section>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/singlep">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/login">Login</router-link>
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
#nav {
  > section {
    a {
      color: #ffffff;
      text-decoration: none;
      &.router-link-exact-active {
        color: #ff6e40;
        text-decoration: underline;
        text-decoration-thickness: 0.15rem;
      }
      & a:hover {
        color: #ff6e40;
      }
    }

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
      > button {
        width: 50px;
        height: 50px;
        border-radius: 0.3rem;
        border: 1.33px solid;
        background-color: rgba(0, 0, 0, 0);
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
    }
  }
}
</style>