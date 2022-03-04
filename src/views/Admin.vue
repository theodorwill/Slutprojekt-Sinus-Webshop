<template>
  <div class="admin">
    <div class="logout">
      <h2>Admin</h2>
      <button @click="signOutController">logout</button>
    </div>
    <div class="admin-tasks">
      <section class="add-product">
        <h3>Add product</h3>
        <form @submit.prevent="addProducts(product)">
          <input type="text" placeholder="Ash/Green/Blue/Red/Purple" v-model="product.title" />
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
          <input type="text" placeholder="img file" v-model="product.imgFile" />
          <input
            type="text"
            placeholder="cap/hoodie/skateboard/socks/wheel/totebag"
            v-model="product.category"
          />
          <input type="text" placeholder="price" v-model="product.price" />
          <button>Add product</button>
        </form>
      </section>
      <section>
        <h3>Update product</h3>
        <form @submit.prevent="updateProducts(updateProduct)">
          <input
            type="text"
            placeholder="id number"
            v-model="updateProduct.id"
          />
          <input
            type="text"
            placeholder="title"
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
          <input
            type="text"
            placeholder="imgFile"
            v-model="updateProduct.imgFile"
          />
          <input
            type="text"
            placeholder="category"
            v-model="updateProduct.category"
          />
          <input
            type="text"
            placeholder="price"
            v-model="updateProduct.price"
          />
          <button>Update product</button>
        </form>
      </section>
      <section>
        <h3>Delete Product</h3>
        <form @submit.prevent="deleteProducts(id)">
          <input type="text" placeholder="product id" v-model="id" />
          <button>Delete product</button>
        </form>
      </section>
      <section class="get-order-list">
        <h3>Order Details</h3>
        <p>Customer's name</p>
        <p>Product's name</p>
        <p>Product quantity</p>
        <p>Total price</p>
        <p>Shipping status</p>
        <p>Delivery address</p>
      </section>

      <section class="update-order">
        <h3>update order</h3>
        <form>
          <input
            type="text"
            placeholder="order status"
            v-model="orderSatus.status"
          />
          <button>Update Status</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      product: {
        title: "",
        shortDesc: "",
        longDesc:
          "",
        imgFile: "sinus-hoodie-ash.png",
        category: "",
        price: "",
      },
      updateProduct: {
        id: null,
        title: null,
        shortDesc: null,
        longDesc: null,
        imgFile: null,
        category: null,
        price: null,
      },

      orderSatus: {
        status: "shipped",
      },
      id: "",
    };
  },

  methods: {
    ...mapActions(["addProducts", "deleteProducts", "updateProducts"]),
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

  .admin-tasks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px;
    margin: 40px;

    section {
      form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          width: 100%;
          margin: 12px 0px;
          ::placeholder {
            margin-left: 24px;
          }
        }
      }
    }

    .get-order-list,
    .update-order {
      margin-top: 48px;
    }
  }
}
</style>