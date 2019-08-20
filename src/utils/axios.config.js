import axios from 'axios'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 将后台接口的地址给axios的baseURL
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  // 进行配置的注入
  let userInfo = window.localStorage.getItem('user-info') // 获取用户存储信息 存储信息里有token
  let token = userInfo ? JSON.parse(userInfo).token : null // 获取token
  config.headers.Authorization = `Bearer ${token}` // 直接将token注入到 请求参数中
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})
// 相应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response.data ? response.data : {}
}, function (error) {
  // 对响应错误做处理
  return Promise.reject(error)
})
export default axios
