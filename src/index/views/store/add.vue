<template>
<div>
    <bq-header title="新增门店"></bq-header>
    <div class="add_box">
        <div class="add_list store_add_list">
            <ul>
                <li class="store_name">
                    <span class="font_star f14">*</span>
                    <span>所属公司</span>
                    <input type="text" class="add_input" placeholder="请输入所属公司"/>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>门店名称</span>
                    <input type="text" class="add_input" placeholder="请输入门店名称"/>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>门店类型</span>
                    <div class="fr store_type">
                        <span class="add_radio fl"><i class="radio_box"></i>直营</span>
                        <span class="add_radio fl active"><i class="radio_box"></i>加盟</span>
                    </div>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>门店区域</span>
                    <input type="text" class="add_input" placeholder="请选择门店区域"/>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>门店地址</span>
                    <div class="fr">
                        <i class="address_icon fr mt10"></i>
                        <input type="text" class="add_input store_address fl" placeholder="请输入门店地址"/>
                    </div>
                </li>
                <li class="card">
                    <span class="font_star f14">*</span>
                    <span>门店名片</span>
                    <input type="text" class="add_input" placeholder="请上传门店名片"/>
                </li>
            </ul>
        </div>
        <div class="submit_btn">提交</div>
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
.tab_box {
    width: 100%;
    height:40px;
    background:#fff;
    position: relative;
    margin-bottom:10px;
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
    left:78px;
    bottom:0;
    transition: left .2s ease-in-out 0s;
}
li:nth-child(2).active~ .move{
    left: 265px;
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
.store_add_list li.card{
    height:186px;
}
.store_address{
    width:220px;
    padding-right:5px;
    border-right:1px solid #979797;
}
</style>
