<template>
<div>
    <bq-header title="跟进"></bq-header>
    <div class="follow_box">
        <div class="tab_box add_tab">
            <ul>
                <li :class="{'active':followFlag === 1}" @click="changeFollow(1)">拜访</li>
                <li :class="{'active':followFlag === 2}" @click="changeFollow(2)">历史拜访</li>
                <li class="move"></li>
            </ul>
        </div>
        <div class="follow_list add_list mt10" v-if="followFlag == 1">
            <ul>
                <li>
                    <span class="font_star f14">*</span>
                    <span>见面经纪人</span>
                    <div class="fr">
                        <span>已选</span>
                    </div>
                </li>
                <li>
                    <span class="fl agent_name">小米粒</span>
                    <div class="fr agent_radio">
                        <i class="radio_box"></i>
                    </div>
                </li>
                <li class="follow_area">
                    <div>
                        <span class="font_star f14">*</span>
                        <span>跟踪记录</span>
                        <div class="record_box fr mt5">
                            <span class="active">活动拜访</span>
                            <span>培训</span>
                            <span>解决问题</span>
                            <span>收单</span>
                        </div>
                    </div>
                    <div class="area_box">
                        <textarea name="" id="" class="text_area" placeholder="请输入跟进内容"></textarea>
                        <span class="area_num"><em>0</em>/200</span>
                    </div>
                </li>
            </ul>
            <div class="submit_btn">提交</div>
        </div>
        <div class="follow_list history_list" v-if="followFlag == 2">
            <ul>
                <li>
                    <div class="history_time">2017-09-11  19:47:42</div>
                    <div class="history_item">
                        <div class="history_tag">
                            <span>电话</span>
                            <span>高意向</span>
                            <span>下次预约</span>
                            <span class="span_time">2018-10-12</span>
                        </div>
                        <div class="history_content">
                            <span class="history_title">销售老王：</span>
                            刘备给钱关羽和张飞买了端口刘备给钱关羽和张飞买了端口刘备给钱关羽和张飞买了端口刘备给钱关羽和张飞买了端口
                        </div>
                    </div>
                </li>
            </ul>
        </div>
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
                followFlag:1
            }
        },
        mounted(){
    
        },
        methods:{
            changeFollow(index){
                this.followFlag = index
            }
        }
    };
</script>
<style scoped>
.tab_box {
    width: 100%;
    height:40px;
    background:#fff;
    position: relative;
}
.tab_box ul li{
    width:50%;
    float:left;
    cursor:pointer;
    line-height:40px;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1F25;
    text-align: center;
    position:relative;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
}
.tab_box ul li.active{
    color: #FF6214;
}
.tab_box li.move{
    width:30px;
    border-bottom: 2px solid #FF6214;
    position: absolute;
    left:98px;
    bottom:0;
    transition: left .2s ease-in-out 0s;
}
li:nth-child(2).active~ .move{
    left: 285px;
}
.add_list li{
    height:56px;
    line-height:56px;
    background: #FFFFFF;
    border-bottom: 1px solid #EEEEEE;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #8A8A8A;
    padding:0 15px 0 10px;
}
.add_list li.process{
    height:82px;
}
.add_list li.follow_area{
    height:185px;
}
.follow_type{
    width:165px;
    height:100%;
    line-height:56px;
    font-size:0;
}
.follow_process{
    line-height:41px;
}
.process_label{
    height:82px;
    line-height:82px;
    display:inline-block;
}
.add_input{
    width:250px;
    float:right;
    display:inline-block;
    border:1px solid #fff;
    text-align:right;
    margin-top:16px;
    font-size: 16px;
    color: #8A8A8A;
}
.record_box{
    font-size:0;
}
.record_box span{
    padding:0 7px;
    height:23px;
    line-height:23px;
    background: #F0F0F0;
    border-radius: 23px;
    display:inline-block;
    font-size: 13px;
    color: #1A1F25;
    margin:0 5px;
}
.record_box span.active{
    background: #FF6214;
    color:#fff;
}
.area_box{
    width:242px;
    height:108px;
    margin-left:105px;
    position: relative;
}
.text_area{
    width:230px;
    height:96px;
    padding:5px;
    font-size:14px;
    background: #FFFFFF;
    border:1px solid #B3B3B3;
    border-radius: 2px;
}
.area_num{
    font-size: 12px;
    color: #5A5A5A;
    position: absolute;
    right:5px;
    bottom:0;
    line-height:16px;
    background:#fff;
    z-index:333;
}
.history_time{
    height:30px;
    line-height:30px;
    text-align:center;
}
.history_content{
    padding:10px 14px;
    background:#fff;
    color:#1A1F25;
}
.history_tag{
    height:22px;
    line-height:22px;
    background:#fff;
    border:1px solid #EEEEEE;
    padding:8px 14px;
}
.history_list li{
    margin-top:10px;
}
.history_title{
    color: #6A6A6A;
}
.history_tag span{
    padding:0 12px 0 8px;
    display:inline-block;
    height:20px;
    line-height:20px;
    color:#fff;
    font-size:13px;
    font-style:italic;
    background:url('../../images/lsgj1.png') no-repeat;
    background-size:100% 100%;
}
.history_tag span.span_time{
    margin-left:-13px;
    background:url('../../images/lsgj.png') no-repeat;
    background-size:100% 100%;
}
.add_tab{
    padding:0 20px;
}
.agent_name{
  margin-left:10px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #1A1F25;
}
.agent_radio{
  height:56px;
  text-align: right;
}
</style>
