import React from 'react'
import { Flex, Icon, Popover, Button } from 'antd-mobile'
import Style from './things.less'
import headDefaultImg from './_head_img.jpeg'

const tempData = [
  {
    id: '123',
    headImg: '',
    nickname: '鱼儿',
    things: '前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.',
    imgList: [''],
    date: '2小时前'
  },
  {
    id: '456',
    headImg: '',
    nickname: '小傻子',
    things: '前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.前端最流弊, 后端最菜.',
    imgList: [''],
    date: '2小时前'
  }
]

class CommentComponent extends React.Component {

  state = {
    visible: false
  }

  handleVisibleChange = () => {
    const cb = () => {
      this.close()
      this.document.removeEventListener('touchmove', cb)
    }
    this.document.addEventListener('touchmove', cb)
  }

  close = () => {
    this.setState({
      visible: false
    })
  }

  popoverItemComponents () {
    return (
      <Flex>
        <Button
          inline
          size="small"
          icon={<Icon type="ellipsis" />}
        >
          赞
        </Button>
        <Button
          inline
          size="small"
          icon={<Icon type="ellipsis" />}
        >评论</Button>
      </Flex>
    )
  }

  render () {
    return (
      <Popover
        onVisibleChange={this.handleVisibleChange}
        overlayClassName="fortest"
        placement="left"
        visible={this.state.visible}
        overlay={this.popoverItemComponents()}
        align={{
          overflow: { adjustY: 0, adjustX: 0 },
          offset: [-10, 0]
        }}
      >
        <Icon type="ellipsis" />
      </Popover>
    )
  }
}

const ThingItems = ({ data }) => {
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
              <CommentComponent />
            </Flex>
          </div>
        </Flex.Item>
      </Flex>
    </section>
  )
}

const ThingComponent = () => {
  return (
    <div style={{ marginTop: 20 }}>
      {
        tempData.map(data => <ThingItems key={data.id} data={data} />)
      }
    </div>
  )
}

export default ThingComponent
