<template>
  <div class="products">
    <section class="top">
      <h1>PRODUCTS</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Products</span>
      </p>
    </section>
    <div class="main-gallery">
      <div class="side-bar">
        <h1>CATEGORY</h1>
          <li>skateboard</li>
          <li>Cap</li>
          <li>Hoodie</li>
          <li>Tokebag</li>
          <li>Wheel</li>
        <h2>New Products</h2>
        <!-- <ModelCardProductsList  :product="favouriteProd"/> -->
        <!-- <img src="../assets/skateboard-1.png" alt=""> -->
        <img src="../assets/new-skateboard-3.png" alt="">
        <img src="../assets/new-skateboard-3.png" alt="">
      </div>

      <div class="product-list" >

        <router-link
          :to="'/products/' + product.id"
          v-for="product in catalogues"
          :key="product.id"
        >
          <ModelCardProductsList :product="product" />
        </router-link>
      </div>
    </div>

    <button :disabled="prevBtnDisabled" @click="getPrevPage">PREVIOUS PAGE</button>
    <button  :disabled="nextBtnDisabled" @click="getNextPage">NEXT PAGE</button>
  </div>
</template>

<script>
import ModelCardProductsList from "../components/ModelCardProductsList.vue";
import { mapGetters } from "vuex";
import {mapActions} from "vuex";

export default {
  components: { ModelCardProductsList },


  computed: {
    ...mapGetters(["catalogues", "nextBtnDisabled", "prevBtnDisabled"]),

  },

  methods: {
    ...mapActions(['getNextPage','getPrevPage'])
  },

};
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
  background-color: #0076c4;
  font-family: "Times New Roman", Times, serif;
  padding-left: 2rem;
  h1,
  p {
    color: white;
    display: flex;
    margin: 0;
    padding: 5px;
  }
  h1 {
    color: black;
  }
}
.products {
  h2 {
    text-align: start;
    // margin: 24px 0px 0px 72px;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: "side-bar" "product-list" "product-list" "product-list" "product-list";

    .side-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 32px 0px 0px 24px;
      width: 300px;
      height: 1000px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
     li{
        font-size: 1.3rem;
        padding: 0.4rem; 
        list-style: none;
      }
      h1{
        margin-bottom: 0;
      }
      img{
        width: 200px;
        height: 250px;
      }
    }

    .product-list {
      display: grid;

      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 124px;
      grid-row-gap: 60px;
      margin: 32px auto;
    }

    .footer {
      margin-top: 196px;
    }
  }

  button{
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid;
    margin:60px 30px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover{
      background-color: #45a049;
      transition: 0.5s;
    }
  }
}
</style>
