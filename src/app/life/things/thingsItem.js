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
          <div className={Style.nickname}>{data.nickname}</div>
          <div className={Style.things}>{data.things}</div>
          <div className={Style.imgList}>
            <img role="presentation" src={headDefaultImg} />
          </div>
          <div className={Style.footer}>
            <Flex justify="between">
              <span style={{ color: '#808080' }}>{data.date}</span>
              <CommentComponent onComment={onComment} />
            </Flex>
          </div>
        </Flex.Item>
      </Flex>
    </section>
  )
}

export default ThingItems
