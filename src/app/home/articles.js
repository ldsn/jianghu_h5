import React from 'react'
import { Badge, Icon } from 'antd-mobile'
import { Link, routerRedux } from 'dva/router'
import Style from './articles.less'
console.log(routerRedux)

const ArticleItem = ({ data, dispatch }) => {
  return (
    <div className={Style.articleItem} onClick={()=>{dispatch(routerRedux.replace(`/article/${data.id}`))}}>

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

      <div className={Style.fooder}>
        <Badge text={data.createTime} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      </div>
    </div>
  )
}

const ArticleList = ({dispatch}) => {
  return (
    <div>
      {
        window.articles.map(data => <ArticleItem dispatch={dispatch} key={data.id} data={data} />)
      }
    </div>
  )
}

export default ArticleList
