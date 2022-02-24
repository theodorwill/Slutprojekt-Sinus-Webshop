<template>
  <div class="single-product">
    <section class="top">
      <h1>SINGLE PRODUCT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <router-link to="/products"><span>Products</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Single Product</span>
      </p>
    </section>

    <SingleProductCard :product="product" />

    <SingleProductReview />
  </div>
</template>

<script>
import SingleProductCard from "@/components/SingleProductCard.vue";

import SingleProductReview from "@/components/SingleProductReview.vue";

export default {
  components: { SingleProductCard, SingleProductReview },
  computed: {
    product() {
      return this.$store.state.productList.find(

        (product) => product.id == this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.single-product{
.top {
  width: 100%;
  height: 80px;
  background-color: #e3e242;
  font-family: "Times New Roman", Times, serif;
  h1,
  p {
    display: flex;
    margin: 0;
    padding: 5px 2rem;
  }
  a {
    text-decoration: none;
  }
}
}
</style>