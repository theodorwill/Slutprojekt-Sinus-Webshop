<template>
  <div id="app">
    <Header />
    <router-view />
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

 
  created() {
    this.$store.dispatch("fetchItems");
  },

  
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap');
:root{
  --showcase-fontfamily: 'Lora', serif;
  --navbar-fontfamily: 'Oswald', sans-serif;
  --allheadlines-fontfamily: 'Oswald', sans-serif;
  --paragraph-fontfamily: 'Oswald', sans-serif;
  --primery-color: #0076C4;
  --secondary-color: #f69e03;
  --color-Btn: #1c1c1c;
  --pagebar-color:  #eb5509;
}
html body {
  width: 1440px;
  margin: auto;
  display: flex;
  flex-flow: column;

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
