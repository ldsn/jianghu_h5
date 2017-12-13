import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import { NavBar, Icon } from 'antd-mobile'
import Style from './detail.less'
import defaultBannerImg from './defaultBanner.jpg'

const ArticleDetail = ({id, dispatch}) => {
  const cid = id
  const article = window.articles.filter(({id})=>id == cid)[0] || {}
  console.log(article)

  return (
    <div className={Style.wrapper}>
      { /* banner */ }
      <NavBar
        className={Style.navbar}
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => dispatch(routerRedux.replace(`/`))} // eslint-disable-line
      >{article.title.substring(0, 15)}</NavBar>
      <div className={Style.articleWrapper}>
        <div
          className={Style.bannerBg}
          style={{ backgroundImage: `url(${article.coverImageLink || defaultBannerImg})` }}
        />
        <h1 className={Style.title}>{article.title}</h1>
        <div className={Style.caption}>
          <span>{article.user}</span>&nbsp;&nbsp;
          <span>{article.createTime}</span>&nbsp;&nbsp;
          <span>阅读 {article.commentCount}</span>
        </div>
        <div className={Style.intro}>
          {article.desc}
        </div>
        <div className={Style.content}>
          {article.content}
        </div>
      </div>
    </div>
  )
}


function mapStateToProps ({ article }) {
  return {
    ...article
  }
}
export default connect(mapStateToProps)(ArticleDetail)
