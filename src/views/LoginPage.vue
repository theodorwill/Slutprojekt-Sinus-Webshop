<template>
  <div>
    <section class="breadcrumbs">
      <h1>LOGIN</h1>
      <p>
        <router-link to="/"><span>Home</span></router-link>
        <img
          src="../assets/right.svg"
          alt=""
        />
        <span>Login</span>
      </p>
      <div>
        <hr>
      </div>
    </section>
    <section class="login-form">
      <h3>Login</h3>
      <p v-if="err" class = 'error-mgs'>{{err.error}}</p>
      <div class="login-container">
        <form @submit.prevent="logIn">
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            placeholder="email@example.com"
            v-model="login.email"
          />
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            pattern=".{8,}"
            required
            placeholder="Password 8 or more letters/symbols"
            v-model="login.password"
          />
          <a href="#">Forget your password ?</a>
          <button>Login</button>
        </form>
      </div>
      <hr class="solid" />
      <div class="sign">
        <p>Don’t have an account?</p>
        <a
          href="#"
          @click="click"
        >Sign up here</a>
      </div>
    </section>
  </div>
</template>

<script>

// import ModelCardProductsList from "../components/ModelCardProductsList.vue";
export default {
  components: {},

  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },

computed:{
  err(){
    return this.$store.state.errors 
  }
},

  methods: {
    async logIn() {
      try{
        if (this.login.email !== "" && this.login.password !== "") {
        await this.$store
          .dispatch("login", {
            email: this.login.email,
            password: this.login.password,
          })
          
        await this.$store.dispatch("getCurrentUser");
        this.$router.push("/user");
      } 
      }catch(error){
        await this.$store.dispatch("catchErr", error.response.data);
        console.log(error)
      }
      
    },

    click() {
      this.$router.push("/register");
    },
  },
};
</script>

<style scoped lang="scss">

.login-form {
  margin: 6rem 0 11rem 0;
  .error-mgs{
    color: red;
  }

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

.register-form {
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
input[type="email"],
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
</style>