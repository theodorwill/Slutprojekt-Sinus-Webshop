<template>
  <div class="cart-view">
      <!-- v-if no product on cart !!!!!!!!-->
    <!-- <div class="information">
      <span>Your shopping cart is empty.</span>
    </div> -->

    <div class="checkout-container">
      <article class="cart-items">
          <!-- v-for products in cart -->
        <div >
          <ModelCardCart/>
          <ModelCardCart/>
          <ModelCardCart/>
          <ModelCardCart/>
         
        </div>
      </article>
      <!-- vi if product in cart -->
      <article class="payment">
        <div class="our-social-careness">
          <img src="@/assets/sustainability.svg" alt="sust-img" />
        </div>
        <div class="payment-details">
          <p>
            <strong>PRICE:</strong>
            <strong>grandTotal</strong>
          </p>
          <p>
            <strong>DISCOUNTS:</strong> <strong>-Discount</strong>
          </p>
        </div>
        <div class="payment-action">
          <h3>
            <strong>AMOUNT TO PAY:</strong> <strong>netTotal</strong>
          </h3>
          <span class="vat-info"
            >VAT
          </span>
          <div class="action-sub">
            <button class="pay-now">Checkout</button>
            <!-- <router-link to="/products">Back to shop</router-link> -->
            <button class="back">Back to shop</button>
          </div>
        </div>
      </article>
    </div>
    <div class="misc-block">
      MISC BLOCK FIXAS EFTER DISKUSSION.
    </div>
  </div>
</template>

<script>
import ModelCardCart from '../components/ModelCardCart.vue'
export default {
    components:{ModelCardCart}
}
</script>



<style lang="scss" scoped>
:root{
  --showcase-fontfamily: 'Lora', serif;
  --navbar-fontfamily: 'Oswald', sans-serif;
  --allheadlines-fontfamily: 'Oswald', sans-serif;
  --paragraph-fontfamily: 'Oswald', sans-serif;
  --primery-color: #0076C4;
  --secondary-color: #f69e03;
  --color-Btn: #1c1c1c;
  --pagebar-color:  #eb5509;
}

.cart-view{
  display: block;

  // .information {
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;

  //   font-size: 1.2rem;
  //   height: 300px;
  // }

  .checkout-container {
    display: flex;
    justify-content: space-between;

    .cart-items {
      display: block;
      margin-left: 24px;
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
        font-family: var(--paragraph-fontfamily);

        font-weight: 400;
        color: #545454;

        p {
          display: flex;
          justify-content: space-between;
          strong {
            text-align: start;
            font-size: 0.8rem;
            font-family: var(--paragraph-fontfamily);
          }
        }

        p:nth-of-type(2){
          strong{
            color: red;
          }

        }
      }

      .payment-action {
        width: 95%;
        height: 300px;
        margin: 50px auto 0px auto;
        border-top: solid 1px #545454;
        font-family: var(--paragraph-fontfamily);

        h3 {
          display: flex;
          justify-content: space-between;
          strong {
            text-align: start;
            font-size: 0.8rem;
            font-family:var(--allheadlines-fontfamily);
          }
          font-family: var(--paragraph-fontfamily);
          font-size: 0.8rem;
          font-weight: bold;
          color: #1b4b08;
        }

        span {
          font-family: var(--paragraph-fontfamily);
          text-align: center;
          font-size: 0.7rem;
          color: #9da1a7;
        }

        .action-sub {
          display: flex;
          flex-direction: column;
          margin-top: 80px;
          .pay-now {
            padding: 5px 16px;
            background-color: #1c1c1c;
            color: #fff;
            cursor: pointer;
            font-family: var(--allheadlines-fontfamily);
          }

          .back {
            padding: 3px 16px;
            text-decoration: none;
            text-align: center;
            margin-top: 16px;
            border: solid 2px #1c1c1c;
            font-family: var(--allheadlines-fontfamily);
          }
        }
      }
    }
  }
  .misc-block {
    display: flex;
    justify-content: center;

    width: 100%;
    height: 300px;
    font-size: 0.8rem;
    background-color: #c0bebe;
    margin: 196px 0px;

    h2 {
      margin-top: 64px;
      font-family: var(--allheadlines-fontfamily);
    }
  }
}
</style>