<template>
  <div class="contact">
    <section class="top">
      <h1>CONTACT</h1>
    </section>
    <section class="middle-1">
      <h3>Contact us</h3>
      <div class="container">
        <form action="/action_page.php">
          <label for="fname">Your Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Type Your name Here..."
          />

          <label for="email">Your Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Type Your Email Here..."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">SVERIGE</option>
            <option value="canada">NORGE</option>
            <option value="usa">DANMARK</option>
            <option value="usa">FINLAND</option>
            <option value="usa">ISLAND</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style="height: 200px"
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
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

<style lang="scss" scoped>
:root{
  --showcase-fontfamily: 'Lora', serif;
  --navbar-fontfamily: 'Oswald', sans-serif;
  --allheadlines-fontfamily: 'Oswald', sans-serif;
  --paragraph-fontfamily: 'Oswald', sans-serif;
  --primery-color: #0076C4;
  --secondary-color: #f69e03;
  --color-Btn: #1c1c1c;
  --pagebar-color:  #eb5509;
}
.contact {
  font-family:var(--showcase-fontfamily);
}

.top {
  width: 100%;
  height: 80px;
  background-color: #aaa;
  display: flex;
  h1 {
    margin-left: 2rem;
    font-family: var(--allheadlines-fontfamily);
  }
}
.middle-1{
    h3{
        padding: 2rem;
        font-size: 1.5rem;
        font-family: var(--allheadlines-fontfamily);
    }
    .container {
    width: 600px;
    margin: auto;
    border-radius: 5px;
    padding: 20px;
    }
    label {
    display: flex;
    }
    input[type="text"],
    select,
    textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-top: 6px;
        margin-bottom: 16px;
        resize: vertical;
        background-color: #F5F5F5;
        font-family: var(--paragraph-fontfamily);
    }
    input[type="submit"] {
    background-color: #2091F9;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
     font-family: var(--paragraph-fontfamily);
    }
    input[type="submit"]:hover {
    background-color: #45a049;
    font-family: var(--paragraph-fontfamily);
    }
}
.middle-2{
    h3{
        display: flex;
        margin-left: 4rem;
        padding: 2rem;
        font-family: var(--allheadlines-fontfamily);
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
        font-family: var(--allheadlines-fontfamily);
    }
}
</style>