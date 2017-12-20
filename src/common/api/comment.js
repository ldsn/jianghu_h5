/* eslint-disable */
import request from 'utils/request'
export function setTimelineComment({
  content,
  timelineId,
  commentId
}) {
  return request({
    url: '/comment/settimelinecomment',
    data: {
      content,
      timelineId,
      commentId
    },
    type: 'post'
  })
}

export async function setArticleComment({
  content,
  articleId,
  commentId
}) {
  return request({
    url: '/comment/setarticlecomment',
    data: {
      content,
      articleId,
      commentId
    },
    type: 'post'
  })
}

export async function delTimelineComment({ commentId }) {
  return request({
    url: '/comment/deltimelinecomment',
    data: { commentId },
    type: 'post'
  })
}

export async function delArticleComment({ commentId }) {
  return request({
    url: '/comment/delarticlecomment',
    data: { commentId },
    type: 'post'
  })
}

export async function getTimelineCommentList({ timelineId, pageNo }) {
  return request({
    url: '/comment/gettimelinecommentlist',
    data: { timelineId, pageNo }
  })
}

export async function getArticleCommentList({ articleId, pageNo }) {
  return request({
    url: '/comment/getarticlecommentlist',
    data: { articleId, pageNo }
  })
}
