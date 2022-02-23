<template>
  <div class="product-info">
    <section>
      <h2>Some Product Name</h2>
      <p>In Stock</p>
      <h3>Sek 999</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem suscipit eaque facere sapiente.
        Exercitationem suscipit eaque facere sapiente. </p>
    </section>

    <section class="order-selection">
      <aside>
        <p>Type</p>
        <p>Color</p>
        <p>Delivery</p>
        <p>Brand</p>
      </aside>
      <aside>
        <p>Regular</p>
        <p>Brown</p>
        <p>Nordic Countries</p>
        <p>Sinus</p>
      </aside>
      <aside>

        <label for="sizes">Size</label>
        <select name="sizes">
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
        <button>Buy now</button>
      </aside>
      <aside>
        <label for="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
        >
        <button>Add to cart</button>
      </aside>
    </section>
  </div>

</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
.product-info {
  margin: 0 3.5rem;
  max-width: 600px;
  min-width: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: left;

  > section:nth-of-type(1) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    * {
      margin: 0 0 1rem 0;
    }
  }
}

.order-selection {
  width: 100%;
  display: grid;
  grid-template-columns: 15% 25% 10% 25% 25%;
  grid-template-areas: "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4";

  > aside * {
    margin: 0.3rem 0;
  }

  div input {
    width: 60px;
  }

  > aside {
    &:nth-of-type(1) {
      display: flex;
      flex-flow: column;
      grid-area: aside1;
    }

    &:nth-of-type(2) {
      display: flex;
      flex-flow: column;
      grid-area: aside2;
    }

    &:nth-of-type(3) {
      width: 120px;
      display: flex;
      flex-flow: column;
      grid-area: aside3;

      button {
        background-color: rgb(100, 212, 100);
        color: rgb(39, 39, 39);
      }
    }

    &:last-of-type {
      width: 140px;
      display: flex;
      flex-flow: column;
      grid-area: aside4;

      button {
        background-color: rgb(66, 90, 197);
        color: white;
      }
    }

    button {
      border-radius: 2rem;
      padding: 0.8rem 1.4rem;
      font-size: 0.9rem;
      font-weight: bold;
      border: none;
    }
  }
}
</style>