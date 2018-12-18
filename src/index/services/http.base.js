import {API_HOST} from '../axios'
import Vue from 'vue'

export default class HttpBase {
  constructor() {
    this.baseUrl = API_HOST
  }

  /**
   * get 提交
   * @param {String} url 请求的url
   * @param {any} params  请求的参数
   * @param {Boolean} isApiHost  是否添加前缀 默认是true
   * @returns Promise
   * @memberOf HttpBase
   */
  get(url, params = {}, isApiHost = true) {
    return new Promise((resolve, reject) => {
      Vue.http.get(this.getUrl(url, isApiHost), { params: params }).then(res => {
        let { body } = res
        resolve(body)
      }, err => {
        this._errHandler(err)
        reject(err)
      })
    })
  }

  /**
   *
   * post 提交
   * @param {String} url 请求的url
   * @param {any} [params={}] 请求的参数
   * @param {Boolean} isApiHost 是否添加前缀 默认是true
   * @returns Promise
   *
   * @memberOf HttpBase
   */
  post(url, params = {}, isApiHost = true) {
    return new Promise((resolve, reject) => {
      Vue.http.post(this.getUrl(url, isApiHost), params).then(res => {
        let { body } = res
        resolve(body)
      }, err => {
        this._errHandler(err)
        reject(err)
      })
    })
  }

  /**
   *
   * url 处理如果 isApiHost 为true 则添加 API_HOST
   * @param {any} url
   * @param {any} isApiHost
   * @returns
   *
   * @memberOf HttpBase
   */
  getUrl(url, isApiHost) {
    if (!isApiHost) {
      return url
    }
    let arr = [this.baseUrl]
    arr.push(url)
    return arr.join('')
  }

  upload(url, params = {}) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: 'POST',
        url: this.baseUrl + url,
        contentType: false,
        processData: false,
        data: params
      }).done(res => {
        this._msgHandler(res)
        resolve(res)
      }).fail(this._errHandler)
    })
  }

  getJson(url, params = {}, isApiHost = true) {
    return new Promise((resolve, reject) => {
      Vue.http.jsonp(this.getUrl(url, isApiHost), {params: params}).then(res => {
        let { body } = res
        resolve(body)
      }, err => {
        this._errHandler(err)
        reject(err)
      })
    })
  }

  _msgHandler(body) {
    let { code, msg } = body
    if (code === 401 || code === 500 || code === 403) {
      Vue.prototype.$message({ message: msg, type: 'warning' })
        // 如果未登陆状态 则退回到登陆
      if (code === 401) {
        window.router.push({ path: '/login' })
      }
    }
  }

  _errHandler(err) {
    let { status, responseJSON } = err
    if (status === 409) {
      let { code, msg } = responseJSON
      Vue.prototype.$message({
        message: msg || '系统发生错误咯,请联系管理员!',
        type: 'error'
      })
      if (code === 40003) {
        window.router.push({ path: '/login' })
      }
    }
  }
};
