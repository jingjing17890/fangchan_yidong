<template>
<div>
    <bq-header title="经纪人"></bq-header>
    <div class="agent_box main_box">
        <div class="search_wrap">
            <div class="search_box">
                <input class="input_box" placeholder="请输入经纪人姓名或手机号码"  :class="{'active':inputFlag}" v-on:focus="inputFlag = true" v-on:blur="inputFlag = false"/>
            </div>
        </div>
        <div class="filter_box">
            <ul class="agent_tab">
                <li :class="{'active':searchFlag == 1}"><span @click="showMenu(1)">到期时间</span></li>
                <li :class="{'active':searchFlag == 2}"><span @click="showMenu(2)">账户余额</span></li>
                <li :class="{'active':searchFlag == 3}"><span @click="showMenu(3)">区域</span></li>
            </ul>
            <div class="content_wrap" v-if="searchFlag == 1 || searchFlag == 2 || searchFlag == 3">
                <ul class="fiter_content account_time_content" v-if="searchFlag == 1">
                    <li class="active" value="-1"><span>不限</span></li>
                    <li value="7"><span>7天内到期</span></li>
                    <li value="14"><span>14天内到期</span></li>
                    <li value="30"><span>30天内到期</span></li>
                </ul>
                <ul class="fiter_content account_money_content" v-if="searchFlag == 2">
                    <li class="active" value="-1"><span>不限</span></li>
                    <li value="50"><span>50元以下</span></li>
                    <li value="100"><span>50-100元</span></li>
                    <li value="200"><span>100-200元</span></li>
                </ul>
                <ul class="fiter_content district_content" v-if="searchFlag == 3">
                    <!-- <li class="active"><span>不限</span></li>-->
                </ul>
                <div class="confirm_btn">完成</div>
            </div>
        </div>
        <div class="tab_box">
            <ul>
                <li :class="{'active':timeFlag == 1}" @click="changeTimeTab(1)">7天内到期</li>
                <li :class="{'active':timeFlag == 2}" @click="changeTimeTab(2)">过期7天内</li>
                <li :class="{'active':timeFlag == 3}" @click="changeTimeTab(3)">未合作</li>
                <li :class="{'active':timeFlag == 4}" @click="changeTimeTab(4)">预约今日</li>
                <li class="move"></li>
            </ul>
        </div>
        <div class="store_list" ref="wrapper">
            <div class="content">
                <ul>
                    <li v-for="(item,index) in agentList">
                        <div class="list_top_box">
                            <div class="store_localtion">
                                <i class="bq-icon-location" @click="goSearch()"></i>120m
                            </div>
                            <h2 @click="goDetail()">我爱我家东湖店</h2>
                            <div class="f13"><span>公司：</span><span>我爱我家</span></div>
                            <div class="f13"><span>地址：</span><span class="store_address">北京市朝阳区望京东湖底商区望京东湖底北京市朝阳区望京东湖底商区望京东湖底</span></div>
                            <div class="f13 person_info">
                                <p>
                                门店共：<span class="font_black">9</span>人
                                </p>
                                <p>
                                    合作中：<span class="font_black">9</span>人
                                </p>
                                <p>
                                    7天内到期：<span class="font_black">9</span>人
                                </p>
                            </div>
                        </div>
                        <div class="list-bottom_box no_padding" style="position:relative">
                            <div class="sign_btn store_btn" @click="sign()">签到</div>
                            <div class="store_line"></div>
                            <div  class="visit_btn store_btn disabled" @click="goVisit()">拜访</div>
                        </div>
                    </li>
                </ul>
                <div class="bottom-tip">
                    <span class="loading-hook">{{pullupMsg}}</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue'
    import BScroll from 'better-scroll';
    import {storelist} from './server.js'
    export default {
        components:{
           bqHeader
        },
        data() {
            return{
                inputFlag:false,
                agentList:[],
                pullupMsg: '加载更多',
                refreshFlag:false,
                page:0,
                tabIndex:1,
                searchFlag : '',
                timeFlag : ''
            }
        },
        created(){
            this.getData();
            const that = this;
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{       //初始化better-scroll
                    probeType:3,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true   //是否派发click事件
                })
                this.scroll.on('scroll',(pos)=>{
                    if(pos.y > 30){
                        this.pulldownMsg = '释放立即刷新'
                    }
                });
                //滑动结束松开事件
                this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
                    if(this.refreshFlag) return;
                    if(pos.y<(this.scroll.maxScrollY - 30)){   //下拉加载
                        that.pullupMsg = '加载中。。。';
                        setTimeout(()=>{
                            that.getData()
                        },100) 
                    }
                })      
            })
        },
        methods:{
            goDetail(){
                this.$router.push('/agent/detail')
            },
            goVisit(){
                this.$router.push('/store/visit')
            },
            showMenu(index){
                this.searchFlag = index;
            },
            changeTimeTab(index){
                this.timeFlag = index;
            },
            async getData(){
                let params = {
                    page:this.page,
                    pageList:4,
                    type:this.tabIndex
                }
                let res = await storelist(params)
                if(res.code === 0){
                    if(res.data.length < 4 && this.page > 0){
                        this.refreshFlag = true
                    }
                    this.pullupMsg = '加载更多';
                    this.agentList = this.agentList.concat(res.data);
                    setTimeout(()=>{
                        this.scroll.finishPullUp();
                        this.scroll.refresh();
                        if(this.page > 0){
                            this.scroll.scrollTo(0,-300*this.page,1000)
                        }
                        this.page++;
                    },100) 
                }
            }
        }
    };
