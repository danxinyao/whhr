/**
 * 客服
 */
import ajax from '../fetch'
export default {
    /*
     * 发送消息
     * @param  {Boolean} auth 令牌
     */
    sendMessage(data, auth) {
        return ajax({
            url: '/CustomerMessage/SendMessage',
            method: 'post',
            body:data,
            auth
        })
    },
    /**
     * 获取当天聊天记录
     * @param  {string} userId 用户id
     * @return {[type]}        [description]
     */
    getCurrentDateLog(userId, auth) {
        return ajax({
            url: '/CustomerMessage/GetCurrentDateLog?userId=' + userId,
            method: 'get',
            auth
        })
    }
}