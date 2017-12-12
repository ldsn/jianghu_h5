import React from 'react'
import { Flex } from 'antd-mobile'
import Style from './index.less'
import headDefaultImg from '../_head_img.jpeg'
import CommentComponent from '../components/comment'

const ThingItems = ({ data, onComment }) => {
  return (
    <section className={Style.box}>
      <Flex align="start">
        { /* 头像 */ }
        <div className={Style.headImg}>
          <img role="presentation" src={data.headImg || headDefaultImg} />
        </div>
        <Flex.Item>
          { /* 昵称及动态 */ }
          <div className={Style.nickname}>{data.user}</div>
          <div className={Style.things}>{data.content}</div>
          <div className={Style.imgList}>
            <img role="presentation" src={data.coverImageLink} />
          </div>
          <div className={Style.footer}>
          </div>
        </Flex.Item>
      </Flex>
    </section>
  )
}

export default ThingItems
