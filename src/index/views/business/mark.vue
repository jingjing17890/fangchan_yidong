<template>
<div>
    <bq-header title="门店"></bq-header>
    <div class="map">
        <div class="baidu-map" id="baiduMap"></div>
    </div>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue';
    import BScroll from 'better-scroll';
    export default {
        components:{
           bqHeader
        },
        data() {
            return{
                map:{},
                i:0,
                points:[],
                arrPoints:[],
                numbers:[2,5,7,4,6]
            }
        },
        mounted(){
            this.init()
        },
        methods:{
            init(){
                this.map = new BMap.Map("baiduMap")
                this.map.centerAndZoom(new BMap.Point(113.953162, 22.532701), 16); // 初始化地图,设置中心点坐标和地图级别
                this.map.setCurrentCity("高新园"); // 设置地图中心显示的城市 new！
                this.map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                this.map.addControl(new BMap.NavigationControl()); //缩放按钮
                //获取到的坐标点
                this.arrPoints = [
                    new BMap.Point(113.960623, 22.546082), new BMap.Point(113.958197, 22.544029),
                    new BMap.Point(113.956526, 22.543245), new BMap.Point(113.953562, 22.544563),
                    new BMap.Point(113.954263, 22.546749)
                ];
                this.dynamicLine()
            },
            //画折线
            // driveline(points) {
            //     map.addOverlay(new BMap.Polyline(points, {
            //         strokeColor: "black",
            //         strokeWeight: 5,
            //         strokeOpacity: 1
            //     }));
            // },
            // //根据点信息实时更新地图显示范围，让轨迹完整显示。设置新的中心点和显示级别
            // setZoom(bPoints) {
            //     let view = map.getViewport(eval(bPoints));
            //     // var mapZoom = view.zoom;
            //     let centerPoint = view.center;
            //     map.centerAndZoom(centerPoint, 16);
            // },
            dynamicLine() {
                if (this.i == this.arrPoints.length) return;
                let mkr = new BMap.Marker(this.arrPoints[this.i]);
                this.map.addOverlay(mkr); //标点  
                let label = new BMap.Label('累计' + this.numbers[this.i] + '次', {
                    offset: new BMap.Size(20, -10)
                });
                mkr.setLabel(label);
                this.points.push(this.arrPoints[this.i]);
                let view = this.map.getViewport(eval(this.points));
                // var mapZoom = view.zoom;
                let centerPoint = view.center;
                this.map.centerAndZoom(centerPoint, 16);
                this.map.addOverlay(new BMap.Polyline(this.points, {
                    strokeColor: "red",
                    strokeWeight: 2,
                    strokeOpacity: 1
                }));
                // this.driveline(this.points);
                this.i++;
                setTimeout(this.dynamicLine, 1000);
            }
        }
    };
</script>
<style scoped>
.map{
    height: calc(100% - 44px);
}
</style>
