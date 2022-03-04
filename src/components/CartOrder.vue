<template>
  <div class="products">
    <p
      class="mgs"
      v-if="!cartsProduct.length"
    >
      You didn't purchase any product yet!
    </p>
    <div class="top-block">
      <h2>Order id:</h2>
      <h2>Status:</h2>
    </div>
    <ul>
      <li
        v-for="item in cartsProduct"
        :key="item.id"
      >
        <div class="item-model">
          <div>
            <h1>{{ item.title }}</h1>
            <h2>{{ item.category }}</h2>
          </div>
          <div>
            <p>SEK </p>
          </div>
          <div>
            <p>Product description</p>
            <p>{{ item.longDesc }}</p>

          </div>
        </div>
      </li>
    </ul>

    <table>
      <tr>
        <th>Order id:</th>
        <td>123</td>
      </tr>
      <tr>
        <th>Status:</th>
        <td>inProcess</td>
      </tr>
      <tr>
        <th>Shipping city:</th>
        <td>something</td>
      </tr>
      <tr>
        <th>Shipping street:</th>
        <td>something 12</td>
      </tr>
      <tr>
        <th>Shipping zip:</th>
        <td>12345</td>
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
    <router-link to="/producs">BACK TO SHOP</router-link>
  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
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
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 80%;
  padding: 50px 0;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);

  .top-block {
    display: flex;
    justify-content: space-between;
    h1 {
      font-size: 1.2rem;
      margin-top: 32px;
    }

    .item-model {
      width: 100%;
      height: auto;
      background-color: #fff;
      padding: 14px;
      border-radius: 5px;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);

      h1 {
        // font-family: "Sansita", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 30px;
        padding: 1rem;
        align-items: center;
        color: #eb5509;
      }

      p {
        // font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        display: flex;
        align-items: center;
        color: rgba(0, 0, 0, 0.4);
      }
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

  ul {
    width: 94%;
    display: flex;
    flex-flow: column;
    

    li {
      width: 100%;
      height: auto;
      background-color: rgb(250, 249, 253);
      border-radius: 5px;
      box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
      list-style-type: none;
      margin: 1rem 0;
        div:nth-child(1),
        div:nth-child(3){
          padding: 1rem 0;
          > h1 {
            color:#eb5509;
          }
        }
      div:nth-child(2) {
        background: #dddddd;
        border-top: 1px dotted #707070;
        border-bottom: 1px dotted #707070;
        padding: 1.5rem 0;

        p {
          font-size: 1.5rem;
          font-weight: bold;
          color: rgb(56, 56, 56);
        }
      }

      div:nth-child(3){
        > p:first-of-type{
          font-weight: bold;
          font-size: 1.5rem;
        }
      }

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
</style>