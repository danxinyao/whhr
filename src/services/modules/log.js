/**
 * 登录注册
 */

import ajax from '../fetch'
import {rootPath} from '../fetch/config'

export default {
    /**
     * 登录
     * @return {[type]}
     */
    login(data) {
        return ajax({
                url: '/oauth2/token',
                formJson: false,
                method: 'post',
                body: data,
                headersData: { 'Content-Type': 'application/x-www-form-urlencoded' },
                path: rootPath.substring(0, rootPath.length - 4)
            })
    },
    /**
     * 注册
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    register(data, auth = true) {
        return ajax({
            url: '/Login/UserRegister',
            method: 'post',
            auth,
            isShowFullLoading: true,
            body: data
        })
    },
    /*
     *获取验证码
     * @param  {Object} data 手机号码
     */
    sendSms(data) {
    	return ajax({
    		url:'/Common/SendSms',
    		method: 'post',
    		body:data
    	})
    },
    /*
     * 获取图形验证码
    */
    getVerifyCode() {
    	return ajax({
    		url:'/Common/GetVerifyCode',
    		method: 'get',
    	})
    },
    /*
     * 判断手机验证码是否正确
     * @param  {Object} data 手机号码和验证码
    */
    validateCode(data) {
    	return ajax({
    		url:'/Common/ValidateCode',
    		method: 'post',
    		body:data
    	})
    },
    /**
     * 修改密码
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 用户密码
     */
    editUserPwd(data, auth = true) {
    	return ajax({
    		url: '/UserCenter/EditUserPwd',
    		method: 'post',
            auth,
    		body: data
    	})
    },
    /**
     * 忘记密码，重新设置密码
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    resetUserPwd(data) {
        return ajax({
            url: '/UserCenter/ResetUserPwd',
            method: 'post',
            body: data
        })
    }
}