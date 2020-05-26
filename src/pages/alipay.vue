<template>
  <div class="ali-pay">
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "alipay",
  data() {
    return {
      orderId: this.$router.query.orderId,
      content: ""
    };
  },
  mounted() {
    this.paySubmit();
  },
  methods: {
    paySubmit() {
      this.axios
        .post("/pay", {
          orderId: this.orderId,
          orderName: "test order",
          amount: 0.01,
          payType: 1
        })
        .then(res => {
          this.content = res.content;
        });
    }
  },
  components: {}
};
</script>
