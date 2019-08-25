import router from './router'
import nprogress from 'nprogress' // 引入文件
import 'nprogress/nprogress.css' // 引入样式
// 全局导航前置守卫
router.beforeEach(function (to, from, next) {
  nprogress.start() // 开始进度条
  // 如果是以home为起始 就认为 进入了需要检查token的区域
  if (to.path.startsWith('/home')) {
    // 获取前端的token
    let result = window.localStorage.getItem('user-info')
    if (result) {
      let userInfo = JSON.parse(result) // 将存储的字符串转化对象
      if (userInfo && userInfo.token) {
        // 满足token存在的情形
        next()
      } else {
        next('/login') // 跳转到login
      }
    } else {
      next('/login') // 跳转到login
    }
  } else {
    next() // 直接放行
  }
  // 如果没有进去home的领地 就不需要再管了
})
router.afterEach(() => {
  nprogress.done()
})
export default router
