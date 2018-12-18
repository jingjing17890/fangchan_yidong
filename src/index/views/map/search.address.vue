<template>
<div>
  <search v-on:goSearch="goSearch" v-on:showHistory = "showHistory"></search>
  <bq-content>
    <div class="result">
      <ul class="map_search_content">
        <li :key="index" v-for="(item,index) in list" @click="selectArea(item)">
          <h3 class="f16 font_black">{{ item.name }}</h3>
          <h4>{{ item.address || item.city}}</h4>
        </li>
      </ul>
    </div>
    <div class="result history" v-if="historyShow && historyList.length > 0">
      <div class="history_title">搜索历史</div>
      <ul>
        <li v-for="item in historyList" @click="selectArea(item)">
          <h3 class="font_black1">{{ item.name }}</h3>
          <h4>{{ item.address || item.city}}</h4>
        </li>
      </ul>
      <a @click="clearHistory()" class="clear_his">清除搜索历史</a>
    </div>
    <div class="empty" v-if="empty && list.length < 1">
      <div class="img">
      </div>
      <p>暂无相关地址～</p>
    </div>
  </bq-content>
</div>
</template>
<script>
import MapService from '../../services/map.service'
import search from './search'
import { getCurrentPosition } from './position'
export default {
  data: function () {
    return {
      list: [],
      historyList: [],
      historyShow: false,
      empty: false,
      cityName: '北京'
    }
  },
  mounted () {
    this.mapService = new MapService()
  },
  created() {
          console.log(this.$local.get('searchHistory'))
  },
  methods: {
    goSearch (inputTest, type) {
      // type== 1时 是输入检索 不纪录 历史
      let self = this
      if (!inputTest) {
        return
      }
      let params = {
        query: inputTest,
        region: this.cityName || '全国'
      }
      // 如果城市是全国 则打开限制城市检索
      if (params.region === '全国') {
        self.mapService.getAddress(params).then(res => {
          let list = res.status === 0 ? res.result : []
          let _list = []
          list.forEach(item => {
            if (item.location && item.uid) {
              _list.push(item)
            }
          })
          this.list = _list
          this.empty = true
          this.historyShow = false
        })
      } else {
        self.mapService.placeSearch(params).then(res => {
          self.list = res.status === 0 ? res.results : []
          this.empty = true
          this.historyShow = false
        })
      }
    },
    selectArea (item) {
      this.saveHistory(item)
    },
    showHistory () { // input框 获取焦点 显示搜索历史
      this.historyList = this.$local.get('searchHistory') ? this.$local.get('searchHistory') : []
      if (this.historyList.length > 0) {
        this.historyShow = true
      }
    },
    saveHistory (item) {
      let _list = this.$local.get('searchHistory') ? this.$local.get('searchHistory') : []
      let _index = this.$bqUtils.containsArrObj(_list, item, 'uid')
      if (this.$bqUtils.isInteger(_index)) { // 说明此值在数组已存在 先删除 再插入 为了把此值放到第一位
        _list.splice(_index, 1)
        _list.unshift(item)
      } else { // 不存在 直接插入
        _list.unshift(item)
      }
      // 历史纪录最多10条
      if (_list.length >= 10) {
        _list.splice(10, _list.length - 10)
      }
      this.$local.set('searchHistory', _list)
    },
    clearHistory () {
      this.historyList = []
    },
    selectHistory (item) {
      this.goSearch(item)
    }
  },
  components: {
    'search': search
  }
}
</script>
<style scoped>
.history_title{
  /* width: 100%; */
  height:30px;
  line-height:30px;
  padding-left:20px;
  background: #fff;
  border-bottom:1px solid #eee;
}
.map_search_content li{
  background:#fff;
  padding:5px 10px;
  position: relative;
  border-bottom:1px solid #eee;
}
.history li{
  padding:10px 0 10px 20px;
  background: #fff;
  border-bottom:1px solid #EEEEEE;
}
.clear_his{
  width:100%;
  margin:10px 0;
  text-align: center;
  line-height:20px;
  color: #ff7f54;
}
.result{
  width: 100%;
  position: absolute;
  /* background: #fff; */
  height:calc(100% - 48px);
  padding-bottom: 30px;
}
</style>