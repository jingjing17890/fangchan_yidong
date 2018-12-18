<template>
  <div class="header">
    <i class="icon_left fl" @click="onBack()"></i>
    <p class="header_title">{{title}}</p>
  </div>  
</template>
<script>
export default {
  props:['title'],
  methods: {
    onBack(e) {
      this.$router.go(-1)
    }
  }
}
</script>
<style>
.header{
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: #1A1F25;
  font-size: 18px;
  color: #FFFFFF;
}
.header_title{
  margin-left:30px;
  margin-right:30px;
  height:100%;
  font-family: PingFangSC-Light;
  text-align:center;
}
</style>

