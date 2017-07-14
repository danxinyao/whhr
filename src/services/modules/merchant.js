import ajax from '../fetch'

export default{
    /**
     * 商家入驻添加
     * @param {[type]}
     * @param {Boolean}
     */
    addMerchant(data) {
        return ajax({
            url: '/MerchantEnter/AddMerchantEnter',
            method: 'post',
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
     * 商家类型
     * 
    */
    getMerchantsType() {
    	return ajax({
    		url:'/DropDownList/GetMerchantsType',
    		method: 'get',
    	})
    },

}