<template>
<!-- user orders page -->
  <div class="item-model">
    <div class="header">
      <p>Order details</p>
      <h1 :class="color">{{ item.title }}</h1>
    </div>
    <main>
      <div class="item-info">
        <h2>{{ item.category }}</h2>
      </div>
      <div class="others-info">
        <div class="short-info">
          <p class="short-size">{{item.shortDesc}}</p>
          <p>{{item.longDesc}}</p>
        </div>
        <div class="greetings">
          <p>Thank You!</p>
        </div>
      </div>
    </main>
    <footer>
      <img src="../assets/bar_code.svg" alt="Bar code" />
      <p>#A2ED7</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: { item: Object },

  computed: {
    totalPrice() {
      return this.item.price * this.item.amount;
    },

    color() {
      const str = this.item.title;
      return str.toLowerCase()
    },

  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.item-model {
  width: 312px;
  height: 442px;
  background-color: #fff;
  padding: 14px;
  margin: 80px auto 0px auto;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: -1px 0px 17px 12px rgba(82, 82, 82, 0.29);

  .header {
    height: 88px;
    h1 {
      // font-family: "Sansita", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;

      align-items: center;

      color: #eb5509;
      margin: 20px 0px 0px 10px;
    }

    .Green{
        color:green;
    }

    p {
      // font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;

      color: rgba(0, 0, 0, 0.4);
      margin-left: 10px;
    }
  }

  main {
    background: rgba(0, 0, 0, 0.03);

    .item-info {
      border-top: dotted 1px rgba(0, 0, 0, 0.4);
      border-bottom: dotted 1px rgba(0, 0, 0, 0.4);
      padding: 8px 0px 0px 0px;

      h2 {
        // font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        text-transform: capitalize;
        align-items: center;

        color: rgba(0, 0, 0, 0.7);
        margin: 10px 0px 6px 10px;
        margin-left: 10px;
      }

      .item {
        // font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;

        align-items: center;

        margin: 0px 0px 32px 10px;
      }
    }
    .others-info {
      .greetings {
        margin: auto;
        background-color: #dadada;
        border: 1px dotted;
        padding: 12px 0px;
        p {
          text-align: center;
          
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          padding: 0px 12px;
          color: rgba(0, 0, 0, 0.6);
        }
        .from {
          border-left: 1px dotted rgba(0, 0, 0, 0.4);
          border-right: 1px dotted rgba(0, 0, 0, 0.4);
        }
      }
      .short-info {
        // font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        padding: 10px 0px;
        color: rgba(0, 0, 0, 0.6);
        border-bottom: 2px gray solid;
        .short-size{
          font-weight: 600;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 120px;
    margin-top: 28px;
    p {
      // font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: bold;
      margin-top:8px;

      color: rgba(0, 0, 0, 0.4);
    }
  }
}


// styling test

</style>