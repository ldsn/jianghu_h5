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
    birth: 0 // 生日
  },
  effects: {
    *changeInfoSwitch (action, { put }) {
      yield put({ type: 'ifReceiveMessage' })
    },
    *changeSearchSwitch (action, { put }) {
      yield put({ type: 'ifSearch' })
    },
    *changeUserName (action, { put }) {
      yield put({ type: 'modifyUserName', userName: action.userName })
    },
    *changePersonalExplain (action, { put }) {
      yield put({ type: 'modifyPersonalExplain', user_des: action.userDes })
    },
    *changeSex (action, { put }) {
      yield put({ type: 'modifySex', sex: action.sex })
    },
    *changeDepartment (action, { put }) {
      yield put({ type: 'modifyDepartment', department: action.department })
    },
    *changeBirth (action, { put }) {
      yield put({ type: 'modifyBirth', birth: action.birth })
    }
  },
  reducers: {
    ifReceiveMessage (state) {
      const ifReceiveMessage = state.if_receive_message ? 0 : 1

      return {
        ...state,
        if_receive_message: ifReceiveMessage
      }
    },
    ifSearch (state) {
      const ifSearch = state.if_search ? 0 : 1

      return {
        ...state,
        if_search: ifSearch
      }
    },
    modifyUserName (state, action) {
      return {
        ...state,
        user_name: action.userName
      }
    },
    modifyPersonalExplain (state, action) {
      return {
        ...state,
        user_des: action.userDes
      }
    },
    modifySex (state, action) {
      return {
        ...state,
        sex: action.sex
      }
    },
    modifyDepartment (state, action) {
      return {
        ...state,
        department: action.department
      }
    },
    modifyBirth (state, action) {
      return {
        ...state,
        birth: action.birth
      }
    }
  }
}
