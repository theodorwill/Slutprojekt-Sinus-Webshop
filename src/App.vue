<template>
  <div id="app">
    <Header />
    <router-view class="router-main"/>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import LoginModal from "@/components/LoginModal.vue";

export default {
  components: {
    Header,
    Footer,
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

a,
  a:hover,
  a:focus,
  a:active {
    color: inherit;
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

.breadcrumbs {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: 100%;
  margin: 1rem 0;
  h1{
    display: flex;
    margin: 0 1.2rem;
  }
  
  p {
    display: flex;
    margin: 0 1.2rem;
    padding: 0 2rem;
    font-size: 1.2rem;
    span{
      padding: 0 .4rem;
    }
  }

  span{

    p{
      font-size: 1.2rem;
    }
  }

  > div {
    width: 100%;
    hr {
      background: #2c3e50;
      height: 1px; 
      width: 96%;
    }
  }
}

</style>
