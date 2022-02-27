<template>
  <div class="user-profile">
    <section>
      <form class="form">
        <p>User name: {{this.$store.state.user.email}}</p>
        <p>User name: {{this.$store.state.user.name}}</p>
        <p>User name: {{this.$store.state.user.address.city}}</p>
        <p>User name: {{this.$store.state.user.address.street}}</p>
        <p>User name: {{this.$store.state.user.address.zip}}</p>
        <input
          type="email"
          name="email"
          placeholder="email"
        />

        <input
          type="text"
          name="password"
          placeholder="Change Password"
        />
        <input
          type="text"
          name="order"
          placeholder="Order History"
        />
        <input
          type="text"
          name="order"
          placeholder="Order History"
        />
        <input
          type="text"
          name="order"
          placeholder="Order History"
        />
      </form>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      register: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          street: "",
          zip: "",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  > section > form {
    width: 40%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
