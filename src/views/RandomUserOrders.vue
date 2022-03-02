<template>
  <div class="products">
    <p class="mgs" v-if="!cartsProduct.length">
      You didn't purchase any product yet!
    </p>
    <div class="top-block">
      <h1>Category based overview of orders</h1>
      <div class="summery">
        <p>Paid amount (sek): {{ subTotal }}</p>
        <p>Number of category: {{ cartsProduct.length }}</p>
        <p>Number of items: {{ itemsNumber }}</p>
      </div>
    </div>

    <ul>
      <li v-for="item in cartsProduct" :key="item.id">
        <Order :item="item" />
      </li>
    </ul>
    <router-link to="/producs">BACK TO SHOP</router-link>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
import { mapGetters } from "vuex";
export default {
  components: { Order },
  computed: {
    ...mapGetters(["cartsProduct"]),

    subTotal() {
      let total = 0;
      this.cartsProduct.forEach((product) => {
        total += product.price * product.amount;
      });
      return total;
    },

    itemsNumber() {
      let num = 0;
      this.cartsProduct.forEach((item) => {
        num += item.amount;
      });
      return num;
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.products {
  width: 100%;
  margin-bottom: 100px;

  .top-block {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 1.2rem;
      margin-top: 32px;
    }

    .summery {
       margin-top: 20px; 
      p {
        text-align: center;
        margin: 4px;
        font-weight: 500;
        width: fit-content;
      }
    }
  }

  .mgs {
    text-align: center;
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    margin: 96px auto;
  }

  ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    li {
      list-style-type: none;
    }
  }
  a {
    font-family: "Fira Sans", sans-serif;
    font-style: italic;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    position: absolute;
    bottom: 24px;
    color: rgba(255, 255, 255, 0.8);
  }
}
</style>