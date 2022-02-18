<template>
  <div id="app">
    <Header />
    <HuvudPageMain />
    <HuvudPageFooter />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import HuvudPageMain from "@/components/HuvudPageMain.vue";
import HuvudPageFooter from "@/components/HuvudPageFooter.vue";

export default {
  components: {
    HuvudPageMain,
    HuvudPageFooter,
    Header,
  },
};
</script>


<style lang="scss">
html body {
  margin: 0rem auto 0rem auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100vh;
}

#nav {
  a {
    color: #ffffff;
    text-decoration: none;

    &.router-link-exact-active {
      color: #ff6e40;
    }
  }

  .footer-container {
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
  }
}
</style>
