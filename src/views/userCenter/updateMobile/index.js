import {userCenter as ajax} from 'services'
import HrUsernav from '../components/usernav/index.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
	components: {
		HrUsernav,
	},
	data() {
      return {
 			isShow : 0,
			showLi :true,
			sendSmsAct:{
				mobile:'',
				smsType:3
			},
			phone:'',
			info:{},
			mobileCode:{
				mobile:'',
				code:''
			},
			newMobile:'',
			code:''
			
      }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    }, 
	mounted() {
		this.info = this.userInfo
		//隐藏手机号码
		this.phone = this.phone = this.info.phone.substring(0,3) + '****' + this.info.phone.substring(7,this.info.phone.length)
    },    
	methods : {
        ...mapActions([
            'setUserInfo'
        ]),
		Show() {
			this.judgeMibleCode()
		},
		noShow() {
			this.isShow --
		},
		/*
		 * 获取验证码
		 */
		sendSmsMobile() {
			console.log(this.sendSmsAct)
			this.sendSmsAct.mobile = this.info.phone
			ajax.sendSms(this.sendSmsAct).then((result) => {
				this.util.msg.success("验证码发送成功!")
			})
		},
		/*
		 * 二次获取验证码
		*/
		getSendSmsMobile() {
			this.sendSmsAct.mobile = this.newMobile			
			ajax.sendSms(this.sendSmsAct).then((result) => {
				this.util.msg.success("验证码发送成功!")
			})
		},		
    	/*
    	*判断验证码是否正确
    	*/
    	judgeMibleCode(){
    		this.mobileCode.mobile = this.info.phone
    		ajax.validateCode(this.mobileCode).then((result)=>{
    			this.isShow ++
    		})
    	},
    	/*
    	 * 修改手机
    	*/    	
    	updateMobile(){
            this.util.msg.loading()
    		ajax.editUserMobile(this.newMobile).then((result) => {
                this.util.msg.success('手机号码修改成功')
                ajax.getUser().then((res) => {
                    this.setUserInfo(res)
                })
    		})
    	},
    	/*
    	 * 提交
    	*/
    	judegUpdateMobile(){
    		this.mobileCode.mobile = this.newMobile
    		this.mobileCode.code = this.code
    		ajax.validateCode(this.mobileCode).then((result)=>{
    			this.isShow ++
    			this.updateMobile()
    		})    		
    	},
	},
}