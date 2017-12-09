/* eslint-disable */
import event from 'utils/event'

import { login } from '../api/chat'

JIM.onDisconnect(()=>{
    console.log('JIM 断线啦')
})

JIM.onMsgReceive(data=>{
    event.emit('msgReceive', data)
})

JIM.onSyncConversation(data=>{
    event.emit('syncConversation', data)
})
