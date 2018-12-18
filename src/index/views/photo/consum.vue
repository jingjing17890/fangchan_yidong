<template>
<div>
    <bq-header title="消耗行为"></bq-header>
    <div class="mutual_box">
        <div class="photo_title white">
            <span class="photo_account">禁发警告</span>
            <span class="fr">近一周</span>
        </div>
        <ul class="mb10">
            <li>
                <h3>1</h3>
                <h4>历史禁发次数</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>违规情况－普通警告</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>禁发开始时间</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>违规情况－中等警告</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>禁发结束时间</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>违规情况－严重警告</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>禁发后是否通过考试</h4>
            </li>
            <li>
                <h3>1</h3>
                <h4>电话量</h4>
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

        }
    };
</script>
<style scoped>
.photo_title.white{
  background: #fff;
  margin-top: 0;
  padding-top: 12px;
}
.mutual_box{
  width:100%;
  position: absolute;
  top:44px;
}
.mutual_box ul{
  overflow:hidden;
  background:#fff;
}
.mutual_box ul li{
  height:58px;
  float:left;
  padding:10px 0 0 20px;
  width:calc(50% - 21px);
  border-top:1px solid #eee;
  border-right:1px solid #eee;
}
.mutual_box ul li h3{
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #1A1F25;
  margin-bottom:5px;
}
.mutual_box ul li h4{
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: #888888;
}
</style>
