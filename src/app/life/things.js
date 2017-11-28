import React from 'react'
import { connect } from 'dva'
import { Flex, Icon, Popover, Button } from 'antd-mobile'
import Input from 'app/global/input'
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

  /**
   * 当点击其他的位置，popover 关闭
   */
  handleVisibleChange = () => {
    /* eslint-disable */
    const cb = () => {
      document.removeEventListener('touchmove', cb)
      this.close()
    }
    document.addEventListener('touchmove', cb)
    /* eslint-enable */
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
          onClick={this.props.onComment}
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

function mapDispatchToProps (dispatch) {
  return {
    toggleTabbarVisible (visible) {
      dispatch({ type: 'env/toggleTabbarVisible', payload: visible })
    }
  }
}

@connect(null, mapDispatchToProps)
class ThingComponent extends React.Component {
  state = {
    commentInputVisible: false
  }

  /**
   * 当点击评论按钮时
   * @param  {[type]} itemId 被点击的动态 Id
   */
  handleDoingComment = () => {
    this.props.toggleTabbarVisible(false)
    this.setState({
      commentInputVisible: true
    }, () => {
      this.refs.input.focus()
    })
  }
  /**
   * 当评论按钮失焦时
   * @return {[type]} [description]
   */
  cancleCommentBlur = () => {
    this.props.toggleTabbarVisible(true)
    this.setState({
      commentInputVisible: false
    })
  }
  render () {
    return (
      <div className={Style.thingsWrapper}>
        {
          tempData.map(data =>
            <ThingItems
              onComment={this.handleDoingComment}
              key={data.id}
              data={data}
            />
          )
        }
        {
          this.state.commentInputVisible && <div className={Style.commentWrapper}>
            <Input
              ref="input"
              defaultValue="123"
              onBlur={this.cancleCommentBlur}
              suffix={<Icon type="check-circle-o" />}
            />
          </div>
        }
        <div className={Style.bottomTips}>没有更多了～</div>
      </div>
    )
  }
}

export default ThingComponent
