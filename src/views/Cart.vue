<template>
  <div class="cart-view">
    <section class="breadcrumbs">
      <h1>CART</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img
          src="../assets/right.svg"
          alt=""
        />
        <span>Cart</span>
      </p>
      <div>
        <hr>
      </div>
    </section>
    <div class="information" v-if="!cartsProduct.length">
      <span>Your shopping cart is empty.</span>
    </div>

    <div class="checkout-container" v-else>
      <article class="cart-items">
        <div v-for="(item, idx) in cartsProduct" :key="item.id" :idx="idx">
          <ModelCardCart :product="item" :idx="idx" />
        </div>
      </article>
      <button class="btn-remove" @click="removeAllProduct">Remove All</button>
      <article class="payment">
        <div class="our-social-careness">
          <img src="@/assets/sustainability.svg" alt="sust-img" />
        </div>
        <div class="payment-details">
          <p>
            <strong>PRICE:</strong>
            <strong>{{ grandTotal }}</strong>
          </p>
          <p>
            <strong>DISCOUNTS:</strong> <strong>-{{ discount }}</strong>
          </p>
        </div>
        <div class="payment-action">
          <h3>
            <strong>AMOUNT TO PAY:</strong> <strong>{{ netTotal }}</strong>
          </h3>
          <span class="vat-info">moms {{ moms }} </span>
          <div class="action-sub" v-if="customerLoged">
            <router-link class="pay-now" to="/checkout" > Checkout </router-link>
            <router-link class="back" to="/products">Back To Shop</router-link>
          </div>
          <div class="action-sub" v-else>
            <router-link class="pay-now" to="/checkout"> Checkout </router-link>
            <router-link class="back" to="/products">Back To Shop</router-link>
          </div>
        </div>
      </article>
    </div>
    <div class="misc-block">
      <h1>Keep eyes here to see our next special edition </h1>
    </div>
  </div>
</template>

<script>
import ModelCardCart from "../components/ModelCardCart.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: { ModelCardCart },
  computed: {
    ...mapGetters(["cartsProduct", "ids", "customerLoged"]),
    grandTotal() {
      let total = 0;
      this.cartsProduct.forEach((product) => {
        total += product.price * product.amount;
      });
      return total;
    },

    discount() {
      return Math.round(this.grandTotal * 0.1);
    },

    netTotal() {
      return this.grandTotal - this.discount;
    },

    moms() {
      return (this.grandTotal * 0.15).toFixed(2);
    },
  },

  methods: {
    ...mapActions(["removeAllProduct", "fetchOrders"]),
  },
};
</script>

<style lang="scss" scoped>
.cart-view {
  display: block;
  
  .information {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    font-size: 1.2rem;
  }

  .checkout-container {
    display: flex;
    justify-content: space-between;

    .cart-items {
      display: block;
      margin-left: 24px;
    }

    .btn-remove {
      height: 35px;
      width: 120px;
      margin-top: 40px;
      text-align: center;
      background-color: #1c1c1c;
      color: #fff;
      border-radius: 5px;
      
    }

    .payment {
      width: 288px;
      height: 550px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      padding: 12px;
      margin: 32px 68px 0px 8px;

      .our-social-careness {
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
      }

      .payment-details {
        width: 95%;
        max-height: 50px;

        margin: 0px;
        // font-family: "Lato", sans-serif;

        font-weight: 400;
        color: #545454;

        p {
          display: flex;
          justify-content: space-between;
          strong {
            text-align: start;
            font-size: 0.8rem;
          }
        }

        p:nth-of-type(2) {
          strong {
            color: red;
          }
        }
      }

      .payment-action {
        width: 95%;
        height: 300px;
        margin: 50px auto 0px auto;
        border-top: solid 1px #545454;
        // font-family: "Lato", sans-serif;

        h3 {
          display: flex;
          justify-content: space-between;
          strong {
            text-align: start;
            font-size: 0.8rem;
          }
          font-size: 0.8rem;
          font-weight: bold;
          color: #1b4b08;
        }

        span {
          text-align: center;
          font-size: 0.7rem;
          color: #9da1a7;
        }

        .action-sub {
          display: flex;
          flex-direction: column;
          margin-top: 80px;
          .pay-now {
            padding: 9px 18px;
            background-color: #1c1c1c;
            color: #fff;
            cursor: pointer;
            text-decoration: none;
            border-radius: 5px;
            font-size: 1.2rem;
            &:hover{
              background-color: #45a049;
              transition: 0.7s;
            }
          }

          .back {
            padding: 5px 18px;
            text-decoration: none;
            text-align: center;
            margin-top: 16px;
            border: solid 2px #1c1c1c;
            border-radius: 5px;
            color: black;
            font-size: 1rem;
            &:hover{
              background-color: #45a049;
              transition: 0.7s;
            }
          }
        }
      }
    }
  }
  .misc-block {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0076C4;
    width: 100%;
    height: 300px;
    margin: 100px 0 0 0 ; 

    h1 {
      color: white;
      font-size: 3rem;
      text-align: center;
      
    }
  }
}
</style>
