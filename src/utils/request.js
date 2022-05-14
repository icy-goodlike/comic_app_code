import axios from 'axios'

const request = axios.create({
  // 指定请求的根路径
  baseURL: 'http://127.0.0.1:3007/api'
})

export default request
