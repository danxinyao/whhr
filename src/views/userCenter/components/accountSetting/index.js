import { userCenter as ajax } from 'services'
import { mapGetters, mapActions } from 'vuex'
import { upload } from 'services'

export default {
	data() {
		return {
			isShow: 0,
			showLi: true,
			phone:'',
			//修改密码参数
			userPwdList: {
			  pwd: '',
			  pwdAgain: ''
			},
            info: {},
    		imgSrcList:{},
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
            stateInfo: '',
            cityInfo: '',
            districtInfo: '',
            regionStyles: {
                backgroundColor: '#f2f2f2'
            },
            //isClickSen:true,
		}
	},
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    mounted () {
        this.info = this.userInfo
        this.stateInfo = this.info.state 
        this.cityInfo = this.info.city 
        this.districtInfo = this.info.district
    	this.getVerifyCodeImg()
    	//隐藏手机号码
    	this.phone = this.info.phone.substring(0,3) + '****' + this.info.phone.substring(7,this.info.phone.length)
    },
	methods: {
        ...mapActions([
            'setUserInfo'
        ]),
        // 上传图片
        uploadImage(e) {
            const files = e.target.files
            if (!files) {
                return
            }
            this.uploadFiles(files)
            this.$refs.input.value = null
        },
        uploadFiles(files) {
            let postFiles = Array.prototype.slice.call(files)
            if (postFiles.length === 0) return
            postFiles.forEach(file => {
                this.upload(file)
            })
        },
        upload(file) {
            upload.uploadFile(file).then((result) => {
                this.info.avatar = result.filePath
            })
        },
        // 保存用户信息
        submit() {
            this.util.msg.loading()
            ajax.editUserInfo(this.info).then(() => {
				this.util.msg.success('修改成功')
                this.getUserInfo()
            })
        },
		/*
		 * 返回上一部
		*/
		noShow() {
			this.isShow --
			this.getVerifyCodeImg()
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
    		ajax.editUserPwd(this.userPwdList).then((result) => {
	    	  this.isShow ++
              this.util.msg.close()
              this.getUserInfo()
    		}).catch((error) => {
                this.util.msg.error(error)
            })
    	},
		/*
		 * 获取验证码
		 */
		getSendSmsMobile() {
            if(!this.form.code){
                this.util.msg.error('请先填写图形验证码')
                return
            }
            if(this.imgSrcList.code.toLocaleLowerCase() != this.form.code.toLocaleLowerCase()) {
                this.util.msg.error('图形验证码输入不正确')
                return
            }
			this.sendSmsAct.mobile = this.info.phone
			ajax.sendSms(this.sendSmsAct).then((result) => {
				this.util.msg.success("验证码发送成功")
			})

		},  	
    	/*
    	 *获取图片验证码 
    	*/
    	getVerifyCodeImg(){
    		ajax.getVerifyCode().then((result)=> {
    			this.imgSrcList = result
    		})
    	},
    	/*
    	*判断手机验证码是否正确
    	*/
    	judgeMibleCode() {
            this.util.msg.loading()
            if(!this.form.code){
                this.util.msg.error('请先填写图形验证码')
                return
            }
            if(this.imgSrcList.code.toLocaleLowerCase() != this.form.code.toLocaleLowerCase()) {
                this.util.msg.error('图形验证码输入不正确')
                return
            }
    		if(this.util.isEmpty(this.mobileCode.code)){
    			this.util.msg.error("请输入手机验证码")
    			return
    		}
    		this.mobileCode.mobile = this.info.phone
    		ajax.validateCode(this.mobileCode).then((result)=> {
    			this.isShow ++
    			this.util.msg.close()
    		}).catch((error) => {
                this.util.msg.error(error)
            })
    	},
        /*
         * 省市区选择
        */
        changeRegions(regions) {
        	this.info.state = regions.state
        	this.info.city = regions.city
        	this.info.district = regions.district
        },
        // 获取最新的用户信息
        getUserInfo() {
            ajax.getUser().then((res) => {
                this.setUserInfo(res)
            })
        }
	}
}
