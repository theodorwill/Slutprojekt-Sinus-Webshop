<template>
  <div class="container">
    <vue-tabs
      class="tab-view"
      active-text-color="white"
      type="pills"
      :start-index="1"
      direction="vertical"
    >
      <v-tab title="Profile" >
        <div>
          <aside>
            <h2></h2>
             
            <button @click="signOutController">Sign out</button>
            
          </aside>
          <article class="order-history" v-if="customerLoged">
           <router-link to='/orders' @click.native="fetchOrders">Order history</router-link>
          </article>
           <article class="order-history" v-else>
           <router-link to='/admin' @click.native="fetchOrders();fetchAllImages();">Admin page</router-link>
          </article>
          <hr>
          <form
            @submit.prevent="updateUserInfo"
            class="user-edit"
          >
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              v-model="register.email"
              disabled
            />
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Firstname Lastname"
              pattern="[a-zA-Z]{2,16}\s[a-zA-Z]{2,16}" required
              minlength="5"
              maxlength="33"
              v-model="register.name"
            />
            <hr>
            <label for="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              v-model="register.address.city"
            />
            <label for="street">Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street, nr"
              v-model="register.address.street"
            />
            <label for="zip">Zip</label>
            <input
              type="text"
              name="zip"
              placeholder="Zip, 5 digits"
              v-model="register.address.zip"
            />
            <hr>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              pattern=".{8,}" required
              placeholder="Password 8 or more letters/symbols"
              v-model="register.password"
            />
            <label for="validation">Confirm password</label>
            <input
              type="password"
              name="validation"
              pattern=".{8,}" required
              placeholder="Re-type your password"
              v-model="validation.password"
            />
            <hr>
            <button>Update profile</button>
          </form>
        </div>
      </v-tab>
       <v-tab title="" >
         
        <div class="order-history" >
          <h1></h1>
          <hr>
         
        </div>

      </v-tab>
    </vue-tabs>

     

  </div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";
import {mapActions, mapGetters} from 'vuex'


export default {
  components: {
    VueTabs,
    VTab,
   
  },

  data() {
    return {
      register: {
        email: "",
        name: "",
        password: "password",
        address: {
          city: "",
          street: "",
          zip: "",
        },
      },
      validation: {
        password: "password",
      },
    };
  },

  created() {
    this.addUserData();
  },

  computed:{
    ...mapGetters(['customerLoged'])
  },

  methods: {
    ...mapActions(['fetchOrders','fetchAllImages']),
    addUserData() {
      console.log("UserProfile, addUserData() log", this.$store.state.user);

      this.register.email = this.$store.state.user.email;
      this.register.name = this.$store.state.user.name;

      if (this.$store.state.user.address) {
        this.register.address.city = this.$store.state.user.address.city;
        this.register.address.street = this.$store.state.user.address.street;
        this.register.address.zip = this.$store.state.user.address.zip;
      }
    },

    async updateUserInfo() {
      if (
        this.register.email !== "" &&
        this.register.name !== "" &&
        this.register.password !== "" &&
        this.register.validation !== "" &&
        this.register.password === this.validation.password
      ) {
        await this.$store
          .dispatch("login", {
            email: this.register.email,
            password: this.register.password,
          })
          .catch((error) => {
            alert("Invalid Email/password or timed out.", error);
            throw error;
          });
        await this.$store.dispatch("updateUserInfo", this.register);
        alert("Profile updated!");
      } else if (this.register.name === "") {
        alert("Please input name");
      } else if (this.register.password === "") {
        alert("Please input password");
      } else if (this.register.validation === "") {
        alert("Please confirm your password");
      } else if (this.register.password !== this.validation.password) {
        alert("Password and confirm does not match!");
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
button {
  height: 50px;
  padding: 0 1rem;
  margin: 1rem 0;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  background-color: #db7070;
  transition: ease-in-out 0.17s;
  &:hover {
    background-color: #f14242;
  }
}

hr.solid {
  border-top: 1px solid #bbb;
  width: 400px;
}

.container {
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: left;
  width: 100%;
}
.order-history{
  width: 120px;
  height: 40px;
  border-radius: 5px;
  // background-color: #337ab7;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-115px,-15px);
  // border: 1px solid black;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  a{
    text-decoration: none;
    color: black;
    text-align: center;
    font-size: 0.9rem;
  }
}
.tab-view {
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  width: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  div {
    width: 600px;
    padding: 0 1.5rem 0 2rem;
    > aside {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
      * {
        margin: 0.5rem 0;
      }
    }
  }
}

.user-edit {
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column;

  label {
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    font-size: 1rem;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    background-color: #f5f5f5;
    &:disabled {
      background: white;
      border-color: white;
    }
  }

  hr {
    margin: 2rem 0;
    width: 100%;
  }

  button {
    width: 160px;
    background-color: #66a86a;
    transition: ease-in-out 0.17s;
    &:hover {
      background-color: #4fc555;
    }
  }
}
</style>
