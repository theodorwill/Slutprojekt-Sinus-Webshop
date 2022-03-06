<template>
  <div>
    <ul class="order-list" v-for="order in orderList" :key="order.data">

      <li>
        <h2>Order: {{order.id}}</h2>
        <h2>Status: {{order.status}}</h2>
      </li>
      <hr>
      <li>
        <h2>Products:</h2>
      </li>
      <ul class="product-list" v-for="product in order.items" :key="product.data">
          <li>
            <h2>Product id:</h2>
            <p>{{product.ProductId}}</p>
          </li>

          <li>
        <h2>Product amount:</h2>
        <p>{{product.amount}}</p>

          </li>
        <li>
        <h2>Price:</h2>
        <p>{{product.price}}</p>
        </li>
      </ul> 
      <tr>
        <th>Order date:</th>
        <td>{{order.createdAt}}</td>
      </tr>
      <tr>
        <th>Shipping city:</th>
        <td>{{order.shippingCity}}</td>
      </tr>
      <tr>
        <th>Shipping street:</th>
        <td>{{order.shippingStreet}}</td>
      </tr>
      <tr>
        <th>Shipping zip:</th>
        <td>{{order.Zip}}</td>
      </tr>
      <hr>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "orderList",
    ]),
  },
 
      created() {
        this.$store.dispatch("fetchOrders");
      },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-flow: column;
  padding: 0;
  width: 100%;
  gap: 5rem;


  .order-list {
    // font-family: arial, sans-serif;
    width: 100%;
    list-style-type: none;
    padding: 0;
    
    > li{
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: space-between;
      padding: .5rem 0;
      > h2, p{
        font-size: 1.3rem;
        margin: 0;
      }
    }
    
    
    td,
    th {
      text-align: left;
      padding: 8px;
    }

    tr{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }

    .product-list{
      display: flex;
      flex-flow: column;
      width: 100%;
      list-style: none;
      padding: 0;
      margin: .5rem 0;
      border: 1px solid rgb(29, 29, 29);
      border-radius: 5px;

      li{
        padding: 0;
        width: 100%;
        display: flex;
        flex-flow: row;
        align-items: center;
        justify-content: space-between;
        text-align: left;

        h2, p{
          font-size: 1.1rem;
          margin: .5rem 1rem;
        }
      }

      li:nth-child(even){
        background-color: #a1a1a1;
      }
      
    }

    hr{
      width: 100%;
    }
  }
}
</style>