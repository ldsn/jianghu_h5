/* eslint-disable */
import request from 'utils/request'

export async function getFollowList({ userId, pageNo }) {
  return request({ url: '/follow/getfollowerlist', data: { userId, pageNo } })
}

export async function setFollower({ userId }) {
  return request({ url: '/follow/setfollower', data: { userId }, type: 'post' })
}

export async function delFollower({ userId }) {
  return request({ url: '/follow/delfollower', data: { userId }, type: 'post' })
}

export async function setRemark({ userId, remarkName }) {
  return request({ url: '/follow/setremark', data: { userId, remarkName }, type: 'post' })
}
