/**
 * 首页
 */

import ajax from '../fetch'

export default{
    /**
     * 首页轮播图
     * @param  {Number} pType 1首页 2商城 3文章
     * @return {Object}       Data
     */
    queryAdvertisings(pType) {
        return ajax({
            url: '/HomePage/QueryAdvertisings?positionType=' + pType,
            method: 'get'
        })
    },
    /**
     * 首页自定义页面
     * @param  {Number} pType 1首页 2商城
     * @return {Object}       Data
     */
    queryDefinePages(pType) {
        return ajax({
            url: '/HomePage/QueryDefinePages?pageType=' + pType,
            method: 'get',
/*            body: { 
                pageType: pType
            }*/
        })
    },
    /**
     * 获取官网首页列表
     * @return {[type]} [description]
     */
    getHomePage() {
        return ajax({
            url: '/CustomPage/QueryHomePage',
            method: 'get'
        })
    },
    /**
     * 查询商城首页楼层
     * @return {[type]} [description]
     */
    getShopPage() {
        return ajax({
            url: '/CustomPage/QueryShopPage',
            method: 'get'
        })
    },
    /**
     * 在线预约
     * @param {Object} data {state、city、district、name、mobile}
     */
    addSubscribe(data) {
        return ajax({
            url: '/HomePage/AddSubscribe',
            method: 'post',
            body: data
        })
    },
    /**
     * 推荐设计师
     * @param  {Number} flag [description]
     * @return {[type]}      [description]
     */
    queryRecmendDesigners(flag) {
        return ajax({
            url: '/HomePage/QueryRecmendDesigners?recommendedFlag='+flag,
            method: 'get',
/*            body: {
                recommendedFlag: flag
            }*/
        })
    },
    /**
     * 装修报价
     * @param {[type]} data [description]
     */
    addDecorationQuotation(data) {
        return ajax({
            url: '/HomePage/AddDecorationQuotation',
            method: 'post',
            body: data
        })
    },
    /**
     * 意见反馈
     * @param {[type]} data [description]
     */
    addFeedback(data, auth) {
        return ajax({
            url: '/HomePage/AddFeedback',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 省市区
     * @param  {string} parentID 上层ID
     * @param  {number} levelID  1国家，2省，3市，4区
     * @return {[array]}          [description]
     */
    queryRegions(data) {
        return ajax({
            url: '/HomePage/QueryRegions',
            method: 'post',
            body: data
        })
    },
    //文章列表
    queryArticles(data) {
        return ajax({
            url: '/Article/QueryArticles',
            method: 'post',
            body: data
        })
    },
    //发送验证码
    sndSms(data) {
        return ajax({
            url: '/Common/SendSms',
            method: 'post',
            body: data
        })
    },
    //验证验证码是否正确
    validateCode(data) {
        return ajax({
            url: '/Common/ValidateCode',
            method: 'post',
            body: data
        })
    },
    // 获取关于我们 联系我们等
    getCompanyInfo(name) {
        return ajax({
            url: '/Article/GetCompanyInfo?name=' + name,
            method: 'get'
        })
    },
    // 获取公司介绍文章列表
    getCompanyInfos() {
        return ajax({
            url: '/Article/GetCompanyInfos',
            method: 'get'
        })
    }
}