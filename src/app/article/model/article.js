export default {
  namespace: 'article',
  state: {
    tabbar: {
      visible: true
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname.indexOf('/article') > -1) {
          dispatch({type: 'save', payload: pathname.split('/')[2]})
        }
      });
    }
  },
  effects: {
    *fetch ({ payload }, { put }) {
      yield put({ type: 'save' })
    }
  },
  reducers: {
    save (state, action) {
      return {
        id: action.payload
      }
    }
  }
}
