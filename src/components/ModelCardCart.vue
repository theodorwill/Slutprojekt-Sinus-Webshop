<template>
  <article class="model-card-cart">
    <div class="product-info">
      <div class="card-image">
        <img
          :src="`http://localhost:5000/images/${item.imgFile}`"
          alt="Product's image"
        />
      </div>
      <div class="text-info">
        <h3>Sinus {{ item.category }}</h3>
        <p>{{ item.shortDesc }}</p>
      </div>
    </div>
    <div class="quantities">
      <!-- v-model number in data-->
      <select class="quantity" name="quantity" v-model="item.amount" required>
        <!-- v-for number in data-->
        <option v-for="number in numbers" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <span class="price-info">{{ item.price }}/item</span>
    </div>

    <p class="price">SEK {{ total }}</p>

    <div class="remove-item">
      <button @click="removeItem">Remove</button>
    </div>
  </article>
</template>

<script>
export default {
  props: { product: Object, idx: Number },
  data() {
    return {
      numbers: 10,
      item: this.product,
    };
  },

  computed: {
    total() {
      return this.item.price * this.item.amount;
    },
  },

  methods: {
    removeItem() {
      this.$store.dispatch("removeProduct", this.idx);
    },
  },
};
</script>

<style lang="scss" scoped>
.model-card-cart {
  width: 776px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 16px 24px;
  margin: 32px 0px 0px 24px;

  .product-info {
    display: flex;
    justify-content: space-between;

    align-items: center;

    .card-image {
      width: 172px;
      height: 100px;
      background-color: #e0e0e0;

      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 4px solid #fff;
      img {
        height: 80px;
        cursor: pointer;
      }

      img:hover {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }
    }
    .text-info {
      margin-left: 56px;
      align-items: center;
      h3 {
        width: 138px;
        margin: 0px;
        // font-family: Montserrat;
        font-size: 1rem;

        font-weight: bold;

        color: #545454;
      }
      p {
        // font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 18px;

        letter-spacing: -0.2px;
        margin: 0px;
        color: #9da1a7;
      }
    }
  }

  .quantities {
    font-size: 0.9rem;

    .quantity {
      border-radius: 5px;
      border: 0.5px solid #1c1c1c;
      width: 48px;
    }

    .price-info {
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: -0.2px;
      margin-left: 4px;
      color: #7c7d80;
    }
  }

  .price {
    font-size: 0.8rem;
    span {
      font-weight: 400;
      margin-right: 4px;
    }
  }

  .remove-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      width: 18px;
      height: 16px;
    }

    button {
      padding: 2px 8px;
      background-color: rgba(196, 21, 20, 0.8);
      color: #fff;
      margin-left: 18px;
      align-items: center;
      border-radius: 5px;
      // padding: 5px;
    }
  }
}
.payment {
  width: 350px;
  height: 600px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 32px;

  .payment-details {
    width: 100%;
    height: 250px;
  }

  .payment-action {
    width: 100%;
    height: 300px;
    margin-top: 80px;

    .pay-now {
      padding: 5px 16px;
      background-color: #1c1c1c;
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>