<template>
  <div class="user-profile">
    <div class="user-profile-left-right">
  <section class="user-profile-left">
  <div class="user-profile-image">
  <!-- <img class="human" src="../assets/img_human.png" alt="hman-img"> -->
  </div>
  
  <form class="form">
  <h1>NAME</h1>
          <input
            type="text"
            id="fname"
            name=""
            placeholder="Overview"
          />
          
          <input
            type="text"
            id="password"
            name="password"
            placeholder="Change Password"
          />
           <input
            type="text"
            id="order"
            name="order"
            placeholder="Order History"
          />
          <h1>JUST TEST !!!</h1>
  </form>
  </section>


  <section class="user-profile-right">
    <div class="user-information">
      <p>User name: abcdef@yahoo.com</p>
      <address class="user-address">
        Contact information: <br>
        Stockholm 123 <br>
        12341, Stockholm <br>
        Sweden <br>
        Mobile:075 XXXX XXX <br>
        Email:abcdef@yahoo.com
      </address>
    </div>
  </section>
  </div>

  <section class="change-password">
    <form class="form-change-password">
       <input
            type="text"
            id="fname"
            name=""
            placeholder="Current Password"
          />
          
          <input
            type="text"
            id="password"
            name="password"
            placeholder="New Password"
          />
           <input
            type="text"
            id="order"
            name="order"
            placeholder="Confirm Password"
          />
          <button class="btn">Submit</button>
    </form>
  </section>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.user-profile{
margin: 100px 10px 50px 0px;

.user-profile-left-right{
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  margin-left:-50px; 
  padding-left:-0px;

.user-profile-left{

text-align: start;
padding-left:5px;
.user-profile-image{
  width: 400px;
  height: 300px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: white;
  border-radius: 10px;

  .human{
  width: 150px;
  background-color: #FFD9D9;
  border-radius: 50%;
  position: relative;
 transform: translate(+80%, +50%);
    
  }
}

.form{
  display: flex;
  flex-direction: column;
  column-gap: 30px;
  row-gap: 10px;
  color: black;

  h1{
    font-size: 20px;
  }
}
}

.user-profile-right{
  display: flex;
 border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: white;
  transform: translate(+30%, -15%);
  width: 400px;
  height: 400px;
  font-size: 30px;
  font-family: sans-serif;
  align-content: center;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  border-radius: 10px;  
}
}
//******* */

.change-password{
  display:none;
  margin: 100px;
  font-family: sans-serif;
  font-size:20px;
  font-weight: 400px;

.form-change-password{
  display: flex;
  flex-direction:column;
  row-gap: 20px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  background-color: white;
  font-size: 30px;
  font-family: sans-serif;
  align-content: center;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  border-radius: 10px;  
  height:500px;
  width: 400px;
  transform: translate(110%, 5%);
 input{
   width: 300px;
   height: 60px;
   font-family: sans-serif;
   font-size:20px;
   font-weight: 600px;
 }
 .btn{
   width:100px;
   height: 50px;
   font-size: 20px;
   font-weight: 700;
   color:black;
   border-radius: 5px;
 }
}
}

}
</style>
