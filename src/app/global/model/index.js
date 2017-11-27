export default {
  namespace: 'env',
  state: {
    tabbar: {
      visible: true
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
    }
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      yield put({ type: 'save' })
    }
  },
  reducers: {
    toggleTabbarVisible (state, action) {
      const { tabbar } = state
      return {
        tabbar: {
          ...tabbar,
          visible: action.payload
        }
      }
    }
  }
}
