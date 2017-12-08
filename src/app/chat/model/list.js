export default {
  namespace: 'chatList',
  state: {
    list: [{
      chatId: 1,
      user: {
        username: 'edire',
        image: 'http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg'
      },
      lastChat: '再见哦',
      badge: 1
    }, {
      chatId: 1,
      user: {
        username: 'edire',
        image: 'http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg'
      },
      lastChat: '再见哦',
      badge: 1
    }]
  },
  subscriptions: {
    setup ({ dispatch, history }) { // eslint-disable-line
    }
  },
  effects: {
    * fetch ({ payload }, { call, put }) { // eslint-disable-line
      yield put({ type: 'save' })
    }
  },
  reducers: {
    save (state, action) {
      return { ...state, ...action.payload }
    }
  }
}
