<template>
  <div class="nav-bar">
    <div class="container" :class="{is_fixed:isFixed}">
      <div class="pro-title">{{title}}</div>
      <div class="pro-param">
        <a href="javascript:;">概述</a>
        <span>|</span>
        <a href="javascript:;">参数</a>
        <span>|</span>
        <a href="javascript:;">评价</a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  },
  data() {
    return {
      isFixed: true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  destroyed() {
    window.removeEventListener("scroll", this.initHeight, false);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 150 ? true : false;
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  .is_fixed {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: $colorG;
    z-index: 10;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
      padding-left: 20px;
    }
    .pro-param {
      padding-right: 20px;
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        color: $colorC;
      }
    }
  }
}
</style>