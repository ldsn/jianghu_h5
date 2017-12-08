import React from 'react'
import ListCard from './listCard'

export default function ({ chatList }) {
  const list = chatList.map((props, i) => {
    return <ListCard {...props} key={i} />
  })
  return (
    <ul>
      {list}
    </ul>
  )
}
