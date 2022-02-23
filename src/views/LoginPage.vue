<template>
  <div>
         <section class="top">
        <h1>LOGIN</h1>
        <p>
          <router-link to="/"><span>Home</span></router-link>
          <img src="../assets/right.svg" alt="">
        <span>Login</span>
        </p>
      </section>

        <section class="middle-1">
             <h3>Login</h3>
            <div class="login-container">
                <form action="">
                <label for="email">Your Email:</label>
                <input type="text" name="email" placeholder="Type Your Email Here..."/>
                <label for="email">Your Password:</label>
                <input type="password" name="email" placeholder="Type Your Password Here..."
                />
                <a href="#">Forget your password ?</a>
                </form>
                <button>Login</button>
            </div>
            <hr class="solid" />
            <div @click="click" class="face-book">
                <img src="../assets/facebook.svg" alt="" />
                <h4>Login with Facebook</h4>
            </div>
            <div class="sign">
                <p>Don’t have an account?</p>
                <a href="#">Sign up here</a>
            </div>
        </section>

        <section class="middle-2">
            <div class="register-page">
                <h3>Register</h3>
                <div class="register-container">
                <form action="">
                    <label for="email">Your Email:</label>
                    <input type="text" name="email" placeholder="ex:example@mail.se" />
                    <label for="email">Your Password:</label>
                    <input type="password" name="password" placeholder="Type your password "/>
                    <label for="email">Please Confirm Your Password:</label>
                    <input type="password" name="password" placeholder="Re-type your password "/>
                </form>
                <div class="check-box">
                    <label><input type="checkbox" />By creating an account you agree to our</label>
                    <a href="#"> conditions</a>
                </div>
                <button>Register</button>
                <div class="sign">
                    <p>Already have an account?</p>
                    <a href="#">Login here</a>
                </div>
                </div>
            </div>
        </section>

        <section class="middle-3">
            <div class="product-list-container">
                <h1>Up comming products</h1>
            </div>
        </section>
  </div>
</template>

<script>
// import ModelCardProductsList from "../components/ModelCardProductsList.vue";
export default {
  components: {},
  methods:{
      click(){
          console.log('hello')
      }
  }
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 80px;
  background-color: #aaa;
  font-family: "Times New Roman", Times, serif;
    padding-left: 2rem;
  h1 ,p{
    display: flex;
    margin: 0;
    padding: 5px;
    color: white;
  }
  h1{
    color: black;
  }
  a {
    text-decoration: none;
  }
}
.middle-1 {
  h3 {
    font-size: 2rem;
  }
}
.login-container {
  width: 400px;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
}
label {
  display: flex;
}
input[type="text"],
select {
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
input[type="password"],
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  // margin-bottom: 16px;
  resize: vertical;
  background-color: #f5f5f5;
}
a {
  display: flex;
  justify-content: flex-end;
}
button {
  width: 400px;
  height: 40px;
  margin: 2rem auto;
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
hr.solid {
  border-top: 1px solid #bbb;
  width: 400px;
}
.face-book {
  display: flex;
  justify-content: center;
  background-color: #2091f9;
  color: white;
  width: 400px;
  margin: auto;
  border-radius: 5px;
  cursor: pointer;
  h4 {
    margin: 1rem;
  }
}
.sign {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin: auto;
  a {
    font-size: 1.2rem;
    margin: 1rem;
    text-decoration: none;
    font-weight: 900;
    color: #2091f9;
  }
}

.middle-2 {
  h3 {
    font-size: 2rem;
  }
}
.register-container {
  width: 400px;
  margin: auto;
  border-radius: 5px;
  padding: 20px;
}
label {
  display: flex;
}
input[type="text"],
select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  // margin-bottom: 16px;
  resize: vertical;
  background-color: #f5f5f5;
}
input[type="password"],
select {
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
a {
  display: flex;
  justify-content: flex-end;
}
button {
  width: 400px;
  height: 40px;
  margin: 2rem 0 auto;
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
.check-box {
  display: flex;
  width: 400px;
  margin: auto;
  a {
    color: #2091f9;
    text-decoration: none;
    // font-size: 1.2rem;
    font-weight: 900;
    margin-left: 10px;
  }
}
.middle-3{

    .product-list-container{
        width: 1000px;
        height: 400px;
        margin:  10rem auto;
        background-color: #2091F9;
        h1{
            font-size: 4rem;
            padding: 5rem 0;
            width: 600px;
            margin: auto;
            color: white;
        }
    }
}
</style>