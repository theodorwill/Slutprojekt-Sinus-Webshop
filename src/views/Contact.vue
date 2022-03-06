<template>
  <div class="contact">
    <section class="breadcrumbs">
      <h1>CONTACT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Contact</span>
      </p>
      <div>
        <hr>
      </div>
    </section>
    <section class="middle-1">
      <h3>Contact us</h3>
      <div class="container">
        <form action="" prevent >
          <label for="fname">Your Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Type Your name Here..."
          />

          <label for="email">Your Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Type Your Email Here..."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">SVERIGE</option>
            <option value="canada">NORGE</option>
            <option value="usa">DANMARK</option>
            <option value="usa">FINLAND</option>
            <option value="usa">ISLAND</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
    <section class="middle-2">
      <h3>Retail products</h3>
      <div class="product-list-container">
        <router-link
          :to="'/products/' + product.id"
          v-for="product in prod"
          :key="product.id"
        >
          <ModelCardProductsList :product="product" />
        </router-link>
      </div>
    </section>
      
  </div>
</template>

<script>
import ModelCardProductsList from "../components/ModelCardProductsList.vue";
export default {
  components: { ModelCardProductsList },

  computed: {
    prod() {
      return this.$store.state.productList.slice(1, 9);
    },
  },
};
</script>

<style lang="scss" scoped>

.middle-1 {
  h3 {
    padding: 2rem;
    font-size: 2.5rem;
  }
  .container {
    width: 600px;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
  }
  label {
    display: flex;
  }
  input[type="text"],
  select,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background-color: #f5f5f5;
  }
  input[type="submit"] {
    background-color: #2091f9;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  input[type="submit"]:hover {
    background-color: #45a049;
  }
}
.middle-2 {
  // padding: 0rem 10rem;

  h3 {
    display: flex;
    margin-left: 4rem;
    padding: 2rem;
    font-size: 1.8rem;
  }

  .product-list-container {
    display: grid;
    place-items:center;

    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: 32px auto;
    a{
      text-decoration: none;
    }
  }
}

</style>