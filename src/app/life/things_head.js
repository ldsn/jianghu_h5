import React from 'react'
import { Flex } from 'antd-mobile'
import Style from './things_head.less'
import headDefaultImg from './_head_img.jpeg'

const tempData = {
  id: '123',
  headImg: '',
  nickname: '鱼儿',
  things: '前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.',
  imgBg: '',
  date: '2小时前'
}

const ThingComponent = () => {
  return (
    <div >
      <section className={Style.box}>
        <Flex.Item>
          <div className={Style.userInfo}>
            { /* 头像及昵称 */ }
            <Flex justify="end">
              <div className={Style.nickname}>{tempData.nickname}</div>
              <div className={Style.headImg}>
                <img role="presentation" src={tempData.headImg || headDefaultImg} />
              </div>
            </Flex>
          </div>
          { /* 背景图 */ }
          <div className={Style.imgBg}>
            <img role="presentation" src={tempData.imgBg || headDefaultImg} />
          </div>
        </Flex.Item>
      </section>
    </div>
  )
}

export default ThingComponent
