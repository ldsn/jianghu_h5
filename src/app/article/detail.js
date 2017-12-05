import React from 'react'
import { connect } from 'dva'
import Style from './detail.less'
import defaultBannerImg from './defaultBanner.jpg'

const mock = {
  articleId: '123123',
  user:{
      userId: '123',
      username: '一个没有梦想的咸鱼',
  },
  title: '我心中的欢乐不是自己的',
  desc: '1791年12月5日凌晨0:55分，也就是220年前的此时此刻，名为“上帝宠儿”（Amadeus）的莫扎特离开这个世界。',
  commentCount: 17053,
  likeCount: 17053,
  visitCount: 17053,
  forwordCount: 17053,
  coverImageLink: '',
  isTop: false,
  createTime: Date.now(),
  updateTime: Date.now(),
  content: Array(10).join('我坐在德意志的暖冬里，这大约是220年来少有的不是白色的祭日，但也下了好几天的大雨。从一个月前萌生再去维也纳来度过这天的想法，终究因为人穷，也只能志短。好在“天下的水总归一源，不拘哪里的水舀一碗看着哭去，也就尽情了”。')
}

const ArticleDetail = function () {
  const article = mock
  const { user: publishUser } = mock;

  return (
    <div className={Style.wrapper}>
      { /* banner */ }
      <div
        className={Style.bannerBg}
        style={{ backgroundImage: `url(${article.coverImageLink || defaultBannerImg})` }}
      />
      <div className={Style.articleWrapper}>
        <h1 className={Style.title}>{article.title}</h1>
        <div className={Style.caption}>
          <span>{publishUser.username}</span>&nbsp;&nbsp;
          <span>2017-12-6</span>&nbsp;&nbsp;
          <span>阅读 17053</span>
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

export default connect()(ArticleDetail)
