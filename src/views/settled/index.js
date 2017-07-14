import { merchant as ajax } from 'services'
export default {
    data() {
        return {
            form: {
                name: '',
                mobile: '',
                company: '',
                state: '',
                city: '',
                district: '',
                merchantsType: 1,
                brand: ''
            },
            merchantsTypeList:[],
            isSuccess: false,
			mobileCode:{
				mobile: '',
				code: ''				
			},
            regionStyles: {
                backgroundColor: '#f2f2f2'
            },
        }
    },
    mounted(){
    	this.getMerchantsTypeList()
    },
    methods: {
        /**
         * 商家入驻提交
         */
        submit() {      
            ajax.addMerchant(this.form).then((result) => {
                this.util.msg.close()
            	this.isSuccess = true
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        /*
        * 选择入驻类型
        */
        onRadioNum(e) {
       	    this.merchantsTypeList.forEach((obj)=>{
       	    	if(obj.value == e.target.value) {
       	    		this.form.merchantsType = obj.sortId
       	    	}
       	    })
        },
        /*
         * 获取商家类型
        */
        getMerchantsTypeList(){
        	ajax.getMerchantsType().then((result) =>{
        		this.merchantsTypeList = result
        	})
        },
        /*
         * 省市区选择
        */
        changeRegions(regions) {
        	this.form.state = regions.state
        	this.form.city = regions.city
        	this.form.district = regions.district
        },
		/*
		 * 获取验证码
		 */
		getSendSmsMobile() {
            //判断手机号码
            if(this.util.isEmpty(this.form.mobile) || !this.util.isMobile(this.form.mobile)) {
                this.util.msg.error('请填写正确的手机号码')
                return 
            }
            this.util.msg.loading()
			ajax.sendSms({
                mobile: this.form.mobile,
                smsType:3
            }).then((result) => {
                this.util.msg.success('验证码发送成功，请在手机上查看')
			}).catch((error) => {
                this.util.msg.error(error)
            })
		},
    	/*
    	*判断验证码是否正确
    	*/
    	judgeMibleCode(){
            //判断内容为空
            if(this.util.isEmpty(this.form.name)) {
                this.util.msg.error('请填写姓名')
                return
            }
            //判断手机号码
            if(this.util.isEmpty(this.form.mobile) || !this.util.isMobile(this.form.mobile)) {
                this.util.msg.error('请填写正确的手机号码')
                return 
            }
            //判断内容为空
            if(this.util.isEmpty(this.form.company)) {
                this.util.msg.error('请填写您的公司名')
                return
            }
            if(this.util.isEmpty(this.form.brand)) {
                this.util.msg.error('请填写您的品牌')
                return
            }

    		this.mobileCode.mobile = this.form.mobile
            this.util.msg.loading()
    		ajax.validateCode(this.mobileCode).then((result) => {
    			this.submit()
    		}).catch((error) => {
                this.util.msg.error(error)
            })
    	},
    }
}