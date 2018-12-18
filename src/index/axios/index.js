
import axios from 'axios'
import Qs from 'qs'
let url = `/apis`

process.env.NODE_ENV == 'development' ? url : url = ''
export const API_HOST = `${url}`
/*
 * 配置权限问题
 */
//请求前
axios.interceptors.request.use(
    config => {
        config.transformRequest = (data)=>{
            data = Qs.stringify(data);
            return data
        }
        config.withCredentials = true
            return config
        },function(error){
            return Promise.reject(error)
        }
        );
//请求后
axios.interceptors.response.use(function (response) {
    // debugger
    if(response.data.do == "redirect"){
         window.location.href = response.data.url
    }else{
        return response.data;
    }
}, function (error) {
    console.log(error,'error')
});