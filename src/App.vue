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
export default {
name: 'App',
components:{ HuvudPageMain }
}
</script>

<style>

</style>
