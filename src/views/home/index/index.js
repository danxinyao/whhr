import { mapGetters, mapActions } from 'vuex'
import HrBanner from './components/banner/index.vue' // 广告banner
import HrDecorstep from './components/decorStep/index.vue' // 装修流程
import HrDecorstyle from './components/decorStyle/index.vue' // 装修效果图
import HrHousemall from './components/houseMall/index.vue' // 家居商城
import HrCase from './components/case/index.vue' // 案例展示
import HrSchool from './components/school/index.vue' // 装修学堂
import HrSettled from './components/settled/index.vue' // 入驻
import HrDecorquote from './components/decorQuote/index.vue' // 快速获取装修报价

export default {
    components: {
        HrBanner,
        HrDecorstep,
        HrDecorstyle,
        HrHousemall,
        HrCase,
        HrSchool,
        HrSettled,
        HrDecorquote
    },
    data() {
        return {
            isDecorquoteShow: false, //是否显示装修报价
        }
    },
    computed: {
        ...mapGetters([
            'homeBannerList',
            'recmendDesigner',
            'homePage',
            'homeQuoteStatus'
        ])
    },
    mounted() {
        // 进入首页5秒打开装修报价
        setTimeout(() => {
            if (this.homeQuoteStatus === 0) {
                this.isDecorquoteShow = true
                this.sethomeDecorQuoteStatus()
            }
        }, 5000)
        this.getHomeBanner() // 首页轮播图
        this.getRecmendDesigner() // 推荐设计师
        this.getHomePage() // 自定义页面
    },
    methods: {
        ...mapActions([
            'getHomePage',
            'getRecmendDesigner',
            'getHomeBanner',
            'sethomeDecorQuoteStatus'
        ]),
        // 打开/关闭装修报价
        decorQuote() {
            this.isDecorquoteShow = !this.isDecorquoteShow
            if (this.isDecorquoteShow) {
                this.sethomeDecorQuoteStatus()
            }
        }
    },
}