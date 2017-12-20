/* eslint-disable */
import request from 'utils/request'
export async function getTimelineList({ type, pageNo }) {
  return request({
    url: `/timeline/gettimelinelist`,
    data: { type, pageNo }
  })
}

export async function setTimeline({
  type
  textContent
  textImages
  showInstance
  webpageUrl
  webpageTitle
  webpageImage
}) {
  const timeline = {
    type,
    textContent,
    textImages,
    showInstance,
    webpageUrl,
    webpageTitle,
    webpageImage
  }
  return request({ url: `/timeline/settimeline`, data: timeline })
}

export async function delTimeline({ timelineId }) {
  return request({ url: `/timeline/deltimeline`, data: { timelineId }, type: 'post' })
}

export async function getUserTimelineList({ userId, pageNo }) {
  return request({ url: `/timeline/getusertimelinelist`, data: { userId, pageNo } })
}
