import React from 'react'
import { Badge, Icon } from 'antd-mobile'
import { Link } from 'dva/router'
import Style from './articles.less'

const ArticleItem = ({ data }) => {
  return (
    <div className={Style.articleItem}>
      <Link to={`/article/${data.id}`}>
        <h1 className={Style.title}>{data.title}</h1>
        <div className={Style.imgBox}>
          <img
              src={data.coverImageLink}
              alt=""
              style={{width: '100%'}}
            />
        </div>
            <div style={{ margin: '15px', color: '#ccc', marginLeft: 12 }}>
              {data.desc}
            </div>
      </Link>
      <div className={Style.fooder}>
        <Badge text={data.createTime} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      </div>
    </div>
  )
}

const ArticleList = () => {
  return (
    <div>
      {
        window.articles.map(data => <ArticleItem key={data.id} data={data} />)
      }
    </div>
  )
}

export default ArticleList
