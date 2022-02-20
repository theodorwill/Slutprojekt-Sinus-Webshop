<template>
  <div class="products">
    <h2>Products</h2>
    <div class="main-gallery">
      <div class="side-bar">
        <h3>Fixas efter grupp diskussion</h3>
      </div>

      <!-- Här kommer router link v-for syntax och div bortas-->
      <div class="product-list">
        <ModelCardProductsList />
        <ModelCardProductsList />
        <ModelCardProductsList />
        <ModelCardProductsList />
        <ModelCardProductsList />
        <ModelCardProductsList />
        <ModelCardProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import ModelCardProductsList from "../components/ModelCardProductsList.vue";
export default {
  components: { ModelCardProductsList },
};
</script>

<style lang="scss" scoped>
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
