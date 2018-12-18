import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Desk from '../views/desk/index.vue';
import Agent from '../views/agent/index.vue';
import AgentDetail from '../views/agent/detail.vue';
import AgentAccount from '../views/agent/account.vue';
import AgentAdd from '../views/agent/add.vue';
import Store from '../views/store/index.vue';
import StoreAdd from '../views/store/add.vue';
import StoreDetail from '../views/store/detail.vue';
import StoreVisit from '../views/store/visit.vue';
import Business from '../views/business/index.vue';
import Sales from '../views/business/sales.vue';
import Mark from '../views/business/mark.vue';
import SearchMore from '../views/map/search.more.vue';
import moreAddress from '../views/map/search.address.vue';
import Follow from '../views/follow/index.vue';
import Photo from '../views/photo/index.vue';
import PhotoConsum from '../views/photo/consum.vue';
import PhotoMutual from '../views/photo/mutual.vue';
Vue.use(VueRouter);

/* webpackChunkName: "home-index-component" */

const routes = [{
    path: '*',
    redirect: '/desk',
    name:'desk',
    meta:{
        tabBarShow:true
    }
},{
    path: '/desk',
    component: Desk,
    name:'desk',
    meta:{
        tabBarShow:true
    }
},{
    path: '/store',
    component: Store,
    name:'store',
    meta:{
        tabBarShow:true
    }
},{
    path: '/store/detail',
    component: StoreDetail,
    name:'storeDetail',
    meta:{
        tabBarShow:false
    }
},{
    path: '/store/visit',
    component: StoreVisit,
    name:'storeVisit',
    meta:{
        tabBarShow:false
    }
},{
    path: '/store/add',
    component: StoreAdd,
    name:'storeAdd',
    meta:{
        tabBarShow:false
    }
},{
    path: '/agent',
    component: Agent,
    name:'agent',
    meta:{
        tabBarShow:true
    }
},{
    path: '/agent/detail',
    component: AgentDetail,
    name:'agentDetail',
    meta:{
        tabBarShow:false
    }
},{
    path: '/agent/account',
    component: AgentAccount,
    name:'agentAccount',
    meta:{
        tabBarShow:false
    }
},{
    path: '/agent/add',
    component: AgentAdd,
    name:'agentAdd',
    meta:{
        tabBarShow:false
    }
},{
    path: '/business',
    component: Business,
    name:'business',
    meta:{
        tabBarShow:true
    }
},{
    path: '/follow',
    component: Follow,
    name:'follow',
    meta:{
        tabBarShow:false
    }
},{
    path: '/business/sales',
    component: Sales,
    name:'sales',
    meta:{
        tabBarShow:false
    }
},{
    path: '/business/mark',
    component: Mark,
    name:'mark',
    meta:{
        tabBarShow:false
    }
},{
    path: '/store/searchmore',
    component: SearchMore,
    name:'searchmore',
    meta:{
        tabBarShow:false
    }
},{
    path: '/store/moreaddress',
    component: moreAddress,
    name:'moreaddress',
    meta:{
        tabBarShow:false
    }
},{
    path: '/photo',
    component: Photo,
    name:'photo',
    meta:{
        tabBarShow:false
    }
},{
    path: '/photo/consum',
    component: PhotoConsum,
    name:'PhotoMutual',
    meta:{
        tabBarShow:false
    }
},{
    path: '/photo/mutual',
    component: PhotoMutual,
    name:'PhotoMutual',
    meta:{
        tabBarShow:false
    }
}];
const router = new VueRouter({
    routes
});
// router.beforeEach(async(to, from, next) => {
//     let { name, matched, fullPath, path, meta } = to   
//     meta.title && (window.document.title = meta.title);
//     // loading 处理
//     store.commit('UPDATE_LOADING', { isLoading: true, isLoadingTop: 0 })
//     if (/^http/.test(path)) {
//         let url = path.split('http')[1]
//         window.location.href = `http${url}`
//     } else {
//         next()
//     }
// })
// router.afterEach((to) => {
//     let { name } = to
//     setTimeout(() => {
//         store.commit('UPDATE_LOADING', { isLoading: false, isLoadingTop: 0 })
//     }, 350)
// })
// router.beforeEach((route, from, next) => {
//     let { meta } = route;

//     meta.title && (window.document.title = meta.title);
//     next();
// });

export default router;