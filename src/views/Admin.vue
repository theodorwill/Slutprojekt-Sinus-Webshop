<template>
  <div class="admin">
    <p class="mgs">
      *Required sections in related form must be filled up before getting button
      as active.
    </p>
    <div class="admin-tasks">
      <section class="add-product">
        <h3>Add product</h3>
        <form @submit.prevent="addProducts(product)">
          <input
            type="text"
            placeholder="Ash/Green/Blue/Red/Purple/Fire"
            v-model="product.title"
          />
          <input
            type="text"
            placeholder="short desc"
            v-model="product.shortDesc"
          />
          <input
            type="text"
            placeholder="long desc"
            v-model="product.longDesc"
          />
          <select name="image" id="image" v-model="product.imgFile">
            <option v-for="image in images.images" :key="image" :value="image">
              {{ image }}
            </option>
          </select>
          <input
            type="text"
            placeholder="cap/hoodie/skateboard/socks/wheel/totebag"
            v-model="product.category"
          />
          <input type="number" placeholder="price" v-model="product.price" />
          <button :disabled="errorsAdd">Add product</button>
        </form>
      </section>
      <section>
        <h3>Update product</h3>
        <form @submit.prevent="updateProducts(updateProduct)">
          <input
            type="number"
            placeholder="product id"
            v-model="updateProduct.id"
          />
          <input
            type="text"
            placeholder="Ash/Green/Blue/Red/Purple/Fire"
            v-model="updateProduct.title"
          />
          <input
            type="text"
            placeholder="shortDesc"
            v-model="updateProduct.shortDesc"
          />
          <input
            type="text"
            placeholder="longDesc"
            v-model="updateProduct.longDesc"
          />
          <select name="image" id="image" v-model="updateProduct.imgFile">
            <option v-for="image in images.images" :key="image" :value="image">
              {{ image }}
            </option>
          </select>
          <input
            type="text"
            placeholder="cap/hoodie/skateboard/socks/wheel/totebag"
            v-model="updateProduct.category"
          />
          <input
            type="number"
            placeholder="price"
            v-model="updateProduct.price"
          />
          <button :disabled="errorsUpdate">Update product</button>
        </form>
      </section>
      <section>
        <h3>Delete Product</h3>
        <form @submit.prevent="deleteProducts(id)">
          <input type="number" placeholder="product id" v-model="id" />
          <button :disabled="errorsDel">Delete product</button>
        </form>
      </section>

      <section class="update-order">
        <h3>Update order</h3>
        <form @submit.prevent="updateOrderStatus(orderStatus)">
          <input
            type="number"
            placeholder="order id"
            v-model="orderStatus.id"
          />
          <input
            type="text"
            placeholder="inProcess/shipped/cancelled"
            v-model="orderStatus.status"
          />
          <button :disabled="errorStatus">Update Status</button>
        </form>
      </section>
    </div>

    <table v-if="orderList.length > 0">
      <h3>Order summery</h3>
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
    <p class="info" v-else>No order history to show</p>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      product: {
        title: "",
        shortDesc: "",
        longDesc: "",
        imgFile: "sinus-hoodie-ash.png",
        category: "",
        price: "",
      },
      updateProduct: {
        id: "",
        title: "",
        shortDesc: "",
        longDesc: "",
        imgFile: "sinus-totebag-gretaedition.png",
        category: "",
        price: "",
      },

      orderStatus: {
        id: "",
        status: "",
      },
      id: "",
    };
  },

  computed: {
    ...mapState([
      "productCategory",
      "productTitle",
      "user",
      "orderList",
      "images",
    ]),
    ...mapGetters(["cartHistory", "adminLoged"]),

    errorsAdd() {
      let error = 0;
      let categoryName = this.productCategory.filter(
        (name) => name == this.product.category
      );

      let titleName = this.productTitle.filter(
        (name) => name == this.product.title
      );

      titleName.length < 1 || categoryName.length < 1 || this.product.price < 1
        ? error++
        : "";

      console.log("add products errors nr " + error);
      return error > 0 ? true : false;
    },

    errorsUpdate() {
      let error = 0;
      let categoryName = this.productCategory.filter(
        (name) => name == this.updateProduct.category
      );

      let titleName = this.productTitle.filter(
        (name) => name == this.updateProduct.title
      );

      titleName.length < 1 ||
      categoryName.length < 1 ||
      this.product.price < 0 ||
      this.updateProduct.id < 1
        ? error++
        : "";

      console.log("update errors nr " + error);
      return error > 0 ? true : false;
    },

    errorsDel() {
      return this.id < 1 ? true : false;
    },

    errorStatus() {
      return this.orderStatus.id < 1 || this.orderStatus.status == ""
        ? true
        : false;
    },

    orderId() {
      return this.orderList.map((obj) => obj.id);
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
  },

  methods: {
    ...mapActions([
      "addProducts",
      "deleteProducts",
      "updateProducts",
      "updateOrderStatus",
    ]),
    signOutController() {
      this.$store.dispatch("loggingOut");
      this.$router.push("/login");
    },

   
  },
};
</script>

<style scoped lang="scss">
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

.admin {
  width: 100%;
  min-height: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .mgs {
    font-size: 0.6rem;
    margin-top: 24px;
    font-weight: bold;
  }

  .admin-tasks {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    place-content: start;
    margin: 72px 0px;

    section {
      form {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          width: 100%;
          margin: 12px 0px;
          border-radius: 5px;
          padding: 2px 0px;
        }
        select {
          width: 100%;
        }
      }
    }
  }

  table {
    // font-family: arial, sans-serif;
    h3 {
      text-align: start;
      margin-bottom: 32px;
    }
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
  .info{
    width: fit-content;
    text-align: start;
    margin: 72px 0px 96px 24px;
  }
}
</style>