import axios from 'axios'

// const baseUrl = 'http://39.98.181.204:8083'
const baseUrl = 'http://120.79.179.182:8083'

export function getCourseList (data) {
  const url = baseUrl + '/teach/getContentList'
  return axios.post(url, data)
}

export function getGoodsList (data) {
  const url = baseUrl + '/order/getGoodsList'
  return axios.post(url, data)
}

// 获取用户积分
export function getUserScore (data) {
  const url = baseUrl + '/user/update'
  return axios.post(url, data)
}

// 发送验证码
export function sendSMSApi (data) {
  const url = baseUrl + '/user/sendSMS'
  return axios.post(url, data)
}

// 校验验证码
export function validationSMSApi (data) {
  const url = baseUrl + '/user/validation'
  return axios.post(url, data)
}

// 录入姓名
export function insertNameApi (data) {
  const url = baseUrl + '/user/insert'
  return axios.post(url, data)
}

// 预约课程
export function orderContentApi (data) {
  const url = baseUrl + '/teach/orderContent'
  return axios.post(url, data)
}

// 兑换商品
export function orderGoodsApi (data) {
  const url = baseUrl + '/order/orderGood'
  return axios.post(url, data)
}

// 获取我兑换的商品列表
export function getMyGoodsApi (data) {
  const url = baseUrl + '/order/orderGoodsList'
  return axios.post(url, data)
}

// 获取我预约的课程
export function getMyLessonApi (data) {
  const url = baseUrl + '/teach/orderContentList'
  return axios.post(url, data)
}

// 获取用户信息
export function getUserInfo (data) {
  const url = baseUrl + '/user/getUser'
  return axios.post(url, data)
}

// 获取任务列表
export function getTaskList (data) {
  const url = baseUrl + '/task/getTaskList'
  return axios.post(url, data)
}

// 获取首页文章信息
export function getIndexList (data) {
  const url = baseUrl + '/index/getIndexList'
  return axios.get(url, {
    params: data
  })
}
