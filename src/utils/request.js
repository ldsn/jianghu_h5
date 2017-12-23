import fetch from 'dva/fetch'
import config from 'common/config'
import qs from 'qs'
import storage from 'utils/storage'

function parseJSON (response) {
  return response.json()
}

function checkStatus (response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }

  const error = new Error(response.statusText)
  error.response = response
  throw error
}

function checkError (response = {}) {
  if (response.errNo === 0) {
    return response
  }
  const error = new Error(response.errStr)
  error.response = response
  throw error
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request ({ url, data = {}, type = 'get' }) {
  const options = {}
  options.method = type.toLowerCase()

  url = config.domain + url
  if (type.toLowerCase() === 'get') {
    url = `${url}?${qs.stringify(data)}`
  } else if (type.toLowerCase() === 'post') {
    options.body = qs.stringify(data)
  }
  const token = storage.getItem('access_token')
  options.headers = {
    'Authorization': 'android ' + token,
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(checkError)
    .then(data => ({ data: data.data }))
    .catch(err => ({ err }))
}
