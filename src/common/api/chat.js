/* eslint-disable */
import md5 from 'md5'

export function login ({ username, password } = {}) {
  const random = new Date().getTime() + '' +  new Date().getTime();
  const time = new Date().getTime();
  const st = md5(`appkey=8322c055828ec303e20c962a&timestamp=${time}&random_str=${random}&key=85c51f9f896ab57b89332749`)
  JIM.init({
    "appkey": "8322c055828ec303e20c962a",
    "random_str": random,
    "signature": st,
    "timestamp": time,
    "flag": 0
  }).onSuccess(function(data) {
      console.log(data)
      JIM.login({
        username:'user1',
        password: '123456'
      })
    //data.code 返回码
    //data.message 描述
  }).onFail(function(data) {
      console.log(data.msgs)
    // 同上
  });
}


export function getUnreadMsgCnt ({ username }) {
  return JIM.getUnreadMsgCnt({ username })
}