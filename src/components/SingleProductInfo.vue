<template>
  <div class="product-info">
    <section>
      <h2>Sinus <span>{{product.category}}</span></h2>
      <p>In Stock</p>
      <h3>SEK {{product.price}}</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Exercitationem suscipit eaque facere sapiente.
        Exercitationem suscipit eaque facere sapiente. </p>
    </section>

    <section class="order-selection">
      <aside>
        <p>Type</p>
        
        <p>Delivery</p>
        
      </aside>
      <aside>
        <p>Regular</p>
    
        <p>Nordic Countries</p>
  
      </aside>
      <label for="quantity">Qty</label>
       <select  
        class="quantity"
        name="quantity"
        v-model="customsChoice.quantity"
        required >
        <!-- v-for number in data-->
         <option v-for="number in numbers" :key="number" :value="number">
          {{ number }}
        </option>
      </select>
      <aside>

        <p>Size</p>
        <p>{{product.shortDesc}}</p>
        <button>Back to product</button>
      </aside>
      <aside>
        <button @click="addToCart">Add to cart</button>
      </aside>
    </section>
  </div>

</template>

<script>
export default {
<<<<<<< HEAD
  
=======
 

  props:{product:Object},
  data(){
    return{
      numbers:10,
       customsChoice: this.product,
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch("toCart", this.product.id);
    },
  },
>>>>>>> aef07c78e966258e4d2784e6a77b6085dccf9151
};
</script>

<style lang="scss" scoped>
.product-info {
  margin: 0 3.5rem;
  max-width: 600px;
  min-width: 600px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  text-align: left;

  h2{
    text-transform: capitalize;
  }

  > section:nth-of-type(1) {
    width: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;

    * {
      margin: 0 0 1rem 0;
    }
  }
}

.order-selection {
  width: 100%;
  display: grid;
  grid-template-columns: 15% 25% 10% 25% 25%;
  grid-template-areas: "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4" "aside1 aside2 ..... aside3 aside4";

  > aside * {
    margin: 0.3rem 0;
  }

  div input {
    width: 60px;
  }

  > aside {
    &:nth-of-type(1) {
      display: flex;
      flex-flow: column;
      grid-area: aside1;
    }

    &:nth-of-type(2) {
      display: flex;
      flex-flow: column;
      grid-area: aside2;
    }

    &:nth-of-type(3) {
      width: 120px;
      display: flex;
      flex-flow: column;
      grid-area: aside3;

      button {
        background-color: rgb(100, 212, 100);
        color: rgb(39, 39, 39);
      }
    }

    &:last-of-type {
      width: 140px;
      display: flex;
      flex-flow: column;
      grid-area: aside4;

      button {
        background-color: rgb(66, 90, 197);
        color: white;
      }
    }

    button {
      border-radius: 2rem;
      padding: 0.8rem 1.4rem;
      font-size: 0.9rem;
      font-weight: bold;
      border: none;
    }
  }
}
</style>