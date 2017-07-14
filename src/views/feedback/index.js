import { home as ajax } from 'services'
export default {
    data() {
        return {
            mobile: '',
            content: '',
            isSuccess: false,
            form: {
                message: "",
                mobile: ""
            }

        }
    },
    mounted() {
    },
    methods: {
        submit() {
            //判断内容为空
            if(this.util.isEmpty(this.form.message)) {
                this.util.msg.error('请填写内容')
                return
            }
            //判断手机号码
            if(this.util.isEmpty(this.form.mobile) || !this.util.isMobile(this.form.mobile)) {
                this.util.msg.error('手机号码有误')
                return 
            }
            this.util.msg.loading()
           ajax.addFeedback(this.form, this.util.isLogin()).then((result) => {
                this.util.msg.success('反馈成功')
                this.isSuccess = true
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
    }
}