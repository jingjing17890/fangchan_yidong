<template>
<div>
    <bq-header title="办公"></bq-header>
    <div class="bussiness_box">
        <ul>
            <li @click="goMark()">
                <i class="icon_map"></i>
                <span>签到轨迹</span>
            </li>
            <li>
                <a @click="goSale()">
                    <i class="icon_receipt"></i>
                    <span>销售行动量</span>
                </a>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue'
    export default {
        components:{
           bqHeader
        },
        data() {
            return{
            
            }
        },
        mounted(){
    
        },
        methods:{
            goSale(){
                this.$router.push('/business/sales')
            },
            goMark(){
                this.$router.push('/business/mark')
            }
        }
    };
</script>
<style>
.bussiness_box{
    background: #fff;
}
.bussiness_box li{
  width:100%;
  height:65px;
  line-height:65px;
  margin-left:18px;
  font-family: PingFangSC-Light;
  font-size: 16px;
  color: #1A1F25;
  border-bottom:1px solid #EEEEEE;
}
.bussiness_box li:first-child{
  padding-left:4px;
}
.bussiness_box li i{
  margin-right:10px;
  vertical-align:-3px;
}
.bussiness_box li i.icon_receipt{
  vertical-align:-9px;
  margin-right:6px;
}
</style>
