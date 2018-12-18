import { Lazyload, Spinner, Toast, Actionsheet, Switch, Indicator } from 'mint-ui'
import BqMessageBox from './messagebox'
import BQUtilsPulgin from '../utils/index'
import LocalPulgin from '../utils/localstorage'
import bqLoading from './loading.vue'
import bqContent from './content.vue'
import bqBase from '../base.vue'
import DatetimePicker from './datetime/datetime.picker.vue'
import loadingSpinSvg from '../assets/loading/loading-spin.svg'

const install = (Vue) => {
  if (install.installed) {
    return
  }
  Vue.component(DatetimePicker.name, DatetimePicker)
  Vue.component(bqLoading.name, bqLoading)
  Vue.component(bqBase.name, bqBase)
  Vue.component(bqContent.name, bqContent)
  Vue.use(BQUtilsPulgin)
  Vue.use(LocalPulgin)
  Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
  Vue.$messagebox = Vue.prototype.$messagebox = new BqMessageBox()
  Vue.$toast = Vue.prototype.$toast = Toast
  // Vue.$bqUtils = Vue.prototype.$bqUtils = BQUtils
  Vue.$$loadingImgSrc = Vue.prototype.$$loadingImgSrc = loadingSpinSvg

}
export default {
  install
}
