<template>
<div>
    <bq-header title="门店"></bq-header>
    <div class="store_box main_box">
        <div class="search_wrap">
            <div class="search_box">
                <input class="input_box" placeholder="请输入门店名称" :class="{'active':inputFlag}" v-on:focus="inputFlag = true" v-on:blur="inputFlag = false"/>
            </div>
        </div>
        <div class="filter_box">
            <ul>
                <li><span>未合作</span></li>
                <li><span>7天未访</span></li>
                <li><span>15天未访</span></li>
                <li><span>30天未访</span></li>
                <li><span>合作率<i class="up_icon"></i></span></li>
            </ul>
        </div>
        <div class="store_list" ref="wrapper">
            <div class="content">
                <ul>
                    <li v-for="(item,index) in list">
                        <div class="list_top_box">
                            <div class="store_localtion">
                                <i class="location_icon" @click="goSearch()"></i>120m
                            </div>
                            <h2 @click="goDetail()">{{item.id}}</h2>
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
                            <div class="sote_line"></div>
                            <div  class="visit_btn store_btn disabled" @click="goVisit()">拜访</div>
                        </div>
                    </li>
                </ul>
                <div class="bq-f-loading" v-show="loadingFlag && !refreshFlag">
                    <triple-bounce></triple-bounce>
                </div>
                <p class="no-goods" v-show="refreshFlag">已加载全部</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue';
    import tripleBounce from '../../components/triple.bounce.vue'
    import BScroll from 'better-scroll';
    import {storelist} from './server.js';
    export default {
        components:{
           bqHeader,
           tripleBounce
        },
        data() {
            return{
                list: [],
                inputFlag:false,
                loadingFlag:false,
                pullupMsg: '加载更多',
                refreshFlag:false,
                storeList:[],
                page:0,
                tabIndex:1
            }
        },
        created(){
            this.getData(true);
            const that = this;
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.wrapper,{       //初始化better-scroll
                    probeType:3,   //1 滚动的时候会派发scroll事件，会截流。2滚动的时候实时派发scroll事件，不会截流。 3除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
                    click: true   //是否派发click事件
                })
                this.scroll.on('scroll',(pos)=>{
                    if(pos.y<(this.scroll.maxScrollY - 30)){
                        this.loadingFlag = true
                    }
                });
                //滑动结束松开事件
                this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
                    if(this.refreshFlag) return;
                    if(pos.y<(this.scroll.maxScrollY - 30)){   //下拉加载
                        setTimeout(()=>{
                            that.getData(false)
                        },100) 
                    }
                })      
            })
        },
        methods:{
            goDetail(){
                this.$router.push('/store/detail')
            },
            goSearch(){
                this.$router.push('/store/searchmore')
            },
            goVisit(){
                this.$router.push('/store/visit')
            },
            sign(){
                this.$messagebox.alert('请输入描述', '签到失败')
            },
            async getData(init){
                let params = {
                    page:this.page,
                    pageList:4,
                    type:this.tabIndex
                }
                let res = await storelist(params)
                if(res.code === 0){
                    if(this.page === 0){
                        this.$store.commit('UPDATE_LOADING', { isLoading: false, isLoadingTop: 44 })
                    }
                    if(res.data.length < 4 && this.page > 0){
                        this.refreshFlag = true
                    }
                    this.list = this.list.concat(res.data);
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
.no-goods {
    color: #666;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.bq-f-loading {
    width: 100%;
    text-align: center;
}
.bq-f-loading .mint-spinner-fading-circle {
    margin: 0 auto;
}
.store_list{
    position:absolute;
    overflow: hidden;
    top:130px;
    width: 100%;
    height:calc(100% - 130px);
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
.location_icon_green{
    width:8px;
    height:10px;
    display: inline-block;
    background:url('../../images/dw.png') no-repeat;
    background-size: 8px 10px;
    margin-right:5px;
}
.inlineBlock{
    display:inline-block;
}
.store_localtion{
    font-size: 13px;
    color: #B3B3B3;
    position: absolute;
    right:10px;
    top:10px
}
.list_top_left{
    width:293px;
}
.right_icon_box{
    width:50px;
    font-size:0;
    vertical-align: 12px;
}
.content_wrap{
    width:100%;
    background:#fff;
    position:absolute;
    top:40px;
    left:0;
    z-index:999;
    display:none;
}
.list_top_box span{
    display:inline-block;
    vertical-align:middle;
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
.list-bottom_box{
    font-size:0;
}
.list-bottom_box.no_padding{
    padding:0;
}
.sote_line{
    height:20px;
    width:1px;
    background:#E1E1E1;
    left:50%;
    top:8px;
    position:absolute;
}
.filter_box ul{
    overflow:hidden;
}
.filter_box li{
    float:left;
    width:75px;
    text-align:center;
}
.filter_box li span{
    width:65px;
    height:23px;
    cursor:pointer;
    line-height:23px;
    text-align:center;
    display:inline-block;
    border-radius:23px;
    background: #E6E6E6;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #1A1F25;
}
.filter_box li.active span{
    background: #FFFFFF;
    color: #FF6214;
}
</style>
