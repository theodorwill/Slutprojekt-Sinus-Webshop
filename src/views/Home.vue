<template>
  <div class="home-view">
    <div class="promotion">
      <h1>Välkommen till Sveriges största online Skateboards butik. Vi har allt du önska dig och lite till.</h1>
      <router-link to="/products">
        <button>KOLLA IN SHOPPEN</button>
      </router-link>
    </div>
    <h2>scroll down</h2>
    <a href="#scroll-down">
      <img
        src="../assets/down.svg"
        alt=""
      >
    </a>
    <div class="middle-main">
      <article class="personas">
        <div>
          <div
            class="images daniel"
            alt=""
          />
          <h2>Daniel</h2>
          <p>7 år från Karlskrona</p>
        </div>
        <div class="bottom">
          <h1>“Att åka skatebord är det bästa jag vet.”</h1>
          <p>Jag älskar att åka skateboard. När jag inte är i skolan så är jag med mina vänner vid skate parken.</p>
        </div>
      </article>
      <article class="personas">
        <div>
          <div
            class="images alex"
            alt=""
          />
          <h2>Alex</h2>
          <p>9 år från Stockholm</p>
        </div>
        <div class="bottom">
          <h1>“Jag har precis börjat men det är väldigt roligt.”</h1>
          <p>Jag har inte åkt så länge så jag ärinte så bra jag än. Men jag fick en ny skateboard när jag fyllde år så nu kan jag åka mycke bättre.</p>
        </div>
      </article>
      <article class="personas">
        <div>
          <div
            class="images johanna"
            alt=""
          />
          <h2>Johanna</h2>
          <p>8 år from Göteborg</p>
        </div>
        <div class="bottom">
          <h1>“Det är svårt ibland men det är ändå välldigt kul.”</h1>
          <p>Jag gillar skateboard. Det är svårt att hålla balancen ibland, men det är roligt ändå. När jag inte är i skolan går jag till skateparken med mina kompisar.</p>
        </div>
      </article>
    </div>
    <h1>Our Mission</h1>
    <hr class="solid">
    <div
      class="bottom-main"
      id="scroll-down"
    >
      <article class="mission-1">
        <img
          src="../assets/visibility.svg"
          alt=""
        >
        <h3>Vision</h3>
        <p>Alla ska kunna hitta något som passar ens egan stil.</p>
      </article>
      <article class="mission-2">
        <img
          src="../assets/rocket.svg"
          alt=""
        >
        <h3>Mission</h3>
        <p>Vi vill göra vårt sortument så tillgängligt som möjligt för alla genom att öppna fler butiker runt om hela landet.</p>
      </article>
      <article class="mission-3">
        <img
          src="../assets/values.svg"
          alt=""
        >
        <h3>Values</h3>
        <p>Behåll priset så prisvärd som möjligt med väldigt hög kvalite.</p>
      </article>

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.promotion {
  // width: 1440px;
  width: 100%;
  height: 800px;
  background-image: url(../assets/huvud-img.jpg);
  background-position: center;
  background-size: cover;
  h1 {
    width: 800px;
    margin: auto;
    padding-top: 5rem;
    text-align: center;
    font-size: 3rem;
    color: white;
    // font-family: 'Lora', serif;
  }
  a {
    text-decoration: none;
  }
  button {
    width: 300px;
    height: 80px;
    margin: 17rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 800;
    border-radius: 50px;
    border: 2px solid #fff;
    background: none;
    color: white;
  }
}
h2 {
  width: 200px;
  margin: 0 auto;
  // padding: 1rem;
  text-align: center;
  font-size: 2rem;
}
.middle-main {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 2rem 0;
}
.personas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 5px;
  width: 400px;
  height: 700px;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);

  > div:first-child {
    background-color: #474e5d;
    width: 400px;
    border-radius: 5px;
    color: white;

    .images {
      width: 300px;
      height: 250px;
      margin: 3rem auto 1rem auto;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 5px;
    }

    .daniel {
      background-image: url("../assets/daniel-1.png");
      background-position: center top;
    }
    .alex {
      background-image: url("../assets/alex-1.png");
      background-position: center top;
    }
    .johanna {
      background-image: url("../assets/johanna-1.png");
      background-position: center bottom;
    }
  }

  .bottom p {
    width: 100%;
    margin: auto;
    text-align: center;
  }
  .bottom h1 {
    width: 300px;
  }
}
h1 {
  width: 150px;
  margin: auto;
  padding: 3rem;
  text-align: center;
}
hr.solid {
  border-top: 3px solid #bbb;
}
.bottom-main {
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  padding: 5rem 0;
}
.mission-1,
.mission-2,
.mission-3 {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  color: white;
  img {
    width: 70px;
    height: 70px;
  }
  h3 {
    font-size: 1.7rem;
    margin: 0;
  }
  p {
    width: 200px;
    text-align: center;
    margin: 0;
  }
}
.mission-1 {
  background-color: #0076c4;
}
.mission-2 {
  background-color: #f69e03;
}
.mission-3 {
  background-color: #eb5509;
}
</style>
