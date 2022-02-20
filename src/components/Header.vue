<template>
  <div id="nav">
    <section>
      <div class="logo" />
      <input type="text" />

      <button></button>
      <button></button>

    </section>

    <section>
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/singlep">About</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/login">Login</router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'contact',
  
};
</script>

<style scoped>
.logo {
  display: block;
  background-image: url("~@/assets/sinus_logo.svg");
  width: 100px;

  background-size: 100px 30px;
}

#nav > section:nth-child(1) {
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 0.5rem;
}

#nav > section:nth-child(1) * {
  margin: 0 0.4rem;
}

#nav > section:nth-child(1) > input {
  width: 500px;
  border-radius: 2rem;
  border: 1.33px solid;
  border-color: #ff6e40;
}
#nav > section:nth-child(1) > button {
  width: 35px;
  height: 35px;
  border-radius: 0.3rem;
  border: 1.33px solid;
  background-color: rgba(0, 0, 0, 0);
}

#nav > section:last-of-type {
  color: #ff6e40;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 0.6rem;
  width: 100%;
  background-color: rgb(34, 34, 34);
}
</style>