</script>
<style scoped>
.filter_box{
    background:#fff;
    position:relative;
}
.confirm_btn{
    height:50px;
    line-height: 50px;
    text-align:center;
    border-top:1px solid #EEEEEE;
    font-size: 14px;
    color: #FF6214;
}
.agent_tab{
    padding-left:50px;
}
.agent_tab li{
    line-height: 40px;
    font-size: 14px;
    height: 40px;
    color: #888888;
    display: inline-block;
    width: 105px;
    text-align: left;
}
.agent_tab li span{
    position:absolute;
}
.agent_tab li span:after{
    content:"";
    width:6px;
    height:3px;
    background:url('../../images/jjr03.png') no-repeat;
    background-size:6px 3px;
    position: absolute;
    right:-15px;
    top:19px;
}
.agent_tab li.active span{
    color: #FF6214;
}
.agent_tab li.active span:after{
    background:url('../../images/jjr07.png') no-repeat;
    background-size:6px 3px;
}
.filter_box ul.fiter_content{
    height:180px;
    overflow-y:auto;
}
.filter_box ul.fiter_content li{
    height:45px;
    line-height: 45px;
    font-size: 14px;
    color: #1A1F25;
    padding-left:50px;
}
.content_wrap{
    width:100%;
    background:#fff;
    position:absolute;
    top:41px;
    left:0;
    z-index:999;
}
.input_box{
    left:80px;
}
.filter_tab{
    padding-left:50px;
}
.filter_tab li{
    line-height: 40px;
    font-size: 14px;
    height: 40px;
    color: #888888;
    display: inline-block;
    width: 105px;
    text-align: left;
}
.filter_tab li span{
    position:absolute;
}
.filter_tab li span:after{
    content:"";
    width:6px;
    height:3px;
    background:url('../../images/jjr03.png') no-repeat;
    background-size:6px 3px;
    position: absolute;
    right:-15px;
    top:19px;
}
.filter_tab li.active span{
    color: #FF6214;
}
.filter_tab li.active span:after{
    background:url('../../images/jjr07.png') no-repeat;
    background-size:6px 3px;
}
.filter_box ul.fiter_content{
    height:180px;
    overflow-y:auto;
}
.filter_box ul.fiter_content.active{
    display:block;
}
.tab_box{
    border-top:1px solid #eee;
    position: relative;
}
.tab_box ul{
    height:40px;
    background:#fff;
}
.tab_box ul li{
    width:25%;
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
    left:35px;
    bottom:0;
    transition: left .2s ease-in-out 0s;
}
li:nth-child(1).active~ .move{    /*li元素的父元素的第一个子元素，当鼠标停留其上时，move元素的left属性改变*/
    left: 35px;
}
li:nth-child(2).active~ .move{
    left: 125px;
}
li:nth-child(3).active~ .move{
    left: 218px;
}
li:nth-child(4).active~ .move{
    left: 310px;
}
.store_localtion{
    font-size: 13px;
    color: #B3B3B3;
    position: absolute;
    right:10px;
    top:10px
}
.store_list ul li{
    background:#fff;
    margin:10px 0;
    padding:10px 0 0 0;
    color: #888888;
    position: relative;
}
.list_top_box{
    height:110px;
    border-bottom:1px solid #eee;
    padding:0 16px;
    font-size:0;
}
.list_top_box h2{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #1A1F25;
    margin-bottom:9px;
}
.location_icon{
    width:8px;
    height:10px;
    display: inline-block;
    background:url('../../images/jjr05.png') no-repeat;
    background-size: 8px 10px;
    margin-right:5px;
}
.person_info{
    overflow:hidden;
    margin-bottom:10px;
    margin-top:4px;
}
.person_info p{
    float:left;
    width:33%;
}
.store_line{
    height:20px;
    width:1px;
    background:#000;
    left:50%;
    top:8px;
    margin-left:-1px;
    position:absolute;
}
.store_btn{
    width:calc(50% - 2px);
}
.store_list{
    position:absolute;
    overflow: hidden;
    top:130px;
    width: 100%;
    height:calc(100% - 130px);
}
.list-bottom_box {
    font-size:0;
}
</style>
