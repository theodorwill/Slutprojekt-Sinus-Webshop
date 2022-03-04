<template>
  <div id="app">
    <Header />
    <router-view class="router-main"/>
    <HuvudPageFooter />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import HuvudPageFooter from "@/components/HuvudPageFooter.vue";
// import LoginModal from "@/components/LoginModal.vue";

export default {
  components: {
    Header,
    HuvudPageFooter,
    // LoginModal
  },

  created() {
    this.$store.dispatch("fetchItems");
  },

  
};
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap');
:root{
  --showcase-fontfamily: 'Lora', serif;

  --primery-color: #0076C4;
  --secondary-color: #f69e03;
  --color-Btn: #1c1c1c;
  --pagebar-color:  #eb5509;
}
html{
  scroll-behavior: smooth;
}
body {
  font-family: 'Montserrat', sans-serif;
  width: 1440px;
  margin: auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
  scroll-behavior: smooth;
}

Header{
  width: 100vw;
}

.router-main{
  margin: auto;
  width: 1440px;
  align-self: center;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
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
