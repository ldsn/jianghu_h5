import dva from 'dva'
import './index.css'

// 1. Initialize
const app = dva()

// 2. Plugins
// app.use({})

// 3. Model
const a = require('app/chat/model/box');
app.model(require('app/home/model'))
app.model(require('app/global/model'))
app.model(a)
app.model(require('app/chat/model/list'))

// 4. Router
app.router(require('./router'))

// 5. Start
app.start('#root')
