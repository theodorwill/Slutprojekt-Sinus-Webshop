<template>
  <div class="single-product-view">
    <SingleProductCard />
    <SingleProductInfo />
    <SingleProductReview />

  </div>
</template>

<script>
import SingleProductCard from "@/components/SingleProductCard.vue";
import SingleProductInfo from "@/components/SingleProductInfo.vue";
import SingleProductReview from "@/components/SingleProductReview.vue";
export default {
  components: { SingleProductCard, SingleProductInfo, SingleProductReview },
};
</script>

<style>
.single-product-view {
  display: flex;
  flex-flow: row;
}
</style>