<template>
  <div class="checkout">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <section class="breadcrumbs">
      <h1>SINGLE PRODUCT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img
          src="../assets/right.svg"
          alt=""
        />
        
        <router-link to="/cart"><span>Products</span></router-link>
        <img
          src="../assets/right.svg"
          alt=""
        />
        
        <span>Checkout</span>
      </p>
      <div>
        <hr>
      </div>
    </section>
    <div class="wrapper">
      <section class="top-section">
        <h3>Delivery options</h3>
        <hr class="solid" />
        <div class="container">
          <div class="container-1">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              checked
            />
            <label for="huey">Express delivery</label>
            <p>3-4 days via DHL</p>
          </div>
          <div class="container-2">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              checked
            />
            <label for="huey">Normal delivery </label>
            <p>20 - 30 days via post</p>
          </div>
          <div class="container-3">
            <input
              type="radio"
              id="huey"
              name="drone"
              value="huey"
              checked
            />
            <label for="huey">Pick up</label>
            <p>From nearest store</p>
          </div>
        </div>
      </section>
      <section class="bottom-section">
        <h3>Payment options</h3>
        <hr class="solid" />
        <div class="icon-container">
          <i
            class="fa fa-cc-visa"
            style="color: navy"
          ></i>
          <i
            class="fa fa-cc-mastercard"
            style="color: chocolate"
          ></i>
          <i
            class="fa fa-cc-amex"
            style="color: blue"
          ></i>
          <i
            class="fa fa-cc-discover"
            style="color: orange"
          ></i>
        </div>

        <div class="cc-info">
          <label for="payment">Choose your payment method</label>
          <select
            name="payment"
            id="payment"
            v-model="userInfo.payMthods"
          >
            <option value="visa">VISA</option>
            <option value="master">MASTER</option>
            <option value="express">EXPRESS</option>
            <option value="discovery">DISCOVERY</option>
          </select>
          <!-- <router-link
            to="/user"
            v-if="customerLoged == true"
            class="btn"
            @click.native="setOrder"
            >SAVE AND BUY
          </router-link>

          <router-link
            to="/orders"
            class="btn"
            @click.native="setOrder"
            v-else
            >SAVE AND BUY
          </router-link> -->

          
        </div>
      </section>
      <section class="middle-section">
        <h3>Delivery address</h3>
        <hr class="solid" />
        <form @submit.prevent="setOrder">
          <div class="name">
            <div>
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Firstname Lastname"
                pattern="[a-zA-Z]{2,16}\s[a-zA-Z]{2,16}"
                required
                minlength="5"
                maxlength="33"
                v-model="userInfo.name"
              />
            </div>
            <!-- <div>
              <label for="l-name">Last Name:</label>
              <input
                type="text"
                name="l-name"
                placeholder="Last Name"
                v-model="userInfo.lastName"
                required
              />
            </div> -->
          </div>

          <div class="street">
            <label for="street">Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street, nr"
              v-model="userInfo.address.street"
              required
            />
          </div>
          <div class="address-info">
            <div>
              <label for="city">City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                v-model="userInfo.address.city"
                required
              />
            </div>
            <div>
              <label for="zip">Zip</label>
              <input
                type="text"
                name="zip"
                placeholder="Zip, 5 digits"
                v-model="userInfo.address.zip"
                required
              />
            </div>
          </div>
          <div class="billing">
            <label>
              <input
                type="checkbox"
                checked="checked"
                name="sameadr"
              />
              Shipping address same as billing
            </label>
          </div>
          <button>Purchase</button>
        </form>
      
      </section>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      userInfo: {
        email: "",
        name: "",
        address: {
          street: "",
          city: "",
          zip: "",
        },
        payMthods: "",
      },
    };
  },

  created() {
    if(this.$store.state.token !== null){
      this.autoFillInfo();
    } else {
      alert("Please register first.")
      this.$router.push("/register")
    }
  },

  computed: {
    ...mapGetters(["customerLoged","adminLoged", "ids"]),
  },

  methods: {
    ...mapActions(["fetchDelvAddress", "postOrders"]),

    autoFillInfo() {
      if (this.$store.token !== null) {
        this.userInfo.email = this.$store.state.user.email;
        this.userInfo.name = this.$store.state.user.name;

        if (this.$store.state.user.address) {
          this.userInfo.address.city = this.$store.state.user.address.city;
          this.userInfo.address.street = this.$store.state.user.address.street;
          this.userInfo.address.zip = this.$store.state.user.address.zip;
        }
      }
    },

    setOrder() {
      if (
        this.userInfo.name !== "" &&
        this.userInfo.address.street !== "" &&
        this.userInfo.address.city !== "" &&
        this.userInfo.address.zip !== ""
      ) {
        this.$store.dispatch("postOrders", this.ids);
        this.$router.push("/orders");
      }
    },
  },
};
</script>


