<template>
<div>
    <bq-header title="经纪人详情"></bq-header>
    <div class="detail_box">
        <div class="detail_wrap">
            <div class="detail_person">
                <div class="detail_photo">
                    <div class="detail_img" @click="goPhoto()">
                        <img src="../../images/yhhx.png"/>
                    </div>
                    <div class="photo_btn mt10">用户画像</div>
                </div>
                <div class="person_info">
                    <p><span class="font-special">邢红丽</span><span class="detail_tag">合作中</span></p>
                    <p class="font_red f14">15837474637</p>
                </div>
                <div class="list_top_left mt45">
                    <h2 class="font_black f14">我爱我家望京东湖店</h2>
                    <div class="f12"><i class="location_icon"></i><span class="store_address">北京市朝阳区里军礼路上就会觉得还是繁花.北京市朝阳区里军礼路上就会觉得还是繁花.</span></div>
                </div>
            </div>
        </div>
        <div class="detail_list mb10">
            <div class="detail_title">端口情况</div>
            <ul>
                <li>
                    <div class="port_left_box">
                        <p class="font-special f16">租房／合租房</p>
                        <p class="font_grey f12">2017.10.12－2018.10.11</p>
                    </div>
                    <div class="port_right_box">
                        <i class="time_icon"></i><span>剩余30天</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="detail_list list_money">
            <div class="detail_title">账户余额</div>
            <ul>
                <li>
                    <div class="money_item font_black1 f16">
                        yiwen123
                    </div>
                    <div class="money_item f13">
                        <p>￥<span class="font_red">80</span><em></em></p>
                        <p>惠<span class="font_red">20</span><em></em></p>
                        <p>共<span class="font_red">20</span></p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="btn_box">
            <div class="fl btn_left">
                <div class="fl manege_btn">
                    <em class="manage_icon"></em>
                    <p class="txt_center">账号管理</p>
                </div>
                <div class="fl edit_btn_bot">
                    <em class="edit_btn_icon"></em>
                    <p class="txt_center">编辑</p>
                </div>
            </div>
            <div class="common_btn btn_grey fl" @click="goFollow(2)">历史跟进</div>
            <div class="common_btn btn_red fl" @click="goFollow(1)">跟进</div>
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
            },
            goFollow(id){
                // this.$router.push('/follow/'+id)
                this.$router.push({
                name: 'follow',
                params: {
                    type:id
                }
            })
            },
            goPhoto(){
                this.$router.push('/photo')
            }
        }
    };
</script>
<style scoped>
.detail_wrap{
    padding:10px 16px;  
}
.detail_person{
    height:141px;
    border-radius: 5px;
    background:#fff;
    padding:10px 20px 14px;
    position: relative;
}
.detail_tag{
    min-width:26px;
    height:14px;
    line-height:14px;
    font-size: 10px;
    color: #59ABFD;
    text-align:center;
    background:#E6F2FF;
    padding:0 10px;
    margin-left:3px;
}
.detail_photo{
    width:62px;
    position: absolute;
    top:10px;
    right:20px;
}
.detail_img{
    width:60px;
    height:45px;
    border-radius:50%;
    text-align:center;
    overflow:hidden;
}
.detail_img img{
    width:45px;
    height:45px;
}
</style>
