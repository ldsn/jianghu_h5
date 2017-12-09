import Timeago from 'timeago.js'

const timeago = Timeago()
timeago.setLocale('zh_CN')

export default timeago.format.bind(timeago)
