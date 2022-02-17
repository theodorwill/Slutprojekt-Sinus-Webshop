<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <HuvudPageMain />
    </div>
    <router-view/>


  </div>
</template>

<script>

import HuvudPageMain from './components/HuvudPageMain.vue'
import Header from '@/components/Header.vue'
export default {
name: 'App',
components:{ HuvudPageMain, Header }



export default ({
  components: {
    Header
  }
})
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
</script>

<style>

</style>
