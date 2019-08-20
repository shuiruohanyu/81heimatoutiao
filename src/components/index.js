import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'

// elementUI导出的对象 对象里有一个方法 install
// Vue.use(elementUI) => 调用其提供的install方法,并且在方法中传入Vue对象
export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader) // 注册了layout-header组件
    Vue.component('layout-aside', layoutAside) // 注册左侧菜单组件
    // Vue.prototype.$demo =
    // this.$message
  }
}
