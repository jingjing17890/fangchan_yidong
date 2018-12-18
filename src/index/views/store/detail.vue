<template>
<div>
    <bq-header title="门店详情"></bq-header>
    <div class="agent_box">
        <div class="store_detail">
            <div class="detail_info">
                <p class="f16 font_black1">我爱我家望京东湖店我爱我家望京我爱我家望京东湖店我爱我家望京东湖店我爱我家望京我爱我家望京东湖店</p>
            </div>
            <div class="tag_box position_tag">区域区域</div>
            <div class="store_localtion mt5">
                <i class="location_icon_green"></i>120m
            </div>
            <div class="list_top_left">
                <div class="f12"><i class="company_icon"></i><span class="store_address"><span>公司：</span><span>北京市朝阳区里军礼路上就会觉得还是繁花.北京市朝阳区里军礼路上就会觉得还是繁花.</span></span></div>
                <div class="f12"><i class="location_icon"></i><span class="store_address"><span>地址：</span><span>北京市朝阳区里军礼路上就会觉得还是繁花.北京市朝阳区里军礼路上就会觉得还是繁花.</span></span></div>
            </div>
        </div>
        <div class="store_detail_list">
            <div class="store_title">
                经纪人
                <div class="store_num fr">
                    <p class="fl">
                        <span>门店共:</span>
                        <span>
                            <span class="store_person_num font_black">9</span>
                            人
                        </span>
                        <em></em>
                    </p>
                    <p class="fl">
                        <span>合作中:</span>
                        <span>
                            <span class="store_person_num font_black">9</span>
                            人
                        </span>
                        <em></em>
                    </p>
                    <p class="fl">
                        <span>7天内到期:</span>
                        <span>
                            <span class="store_person_num font_black">9</span>
                            人
                        </span>
                    </p>
                </div>
            </div>
            <ul class="detail_list">
                <li>
                    <div class="detail_left fl">
                        <h2>张伟</h2>
                    </div>
                    <div class="detail_icon_box fr">
                        <i class="edit_icon"></i>
                        <i class="iphone_icon"></i>
                    </div>
                    <div class="detail_center">
                        <div class="list-bottom_box">
                            <p>账户余额：</p>
                            <p>￥<span class="font_black">80</span><em></em></p>
                            <p>惠<span class="font_black">20</span><em></em></p>
                            <p>共<span class="font_black">20</span></p>
                        </div>
                        <div>
                            <span class="ml15">到期时间:</span>
                            <span>
                                >
                                <span class="store_person_num font_black">9</span>
                                天
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="mt10 visit_box">
            <div class="visit_title">
                <span>拜访记录</span>
                <i class="right_icon fr"></i>
            </div>
            <ul class="visit_record">
                <li>
                    <span>跟进类型：</span>
                    <span>活动拜访</span>
                </li>
                <li>
                    <span>跟进经纪人：</span>
                    <span>活动拜访</span>
                </li>
                <li>
                    <span>跟进结果：</span>
                    <span>活动拜访</span>
                </li>
                <li>
                    <span>跟进时间：</span>
                    <span>活动拜访</span>
                </li>
            </ul>
        </div>
    </div>
    <footer class="bq-footer">
        <div class="footer_left fl">
            <div class="footer_item">
                <p><mt-switch v-model="value"></mt-switch></p>
                <p>关闭</p>
            </div>
            <div class="footer_item">
                <p><i class="bq-icon-edit"></i></p>
                <p>编辑</p>
            </div>
        </div>
        <div class="footer_btn_box fr">
            <div class="common_btn sign_btn">签到</div>
            <div class="common_btn visit_btn">拜访</div>
        </div>
    </footer>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue'
    import Vue from 'vue';
    import { Switch } from 'mint-ui';
    Vue.component(Switch.name, Switch);
    export default {
        components:{
           bqHeader
        },
        data() {
            return{
                followFlag:1,
                value:''
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
.store_detail{
    padding:0;
    height:118px;
    padding:14px;
    position:relative;
    background:#fff;
}
.detail_info{
    width:235px;
    height:65px;
    line-height:22px;
    margin-bottom:14px;
    overflow:hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient: vertical;
}
.store_localtion{
    font-size: 13px;
    color: #B3B3B3;
    position: absolute;
    right:10px;
    top:10px
}
.store_detail_list{
    background:#fff;
    margin-top:10px;
}
.store_title{
    height:42px;
    line-height:42px;
    padding:0 15px 0 18px;
    border-bottom:1px solid #EEEEEE;
}
.store_num{
    font-size: 0;
}
.store_num span{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #888888;
}
.store_num em{
    width:1px;
    height:10px;
    display:inline-block;
    background:#E1E1E1;
    vertical-align:-1px;
    margin-right:3px;
}
.store_detail_list li{
    height:70px;
    padding:0 15px;
}
.detail_left{
    width:54px;
    font-size: 16px;
    color: #1A1F25;
    text-align: center;
    margin-top:18px;
}
.detail_icon_box{
    width: 80px;
    font-size:0;
    margin-top:15px;
}
.list-bottom_box{
    padding:16px 15px 0;
}
.list-bottom_box p{
    display:inline-block;
    font-size: 13px;
    color: #888888;
}
.detail_icon_box .edit_icon{
    margin-right:10px;
}
.detail_center{
    margin-left:55px;
    margin-right:80px;
}
.visit_box{
    background:#fff;
}
.visit_title{
    height:40px;
    line-height:40px;
    padding:0 18px 0 0;
    margin-left:18px;
    background:#fff;
    border-bottom:1px solid #EEEEEE;
}
.visit_title i{
    margin-top:14px;
}
.visit_record li{
    font-size:0;
    height:40px;
    line-height:40px;
    padding:0 18px 0 0;
    margin-left:18px;
    border-bottom:1px solid #EEEEEE;
}
.visit_record li:last-child{
    border-bottom:none;
}
.visit_record li span{
    display:inline-block;
    font-size: 14px;
    color: #6A6A6A;
    height:100%;
}
.visit_record li span:first-child{
    width:90px;
}
.bq-footer{
    width: 100%;
    position: fixed;
    bottom:0;
    left:0;
    height:50px;
    font-size:0;
}
.common_btn{
    width:116px;
    height:50px;
    display:inline-block;
    line-height:50px;
    text-align:center;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
}
.footer_left{
    width:143px;
    padding-top: 4px;
    background: #FFFFFF;
    margin-right:-232px;
    height:50px;
    display:inline-block;
}
.footer_btn_box{
    width:232px;
}
.visit_btn{
    background: #FF7C3B;
}
.sign_btn{
    background: #494949;
}
.footer_item{
    width: 50%;
    height:50px;
    display:inline-block;
    vertical-align: top;
}
.footer_item p{
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #888888;
    text-align:center;
}
.footer_item p:first-child label{
    margin-bottom:3px;
    margin-left:4px;
}
</style>
