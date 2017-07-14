import { log as ajax } from 'services'
export default {
	data() {
    	return {
      		stepActive: 0,
			sendSmsAct:{
				mobile:'',
                smsType:2
			},
			form:{
				code:''
			},
			mobileCode:{
				mobile: "",
				code: ""				
			},
			imgSrcList:{
				
			},
			userPwdList: {
			  pwd: '',
			  pwdAgain: '',
              mobile: ''
			},
            smsOverTime: 90,
            isSendSMS: false,
            overTimer: null
      	}
  	},
  	mounted() {
  		this.getVerifyCodeImg()
  	},
  	methods: {
        overTime() {
            this.isSendSMS = true
            if (!this.overTimer) {
                this.overTimer = setInterval(() => {
                    if (this.smsOverTime > 0) {
                        this.smsOverTime--
                    }
                    else {
                        clearInterval(this.overTimer)
                        this.isSendSMS = false
                        this.smsOverTime = 90
                    }
                }, 1000)
            }
        },
  		step() {
  			this.stepActive++
  		},
        stepSub() {
            this.stepActive--
        },
        /**
         * 修改密码
         */    	
    	updateEditUserPwd() {
    		//判断两输入密码是否相等
    		if(this.util.isEmpty(this.userPwdList.pwd)) {
    			this.util.msg.error('密码不能为空')
    			return
    		}
    		
    		if(this.userPwdList.pwd != this.userPwdList.pwdAgain) {
    			this.util.msg.error('两次密码输入不一致')
    			return
    	   }

            this.util.msg.loading()
            ajax.resetUserPwd(this.userPwdList).then((result) => {
                this.util.msg.success('密码设置成功')
                this.stepActive++
            }).catch((error) => {
                this.util.msg.error(error)
            })
    	},
		/*
		 * 获取验证码
		 */
		getSendSmsMobile() {

            if (this.isSendSMS) {
                return
            }
            if(this.util.isEmpty(this.mobileCode.mobile)) {
                this.util.msg.success("请输入手机号码")
                return
            }
            if(!this.util.isMobile(this.mobileCode.mobile)) {
                this.util.msg.success("手机号码格式错误")
                return
            }
            if (this.util.isEmpty(this.form.code)) {
                this.util.msg.success('请输入图形验证码')
                return
            }
            if(this.imgSrcList.code.toLocaleLowerCase() != this.form.code.toLocaleLowerCase()){
                this.util.msg.success("图形验证码错误")
                return
            }
			this.sendSmsAct.mobile = this.mobileCode.mobile
			ajax.sendSms(this.sendSmsAct).then((result) => {
				this.util.msg.success("验证码已发送至手机，请注意查收")
                this.overTime()
			})
		},
    	/*
    	*判断验证码是否正确
    	*/
    	judgeMibleCode(){
            console.log(this.imgSrcList.code.toLocaleLowerCase())
            console.log(this.form.code.toLocaleLowerCase())

    		this.sendSmsAct.mobile = this.mobileCode.mobile
    		if(this.util.isEmpty(this.mobileCode.mobile)) {
    			this.util.msg.success("请输入手机号码")
    			return
    		}
            if(this.imgSrcList.code.toLocaleLowerCase() != this.form.code.toLocaleLowerCase()){
                this.util.msg.success("图形验证码错误")
                return
            }
    		if(this.util.isEmpty(this.mobileCode.code)) {
    			this.util.msg.success("请输入手机验证码")
    			return
    		}
            this.util.msg.loading()
    		ajax.validateCode(this.mobileCode).then((result) => {
                this.util.msg.close()
                this.userPwdList.mobile = this.mobileCode.mobile
    			this.stepActive++
    		}).catch((error) => {
                this.util.msg.error(error)
            })
    	},
    	/*
    	 *获取图片验证码 
    	*/
    	getVerifyCodeImg(){
    		ajax.getVerifyCode().then((result) => {
    			this.imgSrcList = result
    		})
    	}	
  	},
    beforeDestroy() {
        if (this.overTimer) {
            clearInterval(this.overTimer)
            this.overTimer = null
        }
    }
}