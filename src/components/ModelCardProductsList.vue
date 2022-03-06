<template>
  <article class="model-card">
    <div class="overlay">
      <h1>{{ product.title }}</h1>
      <h1>{{ product.category }}</h1>
      <p>View details</p>
    </div>
    <div class="image-block">
      <img
        class="cart-icon"
        src="@/assets/love_icon.svg"
        alt="Love icon"
      />
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

p {
  color: #2c3e50;
}

.model-card {
  display: flex;
  flex-flow: column;
  width: 225px;
  height: 360px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.376), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #e0e0e0;
  font-size: 75%;
  border-radius: 10px;

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  .overlay {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    height: 360px;
    width: 225px;
    z-index: 100;
    border-radius: 10px;
    position: absolute;
    transition: ease-in-out 0.2s;
    &:hover {
      background: #000000e3;
      > p,
      h1 {
        display: block;
      }
    }

    p {
      display: none;
      color: white;
      width: fit-content;
      height: fit-content;
      font-size: 1rem;
      padding: 0.3rem;
      border-bottom: 2px solid white;
      transition: ease-in-out 0.2s;
    }

    h1 {
      display: none;
      transition: ease-in-out 0.2s;
      color: #64b5f6;
    }

    h1:first-of-type {
      color: #9be7ff;
    }
  }

  .image-block {
    width: 100%;
    height: 190px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;

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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: #ffffff;
    padding: 8px;
    position: relative;
    padding: auto;

    .product-name {
      // font-family: "Oswald", sans-serif;
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

      // font-family: Inter;
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

      // font-family: Inter;
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
      background-color: white;
      border: none;
      padding: 4px 8px;
      color: #1c1c1c;
      cursor: pointer;
      font-size: 0.7rem;
      margin: 25px auto 0 auto;
    }

    .btn:hover {
      transform: translateY(1px);
    }
  }
}
</style>
