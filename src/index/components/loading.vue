<template>
<div class="bq-loading" :style="{ transform: 'translateY('+pxRem+'rem)' }" v-show="show" :max-top="top > 44">
  <div class="bq-loading-toast">
    <triple-bounce></triple-bounce>
    <p>全力加载中...</p>
  </div>
</div>
</template>
<script>
import tripleBounce from './triple.bounce.vue'
export default {
  name: 'bq-loading',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    top: {
      type: Number,
      default: 44
    }
  },
  created() {
    this.show = this.value
  },
  computed: {
    pxRem() {
      return this.top / 37.5
    }
  },
  data() {
    return {
      show: false
    }
  },
  watch: {
    value(val) {
      this.show = val
    },
    show(val) {
      this.$emit('input', val)
    }
  },
  components: {
    tripleBounce
  }
}
</script>
<style>
.bq-loading {
    position: fixed;
    z-index: 1888;
    transform: translateY(44px);
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
}
.bq-loading-toast {
  position: fixed;
  z-index: 1889;
  width: 100px;
  min-height: 100px;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f8f8f8;
  text-align: center;
}
.bq-loading-toast p {
  font-size:14px;
  color: #333333;
  letter-spacing: 0;
  padding-top: 17px;
}
.bq-loading-toast p[max-top="true"] .bq-loading-toast{
  top: 190px;
}
</style>
