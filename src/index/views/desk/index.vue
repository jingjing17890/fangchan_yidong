<template>
<div>
    <bq-header title="工作台"></bq-header>
    <div class="agent_mask" v-if="menuFlag"></div> 
    <div class="add_box add_agen_desk" v-if="menuFlag" @click="addAgent()">
        <i class="add_agent_icon"></i>
        <span class="f12">新增经纪人</span>
    </div>
    <div class="add_box add_store_desk" v-if="menuFlag" @click="addStore()">
        <i class="add_store_icon"></i>
        <span class="f12">新增门店</span>
    </div>
    <div class="desk_add" @click="showMenu()"></div>
    <div class="desk_box main_box">
        <div class="store_desk">
            <div class="desk_title font-special f16">
                <i></i>门店
            </div>
            <div class="desk_visit lh50" @click="goStore()">
                <i class="icon_visit_desk fl mr5"></i>
                <span>签到未填写拜访记录</span>
                <div class="fr lh50">
                    <span class="f14 font_red">5</span>
                    <i class="right_icon"></i>
                </div>
            </div>
        </div>
        <div class="mt10 agent_desk">
            <div class="desk_title font-special f16">
                <i></i>经纪人
            </div>
            <ul>
                <li class="noborderLeft" @click="goAgent()">
                    <i class="no_join"></i>
                    <span>未合作</span>
                    <span class="num">6</span>
                </li>
                <li @click="goAgent()">
                    <i class="join"></i>
                    <span>合作中</span>
                    <span class="num">6</span>
                </li>
                <li class="noborderRight" @click="goAgent()">
                    <i class="renew"></i>
                    <span>到期未续费</span>
                    <span class="num">6</span>
                </li>
            </ul>
            <ul>
                <li class="noborderLeft" @click="goAgent()">
                    <i class="west"></i>
                    <span>流失</span>
                    <span class="num">6</span>
                </li>
                <li @click="goAgent()">
                    <i class="sleep"></i>
                    <span>冬眠</span>
                    <span class="num">6</span>
                </li>
                <li class="noborderRight" @click="goAgent()"></li>
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
                menuFlag:false
            }
        },
        mounted(){
            console.log(this.$bqUtils.isNull(null)) /**工具函数写在utils里  此函数是判断是否为null*/
            this.$local.set('fangchan', 'pi') /**存入缓存 */
            console.log(this.$local.get('fangchan'))
        },
        methods:{
            showMenu(){
                this.menuFlag = !this.menuFlag
            },
            goStore(){
                this.$router.push('/store')
            },
            goAgent(){
                this.$router.push('/agent')
            },
            addAgent(){
                this.$router.push('/agent/add')
            },
            addStore(){
                this.$router.push('/store/add')
            }
        }
    };
</script>
<style scoped>
.desk_visit{
    height:50px;
    padding:0 20px 0 24px;
    background:#fff;
}
.lh50{
    line-height:50px;
}
.agent_desk ul{
    display:flex;
}
.agent_desk li{
    flex:1;
    height:100px;
    text-align:center;
    border-right:1px solid #EEEEEE;
    border-bottom:1px solid #EEEEEE;
    float:left;
    background:#fff;
    position: relative;
}
.agent_desk li span.num{
    width:60px;
    font-size: 16px;
    color: #FF6214;
    text-align:right;
    position: absolute;
    top:6px;
    right:10px;
}
.agent_desk li i {
    margin-top:25px;
    margin-bottom:11px;
}
.agent_desk li i.no_join{
    margin-top:30px;
}
.agent_desk li span{
    width:100%;
    display:inline-block;
    text-align:center;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #1A1F25;
}
.agent_desk li.noborderLeft{
    border-left:0;
}
.agent_desk li.noborderRight{
    border-left:0;
}
.add_box{
    width:63px;
    text-align:center;
}
.add_agen_desk{
    z-index:99;
    position:fixed;
    bottom:125px;
    right:10px;
}
.add_store_desk{
    z-index:99;
    position:fixed;
    bottom:210px;
    right:10px;
}
.add_agent_icon{
    width:50px;
    height:50px;
    display:inline-block;
    background:url('../../images/xinzenga.png') no-repeat center center;
    background-size: 50px 50px;
}
.add_store_icon{
    width:50px;
    height:50px;
    display:inline-block;
    background:url('../../images/xinzengs.png') no-repeat center center;
    background-size: 50px 50px;
}
.no_join{
    width:29px;
    height:24px;
    display:inline-block;
    background:url('../../images/gzt01.png') no-repeat center center;
    background-size: 29px 24px;
    margin-bottom:14px;
}
.join{
    width:30px;
    height:30px;
    display:inline-block;
    background:url('../../images/gzt02.png') no-repeat center center;
    background-size: 30px 30px;
}
.renew{
    width:30px;
    height:30px;
    display:inline-block;
    background:url('../../images/gzt03.png') no-repeat center center;
    background-size: 30px 30px;
    margin-bottom:14px;
}
.west{
    width:30px;
    height:30px;
    display:inline-block;
    background:url('../../images/gzt04.png') no-repeat center center;
    background-size: 30px 30px;
}
.sleep{
    width:30px;
    height:30px;
    display:inline-block;
    background:url('../../images/gzt05.png') no-repeat center center;
    background-size: 30px 30px;
}
</style>
