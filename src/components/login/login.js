import { log, userCenter } from 'services'
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'HrLogin',
    props: {
        showLogin: Boolean
    },    
    data() {
        return {
            isShow: false,
            isActive: true,
            form: {
                username: '',
                password: '',
                grant_type: 'password',
                scope: ['pc']
            }
        }
    },
    methods: {
        ...mapActions([
            'setAuth',
            'setUserInfo',
            'getShoppingCart'
        ]),
        /**
         * 登录
         */
        login() {
            if(this.util.isEmpty(this.form.username)) {
                this.util.msg.error('请输入用户名')
                return
            }
            if(this.util.isEmpty(this.form.password)) {
                this.util.msg.error('请输入密码')
                return
            }
            this.util.msg.loading()
            log.login(this.form).then((result) => {
                if (result) {
                    this.setAuth(result.access_token)
                    userCenter.getUser().then((res) => {
                        this.setUserInfo(res)
                        this.util.msg.success('登录成功')
                        this.showBoxs()
                        this.getShoppingCart()
                    })
                }
            })
        },
        showHelp() {
            this.isActive = false
        },
        showBoxs() {
            this.$emit('closemodal')
        }        
    }
}