<template>
<div>
    <bq-header title="门店"></bq-header>
    <div class="sales_box">
        <div class="search_time">
            <mt-datetime-picker
            type="date"
            ref="datePicker"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="handleConfirm"
            >
            </mt-datetime-picker>
            <input @click="timeSelect()" type="text" readonly class="time1 sales_time" v-model="value"/>
        </div>
        <ul>
            <li>
                <span class="name">张伟</span>
                <div class="fr">
                    <p class="fl">
                      <span>门店签到：</span>
                      <span>4</span>  
                    </p>
                    <p class="fl">
                        <span>门店签到：</span>
                        <span>4</span>  
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    import bqHeader from '../../components/header.vue'
    import { DatetimePicker } from 'mint-ui'
    import Vue from 'vue'
    Vue.component(DatetimePicker.name, DatetimePicker)
    export default {
        components:{
           bqHeader
        },
        data() {
            return{
                pickerValue: '',
                value:'请选择预约时间'
            }
        },
        mounted(){
        },
        methods:{
            timeSelect(){
                this.$refs.datePicker.open()
            },
            handleConfirm(values) {
                this.value = values.toLocaleDateString()
                // this.value = values.toLocaleDateString() + ' ' + values.toTimeString().substr(0, 5)
            },
            goSearch(){
                this.$router.push('/store/searchmore')
            },
            sign(){
                this.$messagebox.alert('请输入描述', '签到失败')
            }
        }
    };
</script>
<style scoped>
.sales_box{
  width:100%;
  position: absolute;
  top:44px;
}
.search_time{
  height:50px;
  background:#fff;
}
.sales_box ul{
  margin-top:10px;
  background:#fff;
}
.sales_box ul li{
  height:70px;
  line-height:70px;
  padding:0 15px;
}
.sales_box ul li .name{
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #1A1F25;
}
.sales_box ul li p:first-child{
  margin-right:40px;
}
.sales_box ul li p span:last-child{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #FF6214;
}
.sales_time{
  width:64%;
  height:30px;
  margin-top:8px;
  margin-left:18%;
  display:inline-block;
  border-radius:30px;
  border:1px solid #ECECEC;
  background: #ECECEC;
  padding-left:15px;
}
</style>
