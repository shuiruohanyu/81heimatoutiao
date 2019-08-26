import axios from '../utils/axios.config'
import URL from '../constant/api'
// 存放所有登录逻辑的代码
export function LoginByMobile (data) {
  return axios({
    method: 'post',
    url: URL.APP_LOGIN, // 由于地址是常量 而且有可能变化
    data
  })
  // 相当于返回一个promise对象
}
