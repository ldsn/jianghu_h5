/* eslint-disable */
import request from 'utils/request'
export async function setArticle({
  articleId,
  title,
  content,
  topImage,
}) {
  return request({
    url: '/article/setarticle',
    data: {
      articleId,
      title,
      content,
      topImage,
    },
    type: 'post'
  })
}

export async function getArticleList({ pageNo }) {
  return request({
    url: '/article/getarticlelist',
    data: { pageNo }
  })
}

export async function getArticleDetail({ articleId }) {
  return request({
    url: '/article/getarticledetail',
    data: { articleId }
  })
}

export async function delArticle({ articleId }) {
  return request({
    url: '/article/delarticle',
    data: { article }
  })
}

export async function getUserArticleList({ userId, pageNo }) {
  return request({
    url: '/article/getuserarticlelist',
    data: { userId, pageNo }
  })
}
