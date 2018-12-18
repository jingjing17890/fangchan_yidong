<template>
    <div class="map_box">
        <search :source="source"></search>
        <div class="map">
            <div class="baidu-map" id="baiduMap">
            </div>
            <div class="dingwei-dian">
            </div>
            <div class="dingwei-dangqian" @click="positioningCurrent">
            </div>
        </div>
        <bq-content>
        <div class="map_content map_list">
            <ul class="map_location">
                <li v-for="(item,index) in list">
                    <div class="store_localtion">
                        <i class="location_icon_green"></i>
                        {{item.distance}}
                    </div>
                    <h3>
                        <span>{{item.name}}</span>
                    </h3>
                    <h4>{{item.addr}}</h4>
                </li>
            </ul>
        </div>
        </bq-content>
    </div>
</template>

<script>
    import MapService from '../../services/map.service'
    import search from './search'
    import { getStoreByLatLng, getCurrentPosition } from './position'
    export default {
        components:{
            search
        },
        data() {
            return{
                list: [],
                location: {},
                source: 'searchMore',
                msg: '定位中...'
            }
        },
        mounted(){
            this.mapService = new MapService();
            this.init();
        },
        methods:{
            init () {
                // await this.getCityName()
                this.positioningCurrent()
            },
            getBaiduMap (lng, lat, city) {
                let self = this
                let map = new BMap.Map('baiduMap')
                if (lng && lat) {
                    map.centerAndZoom(new BMap.Point(lng, lat), 16)
                    self.getLocationList(lng, lat)
                // this.getCityName({lng: lng, lat: lat})
                } else {
                    map.centerAndZoom(city, 16)
                }
                var point = new BMap.Point(lng, lat)
                var icon = new BMap.Icon('https://o93qmsoro.qnssl.com/dingweidangqian.png', new BMap.Size(0, 0))
                var marker = new BMap.Marker(point, {icon: icon})
                map.addEventListener('dragend', function (e) {
                    self.getLocationList(e.point.lng, e.point.lat)
                })
                map.addOverlay(marker)
            },
            getLocationList (lng, lat) {
                let self = this
                let location = lat + ',' + lng
                self.mapService.getLocationName({location: location, pois: 1}).then(res => {
                    self.list = res.status === 0 ? res.result.pois : []
                    if (self.list.length < 1) {
                    self.msg = '暂无相关地址～'
                    }
                })
            },
            positioningCurrent () {
                getCurrentPosition((_location) => {
                    this.getBaiduMap(_location.lng, _location.lat)
                }, (res) => {
                    this.$toast('定位失败', '')
                })
            }
        }
    };
</script>
<style scoped>
.bq-content{
    top:306px;
}
.map{
  width: 100%;
  height: 260px;
  position: absolute;
  top: 44px;
}
.dingwei-dian{
  position: absolute;
  width: 34px;
  height: 41px;
  background: url('../../images/dingweidian.png') no-repeat;
  background-size: 34px;
  top: 50%;
  left: 50%;
  margin-top: -20px;
  margin-left: -17px;
  z-index:55;
}
.dingwei-dangqian{
  position: absolute;
  width: 56px;
  height: 56px;
  background: url('../../images/dingweidangqian.png') no-repeat;
  background-size: 56px;
  left: 5px;
  bottom: 20px;
  z-index:55;
}
/** 地图页面样式 */
.map_content {
  width:100%;
  height:calc(100% - 260px);
  position: absolute;
  /* top:260px; */
  /* overflow-y:scroll; */
  /* overflow:hidden; */
  display: block;
}
.map_search_content{
  width:100%;
  height:calc(100% - 44px);
  position: absolute;
  top:45px;
  overflow-y:scroll;
  display: block;
}
.map_content li,.map_search_content li{
  background:#fff;
  padding:5px 10px;
  position: relative;
  border-bottom:1px solid #eee;
}
.map_content li h3 span{
  font-size: 16px;
  color: #1A1F25
}
.map_content li h3 span.location_cur{
  width: 32px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  display: inline-block;
  background-color: #FDE37A;
  color: #333333;
  font-size:10px;/*no*/
  font-weight: normal;
  border-radius: 2px;
  margin-left:5px;
  border:1px solid #aaa;
}
.map_content li h4{
  font-size:13px;
}
.map_content .store_localtion{
  position: absolute;
  right:10px;
  top:5px;
}
</style>
