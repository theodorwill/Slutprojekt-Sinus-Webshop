<template>
<div class="single-product">
     <section class="top">
        <h1>SINGLE PRODUCT</h1>
        <p>
          <router-link to="/products"><span>Products</span></router-link>
          <img src="../assets/right.svg" alt="">
        <span>Single Product</span>
        </p>
      </section>
  <div class="single-product-view">
    <section>
      <SingleProductCard :product="product"/>
      <SingleProductInfo :product="product"/>
    </section>
      <SingleProductReview />
  </div>
</div>
</template>

<script>
import SingleProductCard from "@/components/SingleProductCard.vue";
import SingleProductInfo from "@/components/SingleProductInfo.vue";
import SingleProductReview from "@/components/SingleProductReview.vue";

export default {
  components: { SingleProductCard, SingleProductInfo, SingleProductReview },
  computed:{
    

     product() {
      return this.$store.state.products.products.find(
        (product) => product.id == this.$route.params.id
      );
    },
  }
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  background-color: #E3E242;
  font-family: "Times New Roman", Times, serif;
    padding-left: 2rem;
  h1 ,p{
    display: flex;
    margin: 0;
    padding: 5px;
  }
  a {
    text-decoration: none;
  }
}
.single-product-view {
  

  > section:nth-of-type(1) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 5rem;
  }
}
</style>