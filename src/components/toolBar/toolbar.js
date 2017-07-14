export default {
    name: 'HrToolbar',
    props: {
        isTop: {
            type: Boolean,
            default: false
        },
        more: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShowCustomer: false
        }
    },
    methods: {
        //回到顶部
        toTop() {
            document.body.scrollTop = 0
        },
        //装修报价
        openDecorQuote() {
            this.$emit('openDecorQuote')
        },
        showCustomer() {
            this.isShowCustomer = !this.isShowCustomer
        }
    }
}