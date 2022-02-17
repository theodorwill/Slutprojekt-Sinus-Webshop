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
          <p>About us</p>
          <p>Contact us</p>
        </section>
        <section>
          <h3>Users action</h3>
          <p>Login</p>
          <p>Resgister</p>
          <p>My orders</p>
        </section>
        <section>
          <h3>Others</h3>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
          <p>Lorem, ipsum.</p>
        </section>
      </div>
    </div>
    <div class="footer-lower-block">
      <img src="@/assets/payment_methods.svg" alt="payments methods icon" />
      <div class="footer-lower-block-others-info">
        <p>Support</p>
        <p>Privacy and cookies</p>
        <p>Accessibility</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.footer-container {
  width: 100%;
  height: 17rem;
  background-color: #e0e0e0;
  position: absolute;
  bottom: 0;

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
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;
        text-align: start;
        letter-spacing: -0.2px;

        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
    }

    .footer-upper-block-right {
      width: 33rem;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin: 1.6rem 6.5rem 0rem 0rem;

      h3 {
        font-family: Montserrat;
        font-style: normal;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.25rem;
      }

      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5rem;

        letter-spacing: -0.2px;

        opacity: 0.7;
      }
    }
  }

  .footer-lower-block {
    height: 3rem;
    background-color: #9da1a7;
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
      margin-left:1.5rem;
    }

    .footer-lower-block-others-info {
        display: flex;
        margin-right:1.5rem;
      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: .9rem;
        line-height: 1.5rem;

        text-align: center;
        letter-spacing: -0.2px;

        color: #ffffff;

        opacity: 0.6;
        margin: 0px .5rem;
      }
    }
  }
}
</style>