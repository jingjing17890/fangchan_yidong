<template>
<div>
    <bq-header title="门店"></bq-header>
    <div class="photo_box" ref="wrapper">
        <div class="content">
            <div class="photo_list_wrap">
                <div class="photo_list" :key="index" v-for="(item,index) in list">
                    <div class="photo_title">
                        <span class="photo_account">账号</span>
                        <span>zhanghaoxinxi</span>
                    </div>
                    <ul>
                        <li>
                            <span class="fl title">交互行为</span>
                            <div class="fr">
                                <i class="right_icon" @click="goMutual()"></i>
                                <p class="fl">含房源警告，禁发，房源量，房源点击,含房源警告，禁发，房源量，房源点击</p>
                            </div>
                        </li>
                        <li>
                            <span class="fl title">消耗行为</span>
                            <div class="fr">
                                <i class="right_icon" @click="goConsum()"></i>
                                <p class="fl">含房源警告，禁发，房源量，房源点击,含房源警告，禁发，房源量，房源点击</p>
                            </div>
                        </li>
                        <li>
                            <span class="fl title">移动经纪人APP交互</span>
                            <a class="fr"><i class="right_icon"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="bq-f-loading" v-show="loadingFlag && !refreshFlag">
                <triple-bounce></triple-bounce>
            </div>
            <p class="no-goods" v-show="refreshFlag">已加载全部</p>
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
            goConsum(){
                this.$router.push('/photo/consum')/*消耗*/
            },
            goMutual(){
                this.$router.push('/photo/mutual')
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
.photo_box{
    height:calc(100% - 44px);
    overflow:hidden;
}
/**用户画像*/
.photo_box{
  position: absolute;
  top:44px;
  width:100%;
}
.photo_title{
  height:32px;
  padding-right:15px;
  line-height:32px;
  margin-top:12px;
}
.photo_account{
  height:16px;
  line-height:16px;
  display:inline-block;
  padding-left:4px;
  border-left:5px solid #F74C31;
}
.photo_box ul{
  width:100%;
  background:#fff;
}
.photo_box ul li{
  height:44px;
  line-height:44px;
  margin-left:15px;
  padding-right:15px;
  border-bottom:1px solid #EEEEEE;
}
.photo_box ul li .title{
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #1A1F25;
}
.photo_box ul li p{
  width:250px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.photo_box ul li i{
  margin-top:17px;
}
</style>
