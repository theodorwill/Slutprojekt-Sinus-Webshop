<template>
  <div class="container">
    <vue-tabs
      class="tab-view"
      active-text-color="white"
      type="pills"
      :start-index="1"
      direction="vertical"
    >
      <v-tab title="Profile">
        <div>
          <h1>Profile</h1>
          <hr>
          <p>Email: {{this.$store.state.user.email}}</p>
          <p>Name: {{this.$store.state.user.name}}</p>
          <p>City: {{this.$store.state.user.address.city}}</p>
          <p>Street: {{this.$store.state.user.address.street}}</p>
          <p>Zip: {{this.$store.state.user.address.zip}}</p>
          <form class="user-edit">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
            />
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="First, Last"
            />
            <label for="city">City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
            />
            <label for="street">Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street, nr"
            />
            <label for="zip">Zip</label>
            <input
              type="text"
              name="zip"
              placeholder="Zip, 5 digits"
            />
            <label for="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="Change Password"
            />
            <label for="validation">Confirm password</label>
            <input
              type="text"
              name="validation"
              placeholder="Change Password"
            />
            <button>Update profile</button>
          </form>
        </div>
      </v-tab>

      <v-tab title="Order history">
        <div>        
        </div>
      </v-tab>
    </vue-tabs>
  </div>
</template>

<script>
import { VueTabs, VTab } from "vue-nav-tabs";
//you can also import this in your style tag
import "vue-nav-tabs/themes/vue-tabs.css";
export default {
  components: {
    VueTabs,
    VTab,
  },

  data() {
    return {
      register: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          street: "",
          zip: "",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: left;
  width: 100%;
  
}

.tab-view {
  padding: 0.5rem 0.5rem;
  border-radius: 0.3rem;
  width: auto;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  div {
    width: 600px;
    padding: 0 1.5rem 0 2rem;
  }
}

.user-edit {
  padding-top: 2rem;
  width: 100%;
  display: flex;
  flex-flow: column;
   input {
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

   button {
  width: 200px;
  height: 40px;
  margin: 1rem 0;
  background-color: #2091f9;
  border-radius: 5px;
  border: none;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
    transition: 0.5s;
  }
}
}
</style>
