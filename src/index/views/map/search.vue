<template>
  <div class="top">
    <div class="search-c">
      <!-- <span class="city" @click="selectCity()">{{ cityName || '选择城市'}}
        <i class="bq-icon-down-b"></i>
      </span> -->
      <div class="search">
        <i class="bq-icon-goods-search"></i>
        <a v-if="source === 'searchMore'" @click="goSearch">
          请输入送货地址
        </a>
        <input v-if="source !== 'searchMore'"  type="search" placeholder="请输入送货地址"
        autocomplete="off"
        value='搜索'
        id="address"
        v-model="addressInput"
        v-on:blur = "onBlur()"
        v-on:focus = "showHistory()">
        <i class="bq-icon-goods-clear" @click="clearInput()" v-if="source !== 'searchMore'"></i>
      </div>
    </div>
    <div class="cancel" @click="cancel">取消</div>
  </div>
</template>
<script>
import MapService from '../../services/map.service'
import { mapActions, mapState } from 'vuex'

export default {
  data: function () {
    return {
      addressInput: '',
      address: {}
    }
  },
  props: ['source'],
  mounted () {
    this.mapService = new MapService()
    if (this.source !== 'searchMore') {
      document.getElementById('address').focus()
      this.enterClick()
    }
    // this.getAddressCityName()
  },
  computed: {

  },
  watch: {
    addressInput(val) {
      this.$emit('goSearch', this.addressInput, 1)
    }
  },
  methods: {
    enterClick () {
      var self = this
      window.document.onkeydown = function (event) {
        let et = event || window.event
        let keycode = et.charCode || et.keyCode
        if (keycode === 13) {
          if (window.event) {
            self.$emit('goSearch', self.addressInput)
            window.event.returnValue = false
          } else {
            self.$emit('goSearch', self.addressInput)
            event.preventDefault() // for firefox
          }
        }
      }
    },
    onBlur () {
      this.$emit('goSearch', this.addressInput)
    },
    goSearch () {
      this.$router.push('/store/moreaddress')
    },
    selectCity () {
      this.$router.push('/cityList')
    },
    clearInput () {
      this.addressInput = ''
    },
    cancel () {
      this.$router.go(-1)
    },
    myInputBlur () { // input框 失去焦点 搜索历史消失
      this.historyShow = false
    },
    showHistory () {
      this.$emit('showHistory')
    }
  },
  components: {
  },
}
</script>
<style scoped>
.top{
  top:0;
  background: #fff;
  height:30px;
  padding: 8px 15px 8px 10px;
  border-bottom:1px solid #dcdcdc;
  box-shadow: 0 1px 2px 0 #dcdcdc;
}
.cancel{
  position: absolute;
  right: 0;
  top: 0;
  line-height: 46px;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #1A1F25;
  padding-right: 15px;
  text-align: right;
}
.city{
  position: absolute;
  width: 85px;
  color: #505050;
  line-height: 26px;
  text-align: center;
  left:15px;
  top:10px;
  z-index: 10;
}
.search{
  width: 307px;
  position: relative;
}
.search input,.search a{
  width:305px;
  height:28px;
  display:inline-block;
  font-size:13px;
  color:#333;
  line-height:28px;
  background: #FFFFFF;
  border: 1px solid #E8E8E8;
  border-radius: 40px;
  padding-left:30px;
}
.search a{
  width:275px;
}
.bq-icon-goods-search{
  position: absolute;
  top: 8px;
  left: 15px;
}
.bq-icon-goods-clear{
  position: absolute;
  top: 7px;
  right: 10px;
}
.bq-icon-goods-clear:after{
  content: "";
  width: 26px;
  height: 26px;
  position: absolute;
  top:-6px;
  right: -10px;
  z-index: 10;
}
</style>
