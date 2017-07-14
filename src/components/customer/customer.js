import {customer as ajax} from 'services'
import {mapGetters} from 'vuex'
export default {
    name: 'HrCustomer',
    props: {
        isShow: false
    },
    data() {
        return {
            form: {
                userId: '',
                content: ''
            },
            msgList: [],
            timer: null
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    watch: {
        isShow() {
            if (this.isShow) {
                if (!this.timer) {
                    this.timer = setInterval(() => {
                        if (this.form.userId != '' || this.util.isLogin()) {
                            this.getCurrentDateLog()
                        }
                    }, 2000)
                }
            }
            else {
                this.msgList = []
                if (this.timer) {
                    clearInterval(this.timer)
                    this.timer = null
                }
            }
        }
    },
    methods: {
        // 发送消息
        submit() {
            if (this.form.content == '')
                return
            ajax.sendMessage(this.form, this.util.isLogin()).then((result) => {
                this.msgList.push({
                    content: this.form.content,
                    avatar: this.util.isLogin() ? this.userInfo.avatar : null,
                    messageType: 0,
                    createTime: this.util.currentTime(true)
                })
                this.form.userId = result
                this.form.content = ''
                setTimeout(() => {
                    this.$refs.customer.scrollTop = this.$refs.customer.scrollHeight
                }, 100)
            })
        },
        // 获取当天聊天记录
        getCurrentDateLog() {
            ajax.getCurrentDateLog(this.form.userId, this.util.isLogin()).then((result) => {
                this.msgList = result
                setTimeout(() => {
                    this.$refs.customer.scrollTop = this.$refs.customer.scrollHeight
                }, 100)
            })
        },
        close() {
            this.$emit('close')
        }
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
            this.timer = null
        }
    }
}