import axios from 'axios'
import store from '../store'
const request = axios.create({
    beseURL: ''
})
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么，例如加入token
   const {user} = store.state
   if(user ) {
       config.headers.Authorization = `Bearer ${user.token}`
   }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })
export default request