<template>
<div>
    <bq-header title="账号管理"></bq-header>
    <div class="account_box">
        <div class="input_account">
            <span>绑定账号</span>
            <div class="fr">
                <input placeholder="请输入要绑定的帐号" type="text" class="account_input">
                <i class="bq-icon-account"></i>
            </div>
        </div>
        <div class="exit_account">
            <div class="account_title">已绑定的账号</div>
            <ul>
                <li>
                    <span class="f16 font_black1">zhangiaxolei</span>
                    <i class="bq-icon-delete fr"></i>
                </li>
                <li>
                    <span class="f16 font_black1">zhangiaxolei</span>
                    <i class="bq-icon-delete fr"></i>
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

            }
        },
        mounted(){
    
        },
        methods:{

        }
    };
</script>
<style scoped>
.account_box{
  width:100%;
  position: absolute;
  top:44px;
}
.input_account{
  padding:0 10px 0 15px;
  height:54px;
  line-height:54px;
  background: #fff;
  margin-top:10px;
}
.input_account i{
  vertical-align:-10px;
}
.account_input{
  width: 240px;
  height:22px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #8A8A8A;
  text-align:right;
  border:1px solid #fff;
}
.exit_account{
  margin-top:10px;
  background: #fff;
}
.account_title{
  height:40px;
  line-height:40px;
  margin-left:15px;
  border-bottom:1px solid #eee;
}
.exit_account ul li{
  height:65px;
  line-height:65px;
  margin-left:15px;
  padding-right:10px;
  border-bottom:1px solid #eee;
}
.exit_account ul li i{
  margin-top:21px;
}
</style>
