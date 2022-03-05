<template>
  <div class="footer-container">
    <div class="footer-upper-block">
      <article class="secondary-logo">
        <img src="@/assets/logo_secondary.svg" alt="Sinus logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>&copy;2022-2023 All rights reserved</p>
      </article>
      <div class="footer-upper-block-right">
        <section>

          <h3>Help</h3>
          <router-link to="/about">About us</router-link>
          <router-link to="/contact">Contact us</router-link>
        </section>
        <section>
          <h3>Users action</h3>
          <router-link to="/login">Login</router-link>
          <router-link to="/register">Resgister</router-link>
          <router-link to="/orders">My orders</router-link>
          <router-link to="/login">Admin</router-link>
        </section>
        <section>
          <h3>Others</h3>
          <router-link to="/about">Lorem</router-link>
          <router-link to="/about">Lorem</router-link>
          <router-link to="/about">Lorem</router-link>
          <router-link to="/about">Lorem</router-link>
        </section>
      </div>
    </div>
    <div class="footer-lower-block">
      <img src="@/assets/payment_methods.svg" alt="payments methods icon" />
      <div class="footer-lower-block-others-info">
        <router-link to="/about">Support</router-link>
        <router-link to="/about">Privacy and cookies</router-link>
        <router-link to="/about">Accessibility</router-link>
      </div>
    </div>
  </div>
</template>

<script>


</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer-container {
  width: 1440px;
  margin: auto;
  height: 17rem;

  background-color: #474e5d;

  position:relative;


  .footer-upper-block {
    display: flex;
    justify-content: space-between;

    height: 9.25rem;
    margin-top: 2.25rem;

    .secondary-logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 3.25rem;
      img {
        width: 180px;
        height: 64px;
      }
      p {
        width: 24rem;
        // font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: start;
        letter-spacing: -0.2px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        color: white;
        opacity: .9;
      }
    }

    .footer-upper-block-right {
      width: 33rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 1.6rem 6.5rem 0rem 0rem;

      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 1.3rem;
        line-height: 1.25rem;
        margin-bottom: 0.7rem;
        color: #64b5f6;
      }

      a {
        display: block;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.7rem;
        text-decoration: none ;
        letter-spacing: -0.2px;
        opacity: .9;
        color: #FFFFFF;
        font-weight: bold;
        &:hover{
          color: #64b5f6;
          transition: 0.4s;
        }
      }
    }
  }

  .footer-lower-block {
    height: 3rem;
    background-color: #1f2633;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    img {
      width: 10.5rem;
      height: 1.4rem;
      margin-left: 1.5rem;
    }

    .footer-lower-block-others-info {
      display: flex;
      margin-right: 1.5rem;
      a {
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
        text-decoration: none;
        text-align: center;
        letter-spacing: -0.2px;
        font-weight: bold;
        color: #ffffff;
        opacity: 0.6;
        margin: 0px 0.5rem;
      }
    }
  }
}
</style>
