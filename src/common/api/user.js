/* eslint-disable */
import request from 'utils/request'
import storage from 'utils/storage'
import config from 'common/config'

export async function login({ phone, password, device }) {
  return request({
    url: `/user/login`,
    data: {
      phone,
      password,
      device
    },
    type: 'post'
  }).then(({data, err}) =>{
    if (data) {
        storage.setItem('access_token', data.access_token, config.tokenTime)
    }
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
