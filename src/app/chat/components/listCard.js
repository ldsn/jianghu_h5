import React from 'react'
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
      <img className={style.image} src={image} alt="" />
      <div>
        <p>{username}</p>
        <p>{time}</p>
      </div>
      <p>{lastChat}</p>
      <span className={style.badge}>{badge}</span>
    </li>
  )
}
