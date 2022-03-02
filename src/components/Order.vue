<template>
<!-- user orders page -->
  <div class="item-model">
    <header>
      <h1 :class="color">{{ item.title }}</h1>
    </header>
    <main>
      <div class="item-info">
        <h2>{{ item.category }}</h2>
      </div>
      <div class="others-info">
        <div class="date-info">
          <p>SEK {{ totalPrice }}</p>
        </div>
        <div class="short-info">
          <p>INFO</p>
          <p>{{ item.longDesc }}</p>
        </div>
      </div>
    </main>
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
      return str;
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
  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 14px;
  border-radius: 5px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);

  header {
    
    h1 {
      font-family: "Sansita", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 30px;
      padding:1rem;

      align-items: center;

      color: #eb5509;
      
    }

    .Green {
      color: green;
    }

    p {
      font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;

      color: rgba(0, 0, 0, 0.4);
      
    }
  }

  main {
    background: rgba(0, 0, 0, 0.03);

    .item-info {
      border-top: dotted 1px rgba(0, 0, 0, 0.4);
      border-bottom: dotted 1px rgba(0, 0, 0, 0.4);
      padding: 8px 0px 0px 0px;
      .where {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;

        align-items: center;

        color: rgba(0, 0, 0, 0.4);
        
      }

      h2 {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        align-items: center;

        color: rgba(0, 0, 0, 0.7);
        
      }

      .item {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;
        align-items: center;
      }
    }
    .others-info {
      .date-info {
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
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        padding: 10px 0px;
        color: rgba(0, 0, 0, 0.6);
        border-bottom: 2px gray solid;
      }
    }
  }
}

// styling test
</style>