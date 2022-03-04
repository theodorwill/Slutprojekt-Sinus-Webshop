<template>
  <div class="products">
    <section class="breadcrumbs">
      <h1>PRODUCTS</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img
          src="../assets/right.svg"
          alt=""
        />
        <span>Products</span>
      </p>
      <div>
        <hr>
      </div>
    </section>
    <div class="main-gallery">
      <div class="side-bar">
        <h1>CATEGORY</h1>
        <li>skateboard</li>
        <li>Cap</li>
        <li>Hoodie</li>
        <li>Tokebag</li>
        <li>Wheel</li>
        <h2>New Products</h2>
        <!-- <ModelCardProductsList  :product="favouriteProd"/> -->
        <!-- <img src="../assets/skateboard-1.png" alt=""> -->
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
      </div>

      <div class="product-list">

        <router-link
          :to="'/products/' + product.id"
          v-for="product in catalogues"
          :key="product.id"
        >
          <ModelCardProductsList :product="product" />
        </router-link>
      </div>
    </div>
    <div class="pagination">
      <button
        :disabled="prevBtnDisabled"
        @click="getPrevPage"
      >PREVIOUS PAGE</button>
      <button
        :disabled="nextBtnDisabled"
        @click="getNextPage"
      >NEXT PAGE</button>
    </div>
    <h1 class="upcoming">Upcoming Products </h1>
    <section class="bottom">
      <article class="product-1">
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-2">
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-3">
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>
      <article class="product-4">
        <img
          src="../assets/new-skateboard-3.png"
          alt=""
        >
        <h2>skateboard</h2>
        <p><span>PRICE:</span><span>SEK 599</span></p>
        <p class="discteption">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet, at.</p>
      </article>

    </section>
  </div>
</template>

<script>
import ModelCardProductsList from "../components/ModelCardProductsList.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  components: { ModelCardProductsList },

  computed: {
    ...mapGetters(["catalogues", "nextBtnDisabled", "prevBtnDisabled"]),
  },

  methods: {
    ...mapActions(["getNextPage", "getPrevPage"]),
  },
};
</script>

<style lang="scss" scoped>
.breadcrumbs{
  >div{
    hr{
      height: 4px;
    }
  }
}


* {
  // margin: 0;
  // padding: 0px;
  box-sizing: border-box;
}

.products {
  h2 {
    text-align: start;
    font-size: 2rem;
  }

  a {
    text-decoration: none;
  }

  .main-gallery {
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-areas: "side-bar" "product-list" "product-list" "product-list" "product-list";

    .side-bar {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 32px 0px 0px 24px;
      width: 300px;
      height: 1000px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      li {
        font-size: 1.3rem;
        padding: 0.4rem;
        list-style: none;
      }
      h1 {
        margin-bottom: 0;
      }
      img {
        width: 200px;
        height: 250px;
      }
    }

    .product-list {
      display: grid;

      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 124px;
      grid-row-gap: 60px;
      margin: 32px auto;
    }

    .footer {
      margin-top: 196px;
    }
  }

  button {
    width: 180px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid;
    margin: 60px 30px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #45a049;
      transition: 0.5s;
    }
  }
}
.upcoming {
  margin: 5rem 0 4rem 4rem;
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
  .product-1 {
    // background-color: #2091f9;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img {
      width: 280px;
      height: 350px;
    }
    h2 {
      text-align: center;
    }
    p {
      span {
        padding: 0.5rem;
      }
    }
  }
  .product-2 {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img {
      width: 280px;
      height: 350px;
    }
    h2 {
      text-align: center;
    }
    p {
      span {
        padding: 0.5rem;
      }
    }
  }
  .product-3 {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img {
      width: 280px;
      height: 350px;
    }
    h2 {
      text-align: center;
    }
    p {
      span {
        padding: 0.5rem;
      }
    }
  }
  .product-4 {
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    width: 300px;
    margin: 2rem;
    img {
      width: 280px;
      height: 350px;
    }
    h2 {
      text-align: center;
    }
    p {
      span {
        padding: 0.5rem;
      }
    }
  }
}
</style>
