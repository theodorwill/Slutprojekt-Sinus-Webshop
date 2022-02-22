<template>  
  <div class="login-page" v-if="logen-page">
    <section class="top">
      <h1>Login</h1>
    </section>
    <section class="middle-1">
      <h3>Login</h3>
      <div class="container">
        <form action="">
          <label for="email">Your Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Type Your Email Here..."
          />
          <label for="email">Your Password:</label>
          <input
            type="password"
            name="email"
            placeholder="Type Your Password Here..."
          />
          <a href="#">Forget your password ?</a>
        </form>
          <button>Login</button>
      </div>
    </section>
    <hr class="solid">
        <div @click="2" class="face-book">
            <img src="../assets/facebook.svg" alt="">
            <h4>
            Login with Facebook
            </h4>
        </div>
        <div class="register">
            <p>Don’t have an account? </p>
            <a href="#">Sign up here</a>
        </div>
     <section class="middle-2">
        <h3>Retail products</h3>
        <div class="product-list-container">
            <ModelCardProductsList />
            <ModelCardProductsList />
            <ModelCardProductsList />
            <ModelCardProductsList />
            <ModelCardProductsList />
        </div>
    </section>
    <section class="bottom">
        <div>
            <h1>Up comming products</h1>
        </div>
    </section>
  </div>

</template>

<script>
import ModelCardProductsList from "../components/ModelCardProductsList.vue";
export default {
     components: { ModelCardProductsList },
};
</script>

<style scoped lang="scss">
.top {
  width: 100%;
  height: 80px;
  background-color: #aaa;
  font-family: "Times New Roman", Times, serif;
  display: flex;
  h1 {
    margin-left: 2rem;
    
  }
}
.middle-1{
    h3{
        font-size: 2rem;
    }
}
 .container {
    width: 400px;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
    }
    label {
    display: flex;
    }
    input[type="text"],
    select{
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        background-color: #F5F5F5;
    }
    input[type="password"],
    select{
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        // margin-bottom: 16px;
        resize: vertical;
        background-color: #F5F5F5;
    }
    a{
        display: flex;
        justify-content: flex-end;
    }
    button{
        width: 400px;
        height: 40px;
        margin: 2rem auto;
        background-color: #2091F9;
        border-radius: 5px;
        border: none;
        font-size: 1.2rem;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #45a049;
            transition: 0.5s;
        }
    }
    hr.solid {
  border-top: 1px solid #bbb;
  width: 400px;
    }
   .face-book{
        display: flex;
        justify-content: center;
        background-color: #2091F9;
        color: white;
        width: 400px;
        margin: auto;
        border-radius: 5px;
        cursor: pointer;
        h4{
            margin: 1rem;
        }
    }
    .register{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px;
        margin: auto;
        a{
            font-size: 1.2rem;
            margin: 1rem;
            text-decoration: none;
            font-weight: 900;
            color: #2091F9;
        }
    }
.middle-2{
    h3{
        display: flex;
        margin-left: 4rem;
        padding: 2rem;
    }
    .product-list-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr ;
        padding: 0rem 10rem;
    }
}
.bottom{
    width: 1000px;
    height: 400px;
    margin:  10rem auto;
    background-color: #2091F9;
    h1{
        font-size: 4rem;
        padding: 5rem 0;
    }
}
</style>