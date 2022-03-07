<template>
  <div class="main">
    <section class="top">
      <h1>ORDER HISTORY</h1>
      <p>
        <router-link to="/user"><span>Profile</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Order history</span>
      </p>
    </section>
    <p class="mgs" v-if="cartHistory.length < 1 && cartsProduct.length < 1" >
      You didn't purchase any product yet!
    </p>

    <div class="products" v-else>
      <h1>Category based overview of orders</h1>

      <ul class="order-list" v-if="customerLoged == false">
        <li v-for="item in cartsProduct" :key="item.id">
          <Order :item="item" />
        </li>
      </ul>
      <ul class="order-list" v-else>
        <li v-for="item in carts" :key="item.id">
          <Order :item="item" />
        </li>
      </ul>

      <table v-if="customerLoged == false">
        <tr>
          <th>Order id:</th>
          <td>1339</td>
        </tr>
        <tr>
          <th>Status:</th>
          <td>inProcess</td>
        </tr>
        <tr>
          <th>Shipping city:</th>
          <td>Stockholm</td>
        </tr>
        <tr>
          <th>Shipping street:</th>
          <td>Norutberg 12</td>
        </tr>
        <tr>
          <th>Shipping zip:</th>
          <td>234 56</td>
        </tr>
        <tr>
          <th>Products:</th>
          <td>{{ cartsProduct.length }}</td>
        </tr>
        <tr>
          <th>Product quantity:</th>
          <td>{{ itemsNumber }}</td>
        </tr>
        <tr>
          <th>Total sum:</th>
          <td>SEK {{ subTotal }}</td>
        </tr>
      </table>
      <!-- Conditional rendering's divider -->
      <table v-else>
        <tr>
          <th>Order id:</th>
          <td>{{ orderId }}</td>
        </tr>
        <tr>
          <th>Status:</th>
          <td>inProcess</td>
        </tr>
        <tr>
          <th>Shipping city:</th>
          <td>{{ user.address.city }}</td>
        </tr>
        <tr>
          <th>Shipping street:</th>
          <td>{{ user.address.street }}</td>
        </tr>
        <tr>
          <th>Shipping zip:</th>
          <td>{{ user.address.zip }}</td>
        </tr>
        <tr>
          <th>Products:</th>
          <td>{{ carts.length }}</td>
        </tr>
        <tr>
          <th>Product quantity:</th>
          <td>{{ itemsAmount }}</td>
        </tr>
        <tr>
          <th>Total sum:</th>
          <td>SEK {{ total }}</td>
        </tr>
      </table>
      <router-link to="/producs">BACK TO SHOP</router-link>
    </div>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
import { mapGetters } from "vuex";
import { mapState } from "vuex";
export default {
  components: { Order },
  computed: {
    ...mapGetters(["cartsProduct", "cartHistory", "customerLoged"]),
    ...mapState(["user", "orderList", "delivery"]),

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

    total() {
      let total = 0;
      this.carts.forEach((product) => {
        total += product.price * product.amount;
      });
      return total;
    },

    itemsAmount() {
      let num = 0;
      this.carts.forEach((item) => {
        num += item.amount;
      });
      return num;
    },

    carts() {
      return this.cartHistory.map((id) =>
        this.$store.state.productList.find((product) => product.id == id)
      );
    },

    orderId() {
      return this.orderList.map((obj) => obj.id);
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
.main {
  width: 100%;
  .mgs {
    text-align: center;
    font-size: 1.5rem;
    height: 100vh;
    margin-top: 96px;
  }
  .top {
    width: 100%;
    height: 80px;
    background-color: #f69e03;
    // font-family: "Times New Roman", Times, serif;
    h1,
    p {
      display: flex;
      margin: 0;
      padding: 5px 2rem;
      color: white;
    }
    h1 {
      color: black;
    }
    a {
      text-decoration: none;
    }
  }
  .products {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 100px;

    h1 {
      font-size: 1.2rem;
      margin: 24px 0px 0px 16px;
    }

    .order-list {
      width: 320px;
      display: grid;
      grid-auto-rows: 15px;
      height: 750px;

      li {
        list-style-type: none;
      }

      li:hover {
        z-index: 1;
      }
    }

    table {
      // font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 96%;
      td,
      th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      tr:nth-child(even) {
        background-color: #dddddd;
      }
    }
    a {
      // font-family: "Fira Sans", sans-serif;
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
}
</style>