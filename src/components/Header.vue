<template>
  <div id="nav">
    <div class="header">
      <router-link to="/">
        <section>
          <div class="logo"/>
        </section>
      </router-link>

      <section class="searchbar">
        <router-link to="/category">
          <input
            type="text"
            class="search"
            v-model="category"
            @change="fetchCategory(category)"
            placeholder="Search by category"
          />
        </router-link>
      </section>

      <section class="user-navigation">
        <router-link to="/cart">
          <div class="card">
            <p>{{cart.length}}</p>
            <!-- <span>{{inCard.length}}</span> -->
          </div>
        </router-link>
        <div
          class="login"
          @click="signedInCheck"
        >
        </div>
      </section>
      <section class="role" v-if="adminLoged">
        <h2>Admin</h2>
        <p @click="signOutController">logout</p>
      </section>
      <section class="role" v-if="customerLoged">
        <h2>{{user.name}}</h2>
        <p @click="signOutController">logout</p>
      </section>

    </div>

    <section class="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/products">Products</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Contact</router-link>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState,mapGetters } from "vuex";
export default {
  data() {
    return {
      category: null,
    };
  },
  computed: {
    ...mapState(["cart","user"]),
    ...mapGetters(['adminLoged','customerLoged'])
  },
  methods: {
    ...mapActions(["fetchCategory"]),

    signedInCheck() {
      if (this.$store.state.token === null) {
        if (this.$route.path !== "/login") {
          this.$router.push("/login");
        }
      } else if (this.$route.path !== "/user") {
        this.$router.push("/user");
      }
    },
    signOutController() {
      this.$store.dispatch("loggingOut");
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  width: 1440px;
  margin: auto;
  .header {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
  }
  .logo {
    width: 200px;
    height: 50px;
    background-image: url("~@/assets/sinus_logo.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .searchbar {
    input {
      margin: 0;
      padding-left: 1rem;
      width: 500px;
      height: 50px;
      border-radius: 2rem;
      border: 2px solid;
      border-color: #64b5f6;
      background-image: url("~@/assets/search.svg");
      background-position: right top;
      background-repeat: no-repeat;
      background-size: contain;
      font-size: 1.5rem;
      cursor: pointer;
      text-transform: capitalize;
    }
  }
  .user-navigation {
    display: flex;
    justify-content: space-evenly;
    width: 200px;
  }
  .login {
    width: 50px;
    height: 50px;
    border-radius: 0.4rem;
    border: 1px solid;
    border-color: #222222;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: 0.5s;
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    background-image: url("~@/assets/icon_account.svg");
    &:hover {
      background-color: #45a049;
    }
  }
  .card {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 0.4rem;
    border: 1px solid;
    border-color: #222222;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    transition: 0.5s;
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    background-image: url("~@/assets/shopping-cart.svg");
    &:hover {
      background-color: #45a049;
    }
    p {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 100%;
      background-color: #2286c3;
      color: #fff;
      text-align: center;
      font-style: 1.3rem;
      font-weight: bold;
    }
  }
.role{
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    margin-right: 20px;
  }
  p{
    padding: 0.5rem;
    border-radius: 5px;
    font-weight: bold;
    color: #ff6e40;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    cursor:pointer;
  }
}
  .navbar {
    color: #9be7ff;
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    padding: 1rem;
    font-size: 1.1rem;
    background-color: #1f2633;
    > a {
      color: #ffffff;
      text-decoration: none;
      font-size: 1.3rem;
      font-weight: bold;
      &.router-link-exact-active {
        color: #9be7ff;
      }
    }
    & a:hover {
      transition: 0.5s;
      color: #64b5f6;
    }
  }
}
</style>