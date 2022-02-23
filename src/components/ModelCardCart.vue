<template>
  <article class="model-card-cart">
    <div class="product-info">
      <div class="card-image">
        <img src="@/assets/hoodie_red.svg" alt="product image" />
      </div>
      <div class="text-info">
        <h3>Sinus Hoodie</h3>
        <p>s, m, x ,xl</p>
      </div>
    </div>
    <div class="quantities">
      <!-- v-model number in data-->
      <select class="quantity" name="quantity">
        <!-- v-for number in data-->
        <option>4</option>
      </select>
      <span class="price-info">599/item</span>
    </div>

    <p class="price">SEK 2396</p>

    <div class="remove-item">
      <button>Remove</button>
    </div>
  </article>
</template>

<script>
export default {};
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
        width: 99px;
        height: 90px;
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
        font-family: var(--allheadlines-fontfamily);
        font-size: 1rem;

        font-weight: bold;

        color: #545454;
      }
      p {
        font-family: var(--paragraph-fontfamily);
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
      color: #9da1a7;
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
      padding: 0px 8px;
      background-color: rgba(196, 21, 20, 0.8);
      color: #fff;
      margin-left: 18px;
      align-items: center;
      font-family: var(--paragraph-fontfamily);
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