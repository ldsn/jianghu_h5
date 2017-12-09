import React from 'react'
import ListCard from './listCard'
import style from './list.less'

export default function ({ chatList }) {
  const list = chatList.map((props, i) => {
    return <ListCard {...props} key={i} />
  })
  return (
    <ul className={style.ul}>
      {list}
    </ul>
  )
}
