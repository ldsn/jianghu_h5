import React from 'react'
import { Badge, Icon } from 'antd-mobile'
import Style from './articles.less'

const tempData = [
  {
    id: '1',
    title: '鲁大学生网1',
    img: ['http://photos.tuchong.com/51087/f/2933651.jpg', 'http://a0.att.hudong.com/67/92/01200000343223123374923013558.jpg', 'http://a1.att.hudong.com/14/91/01200000343223123374918129603.jpg'],
    tag: ['火热', '校园', '情侣'],
    date: '2017-11-25'
  },
  {
    id: '2',
    title: '鲁大学生网2',
    img: ['http://photos.tuchong.com/51087/f/2933651.jpg', 'http://a0.att.hudong.com/67/92/01200000343223123374923013558.jpg', 'http://a1.att.hudong.com/14/91/01200000343223123374918129603.jpg'],
    tag: ['火热', '校园', '情侣'],
    date: '2017-11-25'
  }
]


const ArticleItem = ({ data }) => {
  return (
    <div className={Style.articleItem}>
      <div className={Style.title}>
        <h1>{data.title}</h1>
      </div>
      <div className={Style.img}>
        <img src={data.img[0]} alt="" className={Style.imgshow} />
        <img src={data.img[1]} alt="" className={Style.imgshow} />
        <img src={data.img[2]} alt="" className={Style.imgshow} />
      </div>
      <div className={Style.fooder}>
        <Badge text={data.tag[0]} hot style={{ marginLeft: 12, padding: '0 3px', borderRadius: 2 }} />
        <Badge text={data.tag[1]} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
        <Badge text={data.tag[2]} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
        <Badge text={data.date} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
        <Icon type="ellipsis" className={Style.more} />
      </div>
    </div>
  )
}

const ArticleList = () => {
  return (
    <div>
      {
        tempData.map(data => <ArticleItem key={data.id} data={data} />)
      }
    </div>
  )
}

export default ArticleList
