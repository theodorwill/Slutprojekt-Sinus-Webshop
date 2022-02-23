<template>
  <div class="product-card">
    <section>
      <img class="product-image"  :src="`http://localhost:5000/images/${product.imgFile}`"
        alt="Product's image"/>
    </section>

    <section>
      <h3>{{ product.title }}</h3>

      
    </section>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  margin: 0 3.5rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 500px;
  height: 400px;
  min-width: 500px;
  min-height: 400px;
  box-shadow: 0 4px 15px rgba(119, 119, 119, 0.151);
  text-align: left;

  > section {
    &:nth-of-type(1) {
      display: flex;
      justify-content:center;
      align-items: center;
      background-color: rgb(207, 207, 207);
      width: 100%;
      height: 65%;
   
    }

    &:last-of-type {
      width: 100%;
      margin: 1.8rem 0;
      display: grid;
      grid-row-gap: 0.6rem;
      grid-template-columns: 25% 25% 25% 25%;
      grid-template-areas: "header header header heart " "size size size size" "price price price stars";
      background-color: white;

      * {
        margin: 0 1.5rem;
      }

      > {
        h3 {
          grid-area: header;
        }

        p {
          grid-area: size;
        }

        h4 {
          grid-area: price;
        }
      }
    }
  }
}

.product-image {
  // width: 216px;
  height: 240px;
  border: none;
 
}
</style>