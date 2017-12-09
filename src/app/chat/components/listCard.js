import React from 'react'
import { WingBlank, WhiteSpace, Badge } from 'antd-mobile'
import style from './listCard.less'

export default function ({
  chatId,
  user: { username, image },
  lastChat,
  badge,
  time
}) {
  return (
    <li onClick={() => { chatId.toString() }} className={style.item} >
      <WhiteSpace />
      <WingBlank>
        <div className={style.card}>
          <img className={style.image} src={image} alt="" />
          <div className={style.right} >
            <div className={style.info}>
              <p className={style.username}>{username}</p>
              <p className={style.time}>{time}</p>
            </div>
            <p className={style.lastChat}>{lastChat}</p>
          </div>
          {
            (() => (badge !== 0 && (<Badge className={style.badge} text={badge} />)))()
          }
        </div>
      </WingBlank>
      <WhiteSpace />
    </li>
  )
}
