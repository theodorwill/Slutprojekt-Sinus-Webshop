<template>
  <div class="single-product-view">
    <section>
      <SingleProductCard :product="product"/>
      <SingleProductInfo :product="product"/>
    </section>
      <SingleProductReview />
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
.single-product-view {
  

  > section:nth-of-type(1) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 5rem;
  }
}
</style>