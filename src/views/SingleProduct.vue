<template>
  <div class="single-product">
    <section class="breadcrumbs">
      <h1>SINGLE PRODUCT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <router-link to="/products"><span>Products</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Single Product</span>
      </p>
      <div>
        <hr>
      </div>
    </section>

    <SingleProductCard :product="product" />

    <SingleProductReview />
  <h1 class="upcoming">Upcoming Products </h1>
    <section class="bottom">
      <article class="product-1">
        <img src="../assets/new-skateboard-3.png" alt="">
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-2">
        <img src="../assets/new-skateboard-3.png" alt="">
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-3">
        <img src="../assets/new-skateboard-3.png" alt="">
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-4">
        <img src="../assets/new-skateboard-3.png" alt="">
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
     
    </section>
  </div>
</template>

<script>
import SingleProductCard from "@/components/SingleProductCard.vue";

import SingleProductReview from "@/components/SingleProductReview.vue";

export default {
  components: { SingleProductCard, SingleProductReview },
  computed: {
    product() {
      return this.$store.state.productList.find(

        (product) => product.id == this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>

.upcoming{
  margin: 5rem 0 4rem 4rem ;
  width: 1250px;
  text-align: start;
}
.bottom {
  width: 1250px;
  height: 500px;
  margin: 0 auto;
  margin-bottom: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .product-1{
    // background-color: #2091f9;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img{
      width: 280px;
      height: 350px;
    }
    h2{
      text-align: center;
    }
    p{
      span{
        padding: 0.5rem;
     } 
    }
  }
  .product-2{
     border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img{
      width: 280px;
      height: 350px;
    }
     h2{
      text-align: center;
    }
    p{
      span{
        padding: 0.5rem;
     } 
    }
  }
  .product-3{
     border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img{
      width: 280px;
      height: 350px;
    }
     h2{
      text-align: center;
    }
    p{
      span{
        padding: 0.5rem;
     } 
    }
  }
  .product-4{
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img{
      width: 280px;
      height: 350px;
    }
     h2{
      text-align: center;
    }
    p{
     span{
       padding: 0.5rem;
     } 
    }
  }
}
</style>