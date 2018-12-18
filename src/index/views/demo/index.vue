<template>
<div>
    <bq-header title="工作台"></bq-header>
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
            //sole.log(this.$bqUtils.isNull()) /**工具函数写在utils里  此函数是判断是否为null*/
        },
        methods:{
            //this.$router.push({name: 'home'}) /*页面跳转*/
            //this.$router.push('/home') /*页面跳转*/
            // 传参
            // 
            // this.$router.push({
            //     name: 'home',
            //     params: {
            //         id:'111'
            //     }
            // })
            // this.$router.push('/home/111')   需路由配置
        }
    };
</script>
<style scoped>

</style>
