import timeago from 'utils/timeago'
import event from 'utils/event'
import { getUnreadMsgCnt } from 'common/api/chat'

export default {
  namespace: 'chatList',
  state: {
    list: [{
      chatId: 1,
      user: {
        username: '张大山',
        image: 'http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg'
      },
      lastChat: '再见哦',
      badge: 1,
      time: timeago(1512797572130)
    },
    {
      chatId: 1,
      user: {
        username: '王大锤',
        image: 'http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg'
      },
      lastChat: '再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦再见哦',
      badge: 1
    }]
  },
  subscriptions: {
    setup ({ dispatch, history }) { // eslint-disable-line
      event.on('msgReceive', data => {
        dispatch({ type: 'msgReceive', data })
      })
      event.on('syncConversation', data => {
        dispatch({ type: 'syncConversation', payload: data })
      })
    }
  },
  effects: {
    * fetch ({ payload }, { call, put }) { // eslint-disable-line

      yield put({ type: 'save' })
    },
    * msgReceive ({ data }, { call, put, select }) { // eslint-disable-line
      if (!data || !data.messages || data.messages.length === 0) {
        return
      }
      const list = yield select(({ chatList: { list: li } }) => li)

      data.messages.forEach(({
        content: {
          from_id: fromId,
          create_time: createTime,
          msg_body: msgBody
        }
      }) => {
        const filter = list.filter(({ chatId }) => {
          return chatId === fromId
        })
        if (filter[0]) {
          const item = list.splice(list.indexOf(filter[0]), 1)[0]
          item.lastChat = msgBody.text
          item.badge = getUnreadMsgCnt({ username: fromId })
          item.time = timeago(+createTime * 1000)
          list.unshift(item)
        } else {
          const item = {
            chatId: fromId,
            user: {
              username: '后加的',
              image: 'http://img0.imgtn.bdimg.com/it/u=2764371306,3467823016&fm=27&gp=0.jpg'
            },
            lastChat: msgBody.text,
            badge: getUnreadMsgCnt({ username: fromId }),
            time: timeago(+createTime * 1000)
          }
          list.unshift(item)
        }
      })

      yield put({ type: 'save', payload: { list } })
    },
    * syncConversation ({ payload }, { call, put }) { // eslint-disable-line
      console.log(payload)
    }
  },
  reducers: {
    save (state, action) {
      const newState = { ...state, ...action.payload }
      return JSON.parse(JSON.stringify(newState))
    }
  }
}
