<template>
  <div class="products">
    <h2>Products</h2>
    <div class="main-gallery">
      <div class="side-bar">
        <h3>Fixas efter grupp diskussion</h3>
         <button @click="productsList">Get Products</button>
      </div>
   

      <div class="product-list">
        <router-link to='/about'
         
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
    },

    
  },

  methods:{
      productsList(){
      this.$store.dispatch('fetchItems')
    }
    }
}
</script>


<style lang="scss" scoped>
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
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}
.products {
  h2 {
    text-align: start;
    margin: 24px 0px 0px 72px;
    font-size: 1.2rem;
    font-family: var(--showcase-fontfamily);
  }

  a {
    text-decoration: none;
    font-family: var(--paragraph-fontfamily);
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
