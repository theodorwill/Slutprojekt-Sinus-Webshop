<template>
  <article class="model-card">
    <div class="image-block">
      <img class="cart-icon" src="@/assets/love_icon.svg" alt="Love icon" />
      <!-- Här kommer dynamiska bilder istället för hoodie_red -->
      <img
        class="product-image"
        :src="`http://localhost:5000/images/${product.imgFile}`"
        alt="Product's image"
      />
    </div>
    <div class="product-info">
      <!-- Alla plats med * ska vara {{dynamisk}} sen -->
      <p class="product-name">Sinus {{ product.category }}</p>
      <div class="info-title-price-size">
        <div class="info-title-size">
          <p>{{ product.title }}</p>
          <p>{{ product.shortDesc }}</p>
        </div>

        <p>
          SEK <span>{{ product.price }}</span>
        </p>
      </div>
      <p class="product-description">{{ product.longDesc }}</p>
      <button class="btn">VIEW DETAILS</button>
    </div>
  </article>
</template>

<script>
export default {
  props: { product: Object },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-align: start;
}
.model-card {
  width: 224px;
  height: 360px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #e0e0e0;
  font-size: 75%;
 

  .image-block {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .product-image {
      height: 170px;
    }

    .cart-icon {
      position: absolute;
      width: 24px;
      height: 24px;

      right: 8px;
      top: 8px;
    }
  }

  .product-info {
    height: 170px;

    background-color: #ffffff;
    padding: 8px;
    position: relative;
    padding: auto;

    .product-name {
      font-family: "Oswald", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;

      letter-spacing: -0.2px;

      text-transform: capitalize;
    }

    .info-title-price-size {
      display: flex;
      justify-content: space-between;
      padding: 4px 0px;

      p {
        font-weight: bold;
        text-align: start;
      }

      // .info-title-size {
      // }
    }

    .product-size {
      text-align: start;
      margin-left: 8px;
      margin-top: 0px;

      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 18px;

      letter-spacing: -0.2px;

      color: #969696;
    }

    .product-price {
      text-align: start;
      margin: 0px 0px 0px 8px;

      font-family: Inter;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 19px;
      letter-spacing: -0.1px;

      color: #1c1c1c;
    }

    .product-description {
      height: 40px;
      padding: 4px 0px;
    }

    .btn {
      background-color: #1c1c1c;
      padding: 4px 8px;
      color: #fff;
      cursor: pointer;
      font-size: 0.55rem;
      margin: 25px 0px 0px 65px;
    }

    .btn:hover {
      transform: translateY(1px);
    }
  }
}
</style>
