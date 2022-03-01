<template>
  <div class="admin">
    <div class="logout">
      <h2>Admin</h2>
      <p>logout</p>
    </div>
    <div class="admin-tasks">
      <section class="add-product">
        <h3>Add product</h3>
        <form>
          <input type="text" placeholder="title" vi-model="product.title" />
          <input
            type="text"
            placeholder="shortDesc"
            vi-model="product.shortDesc"
          />
          <input
            type="text"
            placeholder="longDesc"
            vi-model="product.longDesc"
          />
          <input type="text" placeholder="imgFile" vi-model="product.imgFile" />
          <input
            type="text"
            placeholder="category"
            vi-model="product.category"
          />
          <input type="text" placeholder="price" vi-model="product.price" />
          <button>Add product</button>
        </form>
      </section>
      <section>
        <h3>Update product</h3>
        <form>
          <input
            type="text"
            placeholder="id number"
            vi-model="updateProduct.title"
          />
          <input
            type="text"
            placeholder="title"
            vi-model="updateProduct.title"
          />
          <input
            type="text"
            placeholder="shortDesc"
            vi-model="updateProduct.shortDesc"
          />
          <input
            type="text"
            placeholder="longDesc"
            vi-model="updateProduct.longDesc"
          />
          <input
            type="text"
            placeholder="imgFile"
            vi-model="updateProduct.imgFile"
          />
          <input
            type="text"
            placeholder="category"
            vi-model="updateProduct.category"
          />
          <input
            type="text"
            placeholder="price"
            vi-model="updateProduct.price"
          />
          <button>Add product</button>
        </form>
      </section>
      <section>
        <h3>Delete Product</h3>
        <form>
          <input type="text" placeholder="product id" />
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
            vi-model="orderSatus.status"
          />
          <button>Update Status</button>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        title: null,
        shortDesc: null,
        longDesc: null,
        imgFile: null,
        category: null,
        price: null,
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
    };
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