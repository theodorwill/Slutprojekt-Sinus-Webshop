<template>
  <div id="login-register">
    <section id="login-register-one">
      <form class="login-form">
        <div class="login-email">
          <label for="Email1">Email address</label>
          <input type="email" />
          <div id="text">We'll never share your email with anyone else.</div>
        </div>
        <div class="login-password">
          <label for="password">Password</label>
          <input type="password" />
        </div>
        <div class="login-check">
          <label for="checkout">Check me out</label>
          <input type="checkbox" />
        </div>
        <button type="submit">Login</button>
      </form>
    </section>

    <section id="login-register-two">
      <form class="register-form">
        <div class="register-email">
          <label for="Email1">Email address</label>
          <input  type="email" />
          <div id="textOne">We'll never share your email with anyone else.</div>
        </div>
        <div class="register-password">
          <label  for="password">Password</label>
          <input type="password" />
        </div>
        <div class="register-confirm-password">
          <label  for="password"> Confirm-Password</label>
          <input type="password" />
        </div>
        <div class="register-check">
          <label  for="checkout">I accept the term and condition</label
          >
          <input  type="checkbox" />
        </div>
        <button type="submit">Register</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style  lang= "scss" scoped>
#login-register{

   #login-register-one {
                background: linear-gradient(#1845ad, #23a2f6);
                left: -80px;
                top: -80px;

                 .login-form {
                  height: 600px;
                  width: 400px;
                  background-color: rgba(23, 75, 207, 0.898);
                  position: absolute;
                  transform: translate(-50%, -50%);
                  top: 100%;
                  left: 50%;
                  border-radius: 10px;
                  backdrop-filter: blur(10px);
                  border: 2px solid rgba(255, 255, 255, 0.1);
                  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
                  padding: 50px 35px;
                
                 font-family: "Poppins", sans-serif;
                 color: #070303;
                 letter-spacing: 0.5px;
                 outline: none;
                  border: none;

                  .login-email {
                    label {
                      display: block;
                      margin-top: 30px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 8px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                    #text{
                      padding-top: 20px;
                      display: block;
                    }
                  }
                  
                  .login-password {
                    label {
                      display: block;
                      margin-top: 40px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 8px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                  }
                .login-check {
                    label {
                      display: block;
                      margin-top: 50px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 20px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                  }

                  button {
                    margin-top: 70px;
                    height: 70px;
                    width: 100%;
                    background-color: #ffffff98;
                    color: #080710;
                    padding: 15px 0;
                    font-size: 18px;
                    font-weight: 600;
                    border-radius: 5px;
                    cursor: pointer;
                  }
                  
                  
                  }
                
                
                
                }

                 #login-register-two {
                 background: linear-gradient(to right, #ff512f, #f09819);
                right: -30px;
                bottom: -80px;

                .register-form {
                  height: 680px;
                  width: 400px;
                  background-color: rgba(23, 75, 207, 0.898);
                  position: absolute;
                  transform: translate(-50%, -50%);
                  top: 200%;
                  left: 50%;
                  border-radius: 10px;
                  backdrop-filter: blur(10px);
                  border: 2px solid rgba(255, 255, 255, 0.1);
                  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
                  padding: 70px 35px;
                  
                
                 font-family: "Poppins", sans-serif;
                 color: black;
                 letter-spacing: 0.5px;
                 outline: none;
                  border: none;

                  .register-email {
                    label {
                      display: block;
                      margin-top: 30px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 8px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                    #textOne{
                      padding-top: 20px;
                      display: block;
                    }
                  }
                  
                  .register-password {
                    label {
                      display: block;
                      margin-top: 40px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 8px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                  }
                  .register-confirm-password{
                     label {
                      display: block;
                      margin-top: 40px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 8px;
                      font-size: 14px;
                      font-weight: 300;
                    }

                  }
                .register-check {
                    label {
                      display: block;
                      margin-top: 50px;
                      font-size: 16px;
                      font-weight: 500;
                    }
                    input {
                      display: block;
                      height: 50px;
                      width: 100%;
                      background-color: rgba(255, 255, 255, 0.7);
                      border-radius: 3px;
                      padding: 0 10px;
                      margin-top: 20px;
                      font-size: 14px;
                      font-weight: 300;
                    }
                  }

                  button {
                    margin-top: 70px;
                    height: 70px;
                    width: 100%;
                    background-color: #ffffff98;
                    color: #080710;
                    padding: 15px 0;
                    font-size: 18px;
                    font-weight: 600;
                    border-radius: 5px;
                    cursor: pointer;
                  }
                  
                  
                  }
                
                
                
                }



}




</style>