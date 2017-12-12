export default {
  namespace: 'user',
  state: {
    user_name: '---', // 用户名
    user_des: '----', // 用户描述
    follow: 0, // 关注数
    fans: 2, // 粉丝数
    dynamic: 3, // 动态数
    if_receive_message: 0, // 是否接受陌生人消息
    if_search: 1, // 是否允许别人搜索到我
    avator: '', // 头像
    sex: 1, // 性别
    department: '交通学院', // 院系
    birth: 0, // 生日
    loading: false // 是否显示loading
  },
  effects: {
    *changeUserInfo (action, { put }) {
      yield put({ type: 'saveUserInfo', info: action.info })
    }
  },
  reducers: {
    saveUserInfo (state, action) {
      const newState = JSON.parse(JSON.stringify(state))
      const infoKey = action.info.key
      const infoValue = action.info.value

      newState[infoKey] = infoValue
      newState.loading = false

      return newState
    }
  }
}
