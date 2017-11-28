export default {
  namespace: 'env',
  state: {
    tabbar: {
      visible: true
    }
  },
  effects: {
    *fetch ({ payload }, { put }) {
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
