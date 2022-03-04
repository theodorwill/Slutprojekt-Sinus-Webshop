<template>
  <div class="about">
    <div class="about-section">
      <h1>About Us</h1>
      <p>Some text about who we are and what we do.</p>
      <p>
        Resize the browser window to see that this page is responsive by the
        way.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
        perspiciatis, doloribus error eius omnis quia rem iure ipsum ex
        voluptatum consequuntur dolor sint id vero, pariatur ipsam ab dolorem
        deserunt? Commodi cum tempore corrupti provident accusantium
        repudiandae, laudantium alias laborum delectus quo numquam quibusdam qui
        odio deleniti cupiditate magnam ducimus omnis perspiciatis ea porro
        rerum, cumque neque. Eaque minima accusantium sunt cum esse aliquam amet
        odio officiis cumque. Libero, eos. Cumque quasi quod nihil odit
        veritatis quam nemo eos culpa, cupiditate placeat tempore consequatur
        ut, reprehenderit officia vel corporis! Excepturi veritatis officiis id
        odit ea laboriosam voluptates. Velit veniam nemo quis suscipit! Vel iste
        architecto accusantium sapiente totam enim? Culpa, quam. Ut debitis
      </p>
    </div>
    <h2 style="text-align: ">Our Team</h2>
    <div class="our-teams">
      <div class="person">
        <div class="images rashadul" alt="" />
        <h2>Rashadul</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>rashadul@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
      <div class="person">
        <div class="images omar" alt="" />
        <h2>Omar</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>omarhuba@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
      <div class="person">
        <div class="images theow" alt="" />
        <h2>Theo</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>theow@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
      <div class="person">
        <div class="images giash" alt="" />
        <h2>Giash</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>giash@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 80px;
  background-color: #aaa;
  // font-family: "Times New Roman", Times, serif;
  h1,
  p {
    display: flex;
    padding: 5px;
    padding-left: 2rem;
    margin: 0px;
    color: white;
  }
  h1 {
    color: black;
  }
  a {
    text-decoration: none;
  }
}
.about-section {
  padding: 50px;
  text-align: center;
  background-color: #474e5d;
  color: white;
  line-height: 1.6rem;
  p {
    width: 70%;
    margin: 20px auto;
  }
}
h2 {
  font-size: 2.7rem;
}
.our-teams {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  // grid-gap: 1rem;
  padding: 1rem 3rem;
}
.person {
  width: 300px;
  margin: 1rem 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  img {
    margin-top: 1rem;
    width: 220px;
    height: 200px;
  }
  h2 {
    // font-family: Arial, Helvetica, sans-serif;
    font-size: 1.7rem;
  }
  .title {
    color: #aaa;
  }
  p {
    width: 70%;
    margin: 1rem auto;
    font-size: 1.1rem;
  }
  button {
    border: none;
    outline: 0;
    display: inline-block;
    padding: 8px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
    width: 60%;
    &:hover {
      background-color: chocolate;
      transition: 0.5s;
    }
  }
}

.images {
  width: 200px;
  height: 200px;
  margin: 2rem auto auto auto;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 50%;
}

.rashadul {
  background-image: url("../assets/rashadul.png");
  background-size: 100%;
  background-position: center top;
}

.omar {
  background-image: url("../assets/omar.png");
  background-size: 100%;
}

.theow {
  background-image: url("../assets/tw.jpg");
  background-size: cover;
}

.giash {
  background-image: url("../assets/giash.jpg");
  background-size: 100%;
  background-position: center bottom;
}
</style>
