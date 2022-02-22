<template>
  <div class="single-product-view">
    <section>
      <SingleProductCard />
      <SingleProductInfo />
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
};
</script>

<style lang="scss" scoped>
.single-product-view {
  width: 80%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  > section:nth-of-type(1) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin: 5rem;
  }
}
</style>