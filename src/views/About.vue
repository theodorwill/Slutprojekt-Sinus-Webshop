<template>
 <section class="top">
        <h1>PRODUCTS</h1>
        <p>
          <router-link to="/"><span>Home</span></router-link>
          <img src="../assets/right.svg" alt="">
        <span>Products</span>
        </p>
      </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  background-color: #aaa;
  font-family: "Times New Roman", Times, serif;
    padding-left: 2rem;
  h1 ,p,span{
    display: flex;
    margin: 0;
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
}
</style>
