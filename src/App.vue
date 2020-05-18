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
    this.axios.get("/user/login").then(res => {
      this.res = res;
    });
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
