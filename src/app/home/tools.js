import React from 'react'
import { Icon } from 'antd-mobile'
import Style from './tools.less'

const contentConfig = [
  '拨打电话',
  '小邮局',
  '会议室',
  '周报',
  '欢行',
  '顺风车',
  '移动请假',
  '访客预约',
  '公益时',
  '更多'
]

const listItem = contentConfig.map((item, index) =>
  <li className={Style.items} key={index}>
    <div className={Style.icons}>
      <Icon className={Style.iconItem} type="check" size="lg" />
    </div>
    {item}
  </li>
)

const Tools = () => {
  return (
    // 根据配置文件循环出小程序
    <div className={Style.tools}>
      <ul>{listItem}</ul>
    </div>
  )
}

export default Tools
