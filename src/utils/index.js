
let timeStamp = Date.now()
/**
 * 获取唯一id
 * @return {[type]} [description]
 */
export const getUid = () => {
  return timeStamp++
}
/**
* 格式化时间
* @param date: 时间戳或Date对象
**/
export const formatDate = date => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()

  return `${year} + '-' + ${month} + '-' + ${day}`
}
