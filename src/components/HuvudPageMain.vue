<template>
  <div class="huvud-page-main">
      <div class="top-main">
            <h1>Välkommen till Sveriges största online Skateboards butik. Vi har allt du önska dig och lite till.</h1>
            <button >KOLLA IN SHOPPEN</button>
      </div>
      <h2>scroll down</h2>
      <div class="middle-main">
          <article class="personas-1">
              <div class="top">
                  <img src="../assets/daniel.png" alt="">
                  <h2>Daniel</h2>
                  <p>7 år från Karlskrona</p>
              </div>
              <div class="bottom">
                  <h1>“Att åka skatebord är det bästa jag vet.”</h1>
                  <p>Jag älskar att åka skateboard. När jag inte är i skolan så är jag med mina vänner vid skate parken.</p>
              </div>  
          </article>
          <article class="personas-2">
              <div class="top">
                  <img src="../assets/alex.png" alt="">
                  <h2>Alex</h2>
                  <p>9 år från Stockholm</p>
              </div>
              <div class="bottom">
                  <h1>“Jag har precis börjat men det är väldigt roligt.”</h1>
                  <p>Jag har inte åkt  så länge så jag ärinte så bra jag än. Men jag fick en ny skateboard när jag fyllde år så nu kan jag åka mycke bättre.</p>
              </div>  
          </article>
          <article class="personas-3">
              <div class="top">
                  <img src="../assets/johanna.png" alt="">
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
      <div class="bottom-main">
          <article class="mission-1">
              <i class="fab fa-accessible-icon"></i>
              <h3>Vision</h3>
              <p>Alla ska kunna hitta något som passar ens egan stil.</p>
          </article>
          <article class="mission-2">
              <h3>Vision</h3>
              <p>Alla ska kunna hitta något som passar ens egan stil.</p>
          </article>
          <article class="mission-3">
              <h3>Vision</h3>
              <p>Alla ska kunna hitta något som passar ens egan stil.</p>
          </article>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
          <br>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.top-main{
    width: 1440px;
    height: 800px;
    background-image: url(../assets/huvud-img.jpg);
    background-position: center;
    background-size: cover;
    h1{
        width: 800px;
        margin: auto;
        padding-top: 5rem;
        text-align: center;
        font-size: 3rem;
        color: white;
    }
    button{
        width: 300px;
        height: 80px;
        margin: 17rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        font-weight: 800;
        border-radius: 50px;
        background: none;
        color: white;
    }
}
h2{
    width: 200px;
    margin: auto;
    padding: 1rem;
    text-align: center;
    font-size: 2rem;
}
.middle-main{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2rem;
padding: 1rem 4rem;

}
.personas-1 ,.personas-2, .personas-3{
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    text-align: center;
    width: 400px;
    height: 700px;
    box-shadow: 0px 5px 7px 1px rgba(0,0,0,0.7);
    .top{
        background-color: rgb(116, 113, 113);
        width: 400px;
        color: white;
    }
    img{
        width: 300px;
        height: 250px;
        padding: 1rem;
    }
    .bottom p{
        width: 300px;
        margin: auto;
        text-align: center;
    }
    .bottom h1{
        width: 300px;
    }
}
h1{
    width: 150px;
    margin: auto;
    padding: 3rem;
    text-align: center;
}
hr.solid {
  border-top: 3px solid #bbb;
}
.bottom-main{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2rem;
padding: 2rem 9rem;
}
.mission-1, .mission-2, .mission-3{
    background-color: chocolate;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 6px 7px 7px 4px rgba(0,0,0,0.63);
    color: white;

    h3{
        
    }
    p{
        width: 200px;
        text-align: center;
        
    }

}
.mission-1{
    background-color: rgb(12, 69, 143);
}
.mission-2{
    background-color: rgb(165, 206, 17);
}
.mission-3{
    background-color: rgb(197, 78, 22);
}
</style>