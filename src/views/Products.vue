<template>
  <div class="products">
        <section class="top">
        <h1>PRODUCTS</h1>
        <p>
          <router-link to="/"><span>Home</span></router-link>
          <img src="../assets/right.svg" alt="">
        <span>Products</span>
        </p>
      </section>
    <div class="main-gallery">
      <div class="side-bar">
        <h3>Fixas efter grupp diskussion</h3>
        
      </div>
   

      <div class="product-list">
        <router-link  :to="'/products/' + product.id"
         
          v-for="product in products"
          :key="product.id">
          <ModelCardProductsList  :product="product"/>
        </router-link>
      
      </div>
       
    </div>
     
  </div>
</template>

<script>
import ModelCardProductsList from '../components/ModelCardProductsList.vue'

export default {
  components: { ModelCardProductsList },

  computed:{

    products(){
      return this.$store.state.products.products
    }
    
  },
  created(){
    this.$store.dispatch('fetchItems')
  }
 
}
</script>


<style lang="scss" scoped>
* {
  // margin: 0;
  // padding: 0px;
  box-sizing: border-box;
}
.top {
  width: 100%;
  height: 80px;
  background-color: #0076C4;
  font-family: "Times New Roman", Times, serif;
    padding-left: 2rem;
  h1 ,p{
    color: white;
    display: flex;
    margin: 0;
    padding: 5px;
  }
  h1{
    color: black;
  }
}
.products {
  h2 {
    text-align: start;
    margin: 24px 0px 0px 72px;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: "side-bar" "product-list" "product-list" "product-list" "product-list";

    .side-bar {
      margin: 32px 0px 0px 24px;
      width: 300px;
      height: 800px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .product-list {
      display: grid;

      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 2px;
      grid-row-gap: 60px;
      margin: 32px 0px 32px 56px;
    }

    .footer {
      margin-top: 196px;
    }
  }
}
</style>
