<template>
<div>
    <bq-header title="新增经纪人"></bq-header>
    <div class="add_box">
        <div class="tab_box add_tab">
            <ul>
                <li :class="{'active':agentFlag === 1}" @click="changeAgent(1)">门店经纪人</li>
                <li :class="{'active':agentFlag === 2}" @click="changeAgent(2)">独立经纪人</li>
                <li class="move"></li>
            </ul>
        </div>
        <div class="add_list">
            <ul>
                <li>
                    <span class="font_star f14">*</span>
                    <span>电话</span>
                    <input type="text" class="add_input" placeholder="请输入手机号"/>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>姓名</span>
                    <input type="text" class="add_input" placeholder="请输入姓名"/>
                </li>
                <li class="independ_box">
                    <span class="font_star f14">*</span>
                    <span>公司</span>
                    <input type="text" class="add_input" placeholder="请选择公司"/>
                    <i class="icon_right"></i>
                </li>
                <li class="independ_box">
                    <span class="font_star f14">*</span>
                    <span>门店</span>
                    <input type="text" class="add_input" placeholder="请选择门店"/>
                    <i class="icon_right"></i>
                </li>
                <li class="special">
                    <span>区域商圈</span>
                    <input type="text" class="add_input" placeholder="商圈固定自动默认"/>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>主营业务</span>
                    <div class="fr">
                        <span class="add_check mr10"><i class="check_box"></i>58住宅</span>
                        <span class="add_check active"><i class="check_box"></i>商业地产</span>
                    </div>
                </li>
                <li>
                    <span class="font_star f14">*</span>
                    <span>备注</span>
                    <input type="text" class="add_input" placeholder="请输入备注信息（如QQ.邮箱）"/>
                    <i class="icon_right"></i>
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
                agentFlag:1
            }
        },
        mounted(){
    
        },
        methods:{
            changeAgent(index){
                this.agentFlag = index
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
</style>
