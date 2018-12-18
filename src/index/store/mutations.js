// 默认加载 loading 遮罩
import { UPDATE_LOADING } from './mutations-type.js'

const state = {
  isLoading: false,
  isLoadingTop: 44
}

const mutations = {
  [UPDATE_LOADING](state, value) {
    state.isLoading = value.isLoading
    state.isLoadingTop = value.isLoadingTop
  }
}
// export default mutations
export default {
  state,
  mutations
}
