import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'HrHead',
    props: {
        active: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            search: '',
            menuData: [
                {
                    menuID: 1,
                    txt: '首页',
                    path: '/home'
                },
                {
                    menuID: 2,
                    txt: '装修效果图',
                    subMenu: [
                        {
                            menuID: 3,
                            txt: '家装',
                            path: '/decorStyleList?id=1'
                        },
                        {
                            menuID: 4,
                            txt: '工装',
                            path: '/decorStyleList?id=2'
                        }
                    ]
                },
                {
                    menuID: 5,
                    txt: '设计师',
                    path: '/designer'
                },
                {
                    menuID: 6,
                    txt: '商城',
                    path: '/mallindex'
                },
                {
                    menuID: 7,
                    txt: '商家入驻',
                    path: '/settled'
                },
                {
                    menuID: 8,
                    txt: '装修学堂',
                    path: '/schoollist?articleType=0'
                }
            ]
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    methods: {
    	...mapActions([
    		'clearAuth'
    	]),
        clickSearch() {
            this.$router.push('/malllist?title=' + this.search)
        },
        goto(path) {
            if (path !== undefined) {
                this.$router.push(path)
            }
        },
        quit(){
        	this.clearAuth()
        	this.$router.push('/home')
        },
    }
}