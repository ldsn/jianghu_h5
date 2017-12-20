/* eslint-disable */

import request from 'utils/request'
export async function getBanners() {
  return request({ url: '/indexpage/getbanners' })
}
