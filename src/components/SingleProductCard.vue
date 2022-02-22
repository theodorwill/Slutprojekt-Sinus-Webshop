<template>
  <div class="product-card">
    <section>
      <div class="product-image" />
    </section>

    <section>
      <h3>Lorem ipsum dolor </h3>
      <p>Lorem ipsum dolor </p>
      <h4>Sek 999</h4>
    </section>
  </div>
</template>

<script>
export default {

  
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
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: 45%;
  background-position: bottom center;
  background-image: url("~@/assets/hoodie_red.svg");
}
</style>