export default {
  namespace: 'list',
  state: {
    list: [{
      chatId: 1,
      user: {},
      lastChat: '',
      badge: 1
    }]
  },
  subscriptions: {
    setup({ dispatch, history }) { // eslint-disable-line
    }
  },
  effects: {
    * fetch({ payload }, { call, put }) { // eslint-disable-line
      yield put({ type: 'save' })
    }
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload }
    }
  }
}
