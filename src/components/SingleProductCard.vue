<template>
  <div class="single-product-details">
      <article class="image-details">
        <div class="single-image">
          <img
            :src="`http://localhost:5000/images/${product.imgFile}`"
            alt="Product's image"
          />
        </div>
        <section class="image-others-info">
          <h3>{{ product.title }}</h3>
          <p>{{ product.createdAt }}</p>
          <p>{{ product.updatedAt }}</p>
        </section>
      </article>
      <section class="single-product-details-info">
        <h1>Product's Information</h1>
        <h2>Sinus {{ product.category }}</h2>
        <p class="stock-status">In Stock</p>
        <p>{{ product.shortDesc }}</p>
        <p>SEK {{ product.price }}/item</p>

        <div class="suplimentary-block">
          <section class="delivery-info-title">
            <p>Type:</p>
            <p>Color:</p>
            <p>DeliverY:</p>
            <p>Brand:</p>
          </section>
          <section class="delivery-info-">
            <p>Regular</p>
            <p>Blue</p>
            <p>Nordics Country</p>
            <p>Sinus</p>
          </section>

          <div class="select-qty">
            <label for="quantity">Quantity:</label>
            <select name="quantity" v-model="item.amount" required>
              <option v-for="number in numbers" :key="number" :value="number">
                {{ number }}
              </option>
            </select>
           
          </div>
        </div>
        <div class="btn">
           <p v-if="eventDisable">*Minimum 1 quantity required!</p>
          <button class="btn-add" :disabled="eventDisable" @click="addToCart">ADD TO CART</button>
          
          <button class="btn-back"><router-link to="/products">BACK TO SHOP</router-link></button>
        </div>
      </section>
    </div>

  
</template>

<script>


export default {
 props:{product:Object},
  data() {
    return {
      numbers: 10,
      item: this.product,
    };
  },

  computed:{
    eventDisable() {
      return this.item.amount == undefined ? true : false;
    },
  },

  methods:{
     addToCart() {
      this.$store.dispatch("toCart", this.item.id);
    },


  }
 
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.single-product {
  

  .single-product-details {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;

    .image-details {
      width: 526px;
      height: 380px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      .single-image {
        width: 100%;
        height: 256px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #e0e0e0;
        img {
          height: 232px;
        }
      }
    }
    .image-others-info {
      text-align: start;
      margin: 24px;
      h3 {
        font-weight: 600;
        font-size: 20px;
        margin: 16px 0px;
      }

      p {
        font-size: 1rem;
        margin: 4px 0px;
      }
    }
  }

  .single-product-details-info {
    width: 526px;
    height: 380px;
    text-align: start;
    h1,h2 {
      font-size: 1.6rem;
    }

    .stock-status {
      color: green;
      font-size: 1.4rem;
      font-weight: bold;
    }

    > * {
      margin: 6px 0px;
    }
    .suplimentary-block {
      display: flex;
      justify-content: space-between;
      margin-top: 24px;
      .select-qty {
        margin-right: 24px;
        font-size: 1.2rem;
        select{
          width: 40px;
          height: 25px;
        }
      }
    }
    .btn {
      margin-top: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      button {
        padding: 10px 50px;
        margin: 8px 0px;
        font-size: 1rem;
        cursor: pointer;
        border-radius: 10px;
        border: 1px solid black;
        &:hover{
          background-color: #0076C4;
          transition: 0.3s;
        }
        a{
          text-decoration: none;
        }

      }
      .btn-add {
        color: #fff;
        background-color: #000;
      }

      p{
        color: red;
        text-align:end;
        font-size: 1.3rem;
      }
    }
  }
}
</style>