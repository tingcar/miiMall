<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" @click="$emit('submit')">{{sureText}}</a>
          <a
            href="javascript:;"
            class="btn btn-default"
            v-if="btnType==2"
            @click="$emit('cancel')"
          >{{cancleText}}</a>
          <div class="btn-group" v-if="btnType==3">
            <a href="javascript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
            <a href="javascript:;" class="btn btn-default" @click="$emit('cancel')">{{cancleText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalType: {
      type: String,
      default: "form"
    },
    title: String,
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    cancleText: {
      type: String,
      default: "取消"
    },
    showModal: {
      type: Boolean,
      default: false
    }
  }
};
</script>