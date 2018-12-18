<template>
    <div id="app" ref="myApp" class='bq-app'>
        <div class="bq-d-loading" id="bqDefaultLoading">
            <div class="bq-d-loading-toast">
                <div class="mint-spinner-triple-bounce">
                    <div class="mint-spinner-triple-bounce-bounce1" style="background-color: rgb(255, 222, 59);"></div>
                    <div class="mint-spinner-triple-bounce-bounce2" style="background-color: rgb(255, 222, 59);"></div>
                    <div class="mint-spinner-triple-bounce-bounce3" style="background-color: rgb(255, 222, 59);"></div>
                </div>
                <p>全力加载中...</p>
            </div>
        </div>
        <bq-base></bq-base>
        <router-view></router-view>
        <bq-tabbar class="bq-footer" fixed v-model="selected" v-if="this.$route.meta.tabBarShow">
            <bq-tab-item id="desk" @click.native="onTabItem('desk')">
                <i class="bq-icon-desk" slot="icon"></i> 工作台
            </bq-tab-item>
            <bq-tab-item id="store" @click.native="onTabItem('store')">
                <i class="bq-icon-store" slot="icon"></i> 门店
            </bq-tab-item>
            <bq-tab-item id="agent" @click.native="onTabItem('agent')">
                <i class="bq-icon-agent" slot="icon"></i> 经纪人
            </bq-tab-item>
            <bq-tab-item id="business" @click.native="onTabItem('business')">
                <i class="bq-icon-business" slot="icon"></i> 办公
            </bq-tab-item>
        </bq-tabbar>
    </div>
</template>
<script>
    import {Tabbar, TabItem} from 'mint-ui'
    export default {
    name: 'app',
    data() {
      return {
        selected: 'desk'
        // tabBarShow:true
      }
    },
    mounted() {
        let {meta, name} = this.$route
        this.selected = name
        // if(name === 'storeDetail' || name === 'agentDetail'){
        //     this.tabBarShow = false;
        // }else{
        //     this.tabBarShow = true;
        // }
    },
    methods: {
      onTabItem(selectItem) {
        this.selected = selectItem
        this.$router.push({name: selectItem})
      },
    //   getUrlSeleted(path) {
    //     return path.substr(1).split('/')[0].replace(/\?\S+/, '')
    //   }
    },
    watch: {
      '$route' (to, from) {
        this.selected = to.name
        // if(to.name === 'storeDetail' || to.name === 'agentDetail'){
        //     this.tabBarShow = false;
        // }else{
        //     this.tabBarShow = true;
        // }
      }
    },
    components: {
      bqTabbar: Tabbar,
      bqTabItem: TabItem
    }
  }
</script>
<style>
    @import './assets/theme.css';
    .bq-app {
        width: 100%;
        /* height: 100%; */
        overflow: hidden;
    }
    .bq-app .mint-tabbar{
        width:100%;
        height:50px;
        background: #FFFFFF;
        box-shadow: 0 0 4px 0 rgba(150,146,146,0.25);
        position: fixed;
        bottom:0;
        left:0;
        padding-top:8px;
    }
    .mint-tab-item{
        width:25%;
        float:left;
        text-align:center;
    }
    .mint-tab-item.is-selected .bq-icon-desk{
        background:url('images/desk_active.png') no-repeat;
        background-size:100% 100%;
    }
    .mint-tab-item.is-selected .bq-icon-store{
        background:url('images/store_active.png') no-repeat;
        background-size:100% 100%;
    }
    .mint-tab-item.is-selected .bq-icon-agent{
        background:url('images/agent_active.png') no-repeat;
        background-size:100% 100%;
    }
    .mint-tab-item.is-selected .bq-icon-business{
        background:url('images/bangong_active.png') no-repeat;
        background-size:100% 100%;
    }
    .bq-app .mint-tabbar > .mint-tab-item.is-selected{
        background: #fff;
        color: #1A1F25;
    }
    .bq-d-loading {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #F8F8F8;
	}
    .bq-d-loading-toast {
        position: fixed;
        z-index: 2;
        width: 100px;
        min-height: 100px;
        top: 200px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f8f8f8;
        text-align: center;
    }
    .bq-d-loading-toast p {
        font-size: 14px;
        color: #333333;
        letter-spacing: 0;
        padding-top: 17px;
    }
    .mint-spinner-triple-bounce-bounce1,.mint-spinner-triple-bounce-bounce2,.mint-spinner-triple-bounce-bounce3{
        width: 4px;
        height: 18px;
        border-radius: 4px;
    }
</style>