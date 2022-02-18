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
      <router-link to="/about">About</router-link> |
      <router-link to="#">About</router-link> |
      <router-link to="#">About</router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  display: block;
  background-image: url("~@/assets/sinus_logo.svg");
  width: 200px;
  
  background-size: 200px 30px;
}

#nav > section:nth-child(1) {
  display: flex;
  flex-flow: row;
  justify-content: center;
  padding: 0.5rem;
}

#nav > section:nth-child(1) > input {
  width: 350px;
  border-radius: 1rem;
  border: 1.4px solid;
}
#nav > section:nth-child(1) > button {
  width: 30px;
  height: 30px;
  border-radius: 0.3rem;
  border: 1.4px solid;
  background-color: rgba(0, 0, 0, 0);
}

#nav > section:last-of-type {
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 0.6rem;
  width: 100%;
  background-color: rgb(34, 34, 34);
}
</style>