<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from "./storage";
export default {
  name: "app",
  data() {
    return {
      res: {}
    };
  },
  components: {},
  mounted() {
    // storage.setItem("a", 1);
    // storage.setItem("user", { a: 1 });
    // storage.setItem("abc", { a: 1 }, "user");
    // storage.clear("a", "user");
    this.getUser();
    this.getCartCount();
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(res => {
        //to-do save to vuex
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then(res => {
        //to-do save to vuex
        this.$store.dispatch("saveCartCount", res.data);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/mixin.scss";
@import "./assets/scss/modal.scss";
@import "./assets/scss/button.scss";
</style>
