
let timeStamp = Date.now()
/**
 * 获取唯一id
 * @return {[type]} [description]
 */
export const getUid = () => {
  return timeStamp++
}
