import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    email: username,
    password
  }
  return request({
    url: '/auth/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/auth/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  // const data = {
  //   token: token
  // }
  // return request({
  //   url: '/user/info',
  //   method: 'post',
  //   data
  // })
  const data = {
    token: token,
    db: 'User',
    action: 'getUserInfo'
  }
  const url = '/allinone'
  return request({
    url: url,
    method: 'post',
    data
  })
}

export function getRoleRouters(role) {
  const url = '/allinone'
  const data = {
    role: role,
    db: 'User',
    action: 'getRoleRouters'
  }
  return request({
    url: url,
    method: 'post',
    data
  })
}

