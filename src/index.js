import dva from 'dva'
import './index.css'
import './assets/icon/iconfont.css'
import './common/JMessage'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({})

// 3. Model
app.model(require('app/home/model'))
app.model(require('app/global/model'))
app.model(require('app/chat/model/box'))
app.model(require('app/chat/model/list'))
app.model(require('app/user/model/user'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')

