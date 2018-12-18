import Vue from 'vue';
import router from './router';
import App from './App';
import store from './store/index'
import LoadingConfig from './config/loading.config'
import 'lib-flexible/flexible.js';
import common from './components/index';
import http from './config/http.config';
import 'mint-ui/lib/style.css'
import './assets/theme.css';
import './assets/icon.css';
Vue.use(common)
LoadingConfig(router, store)
new Vue({
    el: '#app',
    router,
    http,
    store,
    template: '<App/>',
    components: { App }
});
$(() => {
    $('#bqDefaultLoading').hide()
})