import Vue from 'vue'
import vueResource from 'vue-resource'
// import { isApp } from '../utils/utils.js'
Vue.use(vueResource)

// 把post 请求参数body里面的参数转成 formData 格式
Vue.http.options.emulateJSON = true
Vue.http.interceptors.push((request, next) => {
  // 请求发送前的处理逻辑
  // 这里解决跨域问题
  request.credentials = true
  // 加loading
  next((response) => {
    if (response.status === 200) {
      if (response.body && response.body.error && response.body.error.code === 0) {
        // response.code = 0
        // response.body = response.body.result
      } else if (response.body && response.body.code === 0) {
        // response.code = 0
        // response.body = response.body.data
      } else {
        // 错误处理
      }
      // next()
    } else if (response.status === 403) {
      // 清除浏览器 用户缓存
      // Data.delCookie('access_token')
      // Data.delCookie('user_id')
      // Data.delCookie('user_name')
      // if (isApp()) window.location.href = '/user/bindopenid/'
    } else {
      // var msg = '服务器错误,稍后再试'
      // 错误提示
      // $scope.msg = msg
      // $scope.$root.$$phase || $scope.$apply()
      // $('#modal').modal('show')
    }

    // 请求后处理 公共错误处理等
  })
})
