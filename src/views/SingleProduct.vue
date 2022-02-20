<template>
  <div class="single-product-view">
    <section>
      <SingleProductCard />
      <SingleProductInfo />
    </section>

    <section>
      <SingleProductReview />
    </section>
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
  flex-flow: column wrap;
}

.single-product-view > section:nth-of-type(1) {
  display: flex;
  flex-flow: row;
  justify-content: center;
  margin: 5rem;
}
</style>