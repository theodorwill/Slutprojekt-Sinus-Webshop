<template>
  <div id="app">
    <Header />
    <HuvudPageFooter />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

import HuvudPageFooter from "@/components/HuvudPageFooter.vue";

export default {
  components: {
    Header,
    HuvudPageFooter,
  },
};
</script>


<style lang="scss">
html body {
  width: 1440px;
  margin: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
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
