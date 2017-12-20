/* eslint-disable */
import request from 'utils/request'

export async function login({ phone, password }) {
  return request({
    url: `/user/login`,
    data: {
      phone,
      password
    },
    type: 'post'
  }).then(data=>{

  })
}

export async function logout() {
  return request({ url: `/user/logout` })
}

export async function register({
  phone,
  password,
  verifycode
}) {
  return request({
    url: `/user/register`,
    data: {
      phone,
      password
    },
    type: 'post'
  })
}

export async function getUserInfo({ userId }) {
  return request({ url: `/user/getuserinfo`, data: { userId } })
}