<style scoped lang="scss">
form{
  > button {
  padding: .8rem 1rem;
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
}


.top {
  width: 100%;
  height: 80px;
  background-color: #c41514;
  // font-family: "Times New Roman", Times, serif;
  h1,
  p {
    display: flex;
    margin: 0;
    padding: 5px 2rem;
    color: white;
  }
  h1 {
    color: black;
  }
  a {
    text-decoration: none;
  }
}
h3 {
  display: flex;
  margin-left: 2rem;
}
hr.solid {
  border-top: 3px solid #bbb;
}
.container {
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
}
.container-1,
.container-2,
.container-3 {
  border: 1px blue solid;
  border-radius: 5px;
  width: 200px;
  padding: 1rem;
  label {
    font-size: 1.2rem;
    font-weight: bold;
  }
  p {
    margin: 0;
  }
}

.icon-container {
  font-size: 2.5rem;
  i {
    margin: 0.5rem;
  }
}
.name {
  width: 50%;
  margin: 2rem auto;

  input {
    width: 100%;
    min-height: 25px;
    border: 1px blue solid;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    // font-family: "Arimo";
    margin-top: 5px;
    border-radius: 4px;
  }
  label {
    display: flex;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
  }
}
.street {
  width: 50%;
  margin: 1rem auto;
  input {
    width: 100%;
    min-height: 25px;
    border: 1px blue solid;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    // font-family: "Arimo";
    margin-top: 5px;
    border-radius: 4px;
  }
  label {
    display: flex;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
  }
}
.address-info {
  display: flex;
  justify-content: space-evenly;
  width: 57%;
  margin: 2rem auto;
  select {
    width: 100%;
    min-height: 30px;
    border: 1px blue solid;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    // font-family: "Arimo";
    margin-top: 5px;
    border-radius: 4px;
  }
  div {
    width: 25%;
  }
  input {
    width: 100%;
    min-height: 25px;
    border: 1px blue solid;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    // font-family: "Arimo";
    margin-top: 5px;
    border-radius: 4px;
  }
  label {
    display: flex;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
  }
}
.cc-num {
  width: 30%;
  margin-top: 2rem;
  margin: auto;
  input {
    width: 100%;
    min-height: 25px;
    border: 1px blue solid;
    font-size: 1rem;
    letter-spacing: 0.15rem;
    // font-family: "Arimo";
    margin-top: 5px;
    margin-bottom: 1rem;
    border-radius: 4px;
  }
  label {
    display: flex;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 2px;
  }
}

.cc-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin: auto;

  label {
    font-size: 1rem;
    letter-spacing: 2px;
    margin: 16px 0px;
  }

  select {
    margin: 16px 0px;
    padding: 8px 32px;
    border-radius: 10px;
  }
  a {
    background-color: #04aa6d;
    color: white;
    padding: 12px;
    margin: 60px 0px;
    border: 1px solid black;
    width: 200px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 17px;
    &:hover {
      background-color: #45a049;
    }
  }
}
</style>