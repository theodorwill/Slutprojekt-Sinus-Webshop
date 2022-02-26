<template>
  <div class="checkout">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <section class="top">
      <h1>SINGLE PRODUCT</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <router-link to="/products"><span>Products</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <router-link to="/products"><span>Single Product</span></router-link>
        <img src="../assets/right.svg" alt="" />
        <span>Checkout</span>
      </p>
    </section>
    <div class="wrapper">
      <section class="top-section">
        <h3>Delivery options</h3>
        <hr class="solid" />
        <div class="container">
          <div class="container-1">
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Express delivery</label>
            <p>3-4 days via DHL</p>
          </div>
          <div class="container-2">
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Normal delivery </label>
            <p>20 - 30 days via post</p>
          </div>
          <div class="container-3">
            <input type="radio" id="huey" name="drone" value="huey" checked />
            <label for="huey">Pick up</label>
            <p>From nearest store</p>
          </div>
        </div>
      </section>
      <section class="middle-section">
        <h3>Delivery address</h3>
        <hr class="solid" />
        <form action="">
              <div class="name">
                <div>
                    <label for="f-name">First Name:</label>
                    <input type="text" name="f-name" placeholder="">
                </div>
                <div>
                    <label for="l-name">Last Name:</label>
                    <input type="text" name="l-name">
                </div>
                </div>
                    <div class="street">
                    <label for="name">Street</label>
                    <input type="text" name="address">
                </div>
                <div class="address-info">
                <div>
                    <label for="city">Land</label>
                    <select id="country" name="country">
                        <option value="australia">SVERIGE</option>
                        <option value="canada">NORGE</option>
                        <option value="usa">DANMARK</option>
                        <option value="usa">FINLAND</option>
                        <option value="usa">ISLAND</option>
                    </select>
                </div>
                <div>
                    <label for="state">Stad</label>
                    <input type="text" name="state">
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip">
                </div>
            </div>
            <div class="billing">
                <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing
        </label>

            </div>


        </form>
      </section>
      <section class="bottom-section">
          <h3>Payment options</h3>
          <hr class="solid" />
        <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-mastercard" style="color:chocolate;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>

        <div class="cc-num">
                  <label for="card-num">Credit Card Name.</label>
                  <input type="text" name="card-num">
                  <label for="card-num">Credit Card No.</label>
                  <input type="text" name="card-num">
              </div>
              <div class="cc-info">
                <div>
                    <label for="card-num">Exp</label>
                    <input type="text" name="expire">
                </div>
                <div>
                    <label for="card-num">CCV</label>
                    <input type="text" name="security">
                </div>
            </div>
        <input type="submit" value="Continue to checkout" class="btn">

      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped lang="scss">
.top {
  width: 100%;
  height: 80px;
  background-color: #C41514
;
  font-family: "Times New Roman", Times, serif;
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

.icon-container{
 font-size: 2.5rem;
 i{
     margin: 0.5rem;
 }
}
.name {
    justify-content: space-between;
    display: flex;
    width: 50%;
    margin: 2rem auto;
    div {
        width: 45%;
    }
    input {
        width: 100%;
        min-height: 25px;
        border: 1px blue solid;
        font-size: 1rem;
        letter-spacing: .15rem;
        font-family: "Arimo";
        margin-top: 5px;
        border-radius: 4px;
    }
    label {
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
    }
}
.street{
    width: 50%;
    margin: 1rem auto;
      input {
        width: 100%;
        min-height: 25px;
        border: 1px blue solid;
        font-size: 1rem;
        letter-spacing: .15rem;
        font-family: "Arimo";
        margin-top: 5px;
        border-radius: 4px;
    }
    label {
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
    }
}
.address-info {
    display: flex;
    justify-content: space-evenly;
    width: 57%;
    margin: 2rem auto;
    select{
        width: 100%;
        min-height: 30px;
        border: 1px blue solid;
        font-size: 1rem;
        letter-spacing: .15rem;
        font-family: "Arimo";
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
        letter-spacing: .15rem;
        font-family: "Arimo";
        margin-top: 5px;
        border-radius: 4px;
    }
    label {
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
    }
}
.cc-num{
    width: 30%;
    margin-top: 2rem;
    margin:  auto;
     input {
        width: 100%;
        min-height: 25px;
        border: 1px blue solid;
        font-size: 1rem;
        letter-spacing: .15rem;
        font-family: "Arimo";
        margin-top: 5px;
        margin-bottom: 1rem;
        border-radius: 4px;
    }
    label {
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
    }
}

.cc-info {
    display: flex;
    justify-content: space-between;
        width: 25%;
        margin: auto;

    div {
        width: 45%;
        margin-bottom: 2rem;
    }
    input {
        width: 100%;
        min-height: 25px;
        border: 1px blue solid;
        font-size: 1rem;
        letter-spacing: .15rem;
        font-family: "Arimo";
        margin-top: 5px;
        border-radius: 4px;
    }
    label {
        display: flex;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 2px;
    }
}
.billing{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
}


.btn {
  background-color: #04aa6d;
  color: white;
  padding: 12px;
  margin: 10px 0;
  border: none;
  width: 200px;
  border-radius: 3px;
  cursor: pointer;
  font-size: 17px;
  &:hover {
    background-color: #45a049;
  }
}
</style>