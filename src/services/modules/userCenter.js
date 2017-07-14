import ajax from '../fetch'
export default {
    /**
     * 获取用户信息
     * @param  {Boolean} auth 是否需要登录
     */
    getUser(auth = true) {
        return ajax({
            url: '/UserCenter/QueryUser',
            method: 'get',
            auth
        })
    },
    /**
     * 修改用户资料
     * @param  {Boolean} auth 令牌
     * @param  {object}  data 用户资料
     */
    editUserInfo(data, auth = true) {
        return ajax({
            url: '/UserCenter/EditUserInfo',
            method: 'post',
            auth,
            body: data
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
     * 退款单
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 退款状态和分页
     */
    queryRefundOrders(data,auth = true) {
    	return ajax({
    		url: '/UserCenter/QueryRefundOrders',
    		method: 'post',
    		auth,
    		body: data
    	})
    },
    /**
     * 商品收藏
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 商品收藏类型和分页
     */
    queryGoodsFavorites(data,auth = true) {
    	return ajax({
    		url: '/Favorites/QueryGoodsFavorites',
    		method: 'post',
    		auth,
    		body: data
    	})
    },
    /**
     * 装修效果收藏
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 装修效果类型和分页
     */
    queryDecorationEffectFavorites(data,auth = true) {
    	return ajax({
    		url: '/Favorites/QueryDecorationEffectFavorites',
    		method: 'post',
    		auth,
    		body: data
    	})    	
    },
    /**
     * 设计图收藏
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 设计师收藏类型和分页
     */
    queryDesignerDrawingFavorites(data,auth = true) {
    	return ajax({
    		url:'/Favorites/QueryDesignerDrawingFavorites',
    		method: 'post',
    		auth,
    		body: data
    	})
    },
    /**
     * 装修学堂收藏
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 装修学堂类型和分页
     */
    queryArticleFavorites(data,auth = true) {
    	return ajax({
    		url:'/Favorites/QueryArticleFavorites',
    		method: 'post',
    		auth,
    		body: data
    	})
    },
    /**
     * 删除收藏
     * @param  {Boolean} auth 令牌
     * @param  {id} data 收藏id
     */
    delFavorites(data,auth = true) {
    	return ajax({
    		url:'/Favorites/DelFavorites',
    		method: 'post',
    		auth,
    		body:data
    	})    	
    },
    /**
     * 查询收货地址
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 分页
     */
    queryAddressLists(data,auth = true) {
    	return ajax({
    		url:'/AddressList/QueryAddressLists',
    		method: 'post',
    		auth,
    		body: data
    	})      	
    },
    /**
     * 新增收货地址
     * @param  {Boolean} auth 令牌
     * @param  {Object} data 新增地址
     */
    saveAddressList(data,auth = true) {
    	return ajax({
    		url:'/AddressList/SaveAddressList',
    		method: 'post',
    		auth,
    		body: data
    	})      	
    },
    /**
     * 删除收货地址
     * @param  {Boolean} auth 令牌
     * @param  {id} data 收获地址id
     */
    delAddressList(id,auth = true) {
    	return ajax({
    		url:'/AddressList/DelAddressList?addressListId='+id,
    		method: 'post',
    		auth
    	})    	
    },
    /**
     * 确认收货
     * @param  {Boolean} auth 令牌
     * @param  {id} data 收获地址id
     */
    confirmReceipt(data, auth = true) {
    	return ajax({
    		url:'/MallOrder/ConfirmReceipt',
    		method: 'post',
    		auth,
    		body:data
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
    /*
     * 修改绑定手机号码
     * @param  {Object} data 手机号码和验证码
    */
    editUserMobile(mobile,auth = true) {
    	return ajax({
    		url:'/UserCenter/EditUserMobile?newMobile='+mobile,
    		method: 'post',
    		auth
    	})
    },
    /*
     * 获取订单配送状态
     * 
    */
    getOrderDeliveryFlag(auth = true) {
    	return ajax({
    		url:'/DropDownList/GetOrderDeliveryFlag',
    		method: 'get',
    		auth
    	})
    },
    /*
     * 获取订单退款状态
    */
    getOrderRefundFlag(auth = true) {
    	return ajax({
    		url:'/DropDownList/GetOrderRefundFlag',
    		method: 'get',
    		auth
    	})    	
    },
    /*
     * 获取订单状态
    */
    getOrderFlag(auth = true) {
    	return ajax({
    		url:'/DropDownList/GetOrderFlag',
    		method: 'get',
    		auth
    	})    	
    },   
    /*
     * 获取订单配送状态
    */
    getOrderDeliveryFlag(auth = true) {
    	return ajax({
    		url:'/DropDownList/GetOrderDeliveryFlag',
    		method: 'get',
    		auth
    	})    	
    },
    /*
     * 订单详情
    */
    queryOrderDetail(id, auth = true){
    	return ajax({
    		url:'/MallOrder/QueryOrderDetail?id='+id,
    		method: 'get',
    		auth
    	})        	
    },
    /*
    *查询我的订单详情
    */
    queryOrderCenter(data, auth = true){
        return ajax({
            url:'/MallOrder/QueryOrderCenter',
            method: 'post',
            auth,
            body: data
        })          
    },
    /**
     * 获取退货单详情
     * @param  {object}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getRefundOrderDetail(data, auth = true, isShowError = false) {
        return ajax({
            url: '/RefundOrder/QueryRefundOrderDetail',
            method: 'post',
            auth,
            isShowError,
            body: data
        })
    },
    /**
     * 保存退货单
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    saveRefundOrder(data, auth = true) {
        return ajax({
            url: '/RefundOrder/SaveRefundOrder',
            method: 'post',
            auth,
            body: data
        })
    },
    /**
     * 获取最大退款金额
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    getMaxRefundAmount(data, auth = true) {
        return ajax({
            url: '/RefundOrder/QueryMaxRefundAmount?orderId=' + data.orderId + '&itemId=' + data.itemId,
            method: 'get',
            auth
        })
    },
    /**
     * 获取退款原因
     * @return {[type]} [description]
     */
    getRefundCause() {
        return ajax({
            url: '/DropDownList/GetRefundCause',
            method: 'get'
        })
    },
    /**
     * 获取退货原因
     * @return {[type]} [description]
     */
    getRefundGoodsCause() {
        return ajax({
            url: '/DropDownList/GetRefundGoodsCause',
            method: 'get'
        })
    },
    /**
     * 取消退款
     * @param  {[type]}  data [description]
     * @param  {Boolean} auth [description]
     * @return {[type]}       [description]
     */
    cancelRefund(data, auth = true) {
        return ajax({
            url: '/RefundOrder/CancelRefund',
            method: 'post',
            body: data,
            auth
        })
    },
    // 同意退款填写快递信息
    saveDeliveryInfo(data, auth = true) {
        return ajax({
            url: '/RefundOrder/EditDeliveryInfo',
            method: 'post',
            body: data,
            auth
        })
    },
    // 取消未支付的订单
    cancelUnPayOrder(id, auth = true) {
        return ajax({
            url: '/OrderCreation/CancelUnPayOrder',
            method: 'post',
            body: {
                id: id
            },
            auth
        })
    },
    //获取快递公司信息
    getDeliveryCompanyInfo() {
        return ajax({
            url: '/DropDownList/GetDeliveryCompanyInfo',
            method: 'get',
        })
    },
}