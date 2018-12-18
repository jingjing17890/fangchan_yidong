import Vue from 'vue'
/**
 * loading 根据路由进行配置
 * @export
 * @param {any} router 路由
 * @param {any} store vuex store
 */
export default function LoadingConfig(router, store) {
  // 过滤掉 不需要在 路由加载完后 关闭掉loading 的页面 在 页面本身 去设置loading
  let NoAfterRouteIsLoading = [
    'store',
  ]
  router.beforeEach(async(to, from, next) => {
    let { name, matched, fullPath, path } = to    
    // loading 处理
    store.commit('UPDATE_LOADING', { isLoading: true, isLoadingTop: 0 })
    if (/^http/.test(path)) {
      let url = path.split('http')[1]
      window.location.href = `http${url}`
    } else {
      next()
    }
  })
  router.afterEach((to) => {
    let { name } = to
    setTimeout(() => {
      if (NoAfterRouteIsLoading.indexOf(name) === -1) {
        store.commit('UPDATE_LOADING', { isLoading: false, isLoadingTop: 0 })
      }
    }, 350)
  })
}