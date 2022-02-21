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
  display: block;
  background-image: url("~@/assets/sinus_logo.svg");
  width: 100px;
  background-size: 100px 30px;
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
      > button {
        width: 35px;
        height: 35px;
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
      padding: 0.6rem;
      background-color: rgb(34, 34, 34);
    }
  }
}
</style>