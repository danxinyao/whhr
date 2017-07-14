import { log, userCenter } from 'services'
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
            isShow: false, // 默认显示账号登录模块
            form: {
                username: '',
                password: '',
                grant_type: 'password',
                scope: ['pc']
            }
        }
    },
    mounted() {
        //this.login()
    },
    methods: {
        ...mapActions([
            'setAuth',
            'setUserInfo'
        ]),
        /**
         * 登录
         */
        login() {
            this.util.msg.loading()
            log.login(this.form).then((result) => {
                if (result) {
                    this.setAuth(result.access_token)
                    userCenter.getUser().then((res) => {
                        this.util.msg.success('登录成功')
                        this.setUserInfo(res)
                        setTimeout(() => {
                            this.$router.push('/home')
                        }, 1000)
                    })
                }
            })
        }
    }
}