import { home as ajax } from 'services'
export default {
    props: {
        list: Object
    },
	data() {
		return {
			form: {
				name: "",
				state: "",
				city: "",
				district: "",
				mobile: "",
				flag: 0
			},
            regionStyles: {
                backgroundColor: '#f2f2f2'
            },
            //文章
            query: {
                condition: {
                    articleType: 0,
                },
                pageSize: 5,
                page: 1
            },
            articleList: [],//文章
            sendForm: {
                mobile: '',
                smsType: 3
            },
            codeDate: {
                mobile: '',
                code: ''
            }
		}
	},
    mounted() {
        this.queryArticle()
    },
    methods: {
        //获取验证吗
        send() {
            this.sendForm.mobile = this.form.mobile
            ajax.sndSms(this.sendForm).then((result) => {
                this.util.msg.success('发送验证码成功！')
            })
        },
        //验证
        validateCode() {
            // 验证省市区
            if(this.util.isEmpty(this.form.state) || this.util.isEmpty(this.form.city) || this.util.isEmpty(this.form.district)) {
                this.util.msg.error('请选择预约地址')
                return
            }
            // 验证内容
            if(this.util.isEmpty(this.form.name)) {
                this.util.msg.error('请填写姓名')
                return
            } 
            //判断手机号码
            if (this.util.isEmpty(this.form.mobile) || !this.util.isMobile(this.form.mobile)) {
                this.util.msg.error('手机号码有误')
                return
            }
            if (this.util.isEmpty(this.codeDate.code)) {
                this.util.msg.error('请输入手机验证码')
                return
            }

            this.codeDate.mobile = this.form.mobile
            ajax.validateCode(this.codeDate).then((result) => {
                this.submit()
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 在线预约提交
        submit() {
            ajax.addSubscribe(this.form).then((result) => {
                this.util.msg.success('恭喜你，预约成功')
            })
        },
        //省市区
        changeRegions(regions) {
            this.form.state = regions.state
            this.form.city = regions.city
            this.form.district = regions.district
        },
        //文章
        queryArticle() {
            ajax.queryArticles(this.query).then((result) => {
                this.articleList = result.data
            })
        }
    }
}
