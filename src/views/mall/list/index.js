import { mall as ajax } from 'services'
export default {
    data() {
        return {
            total: 1,
            goodsList: [],
            breadName: '',
            query: {
                condition: {
                    deptId: '',
                    title: '',
                    orderType: 0,
                    isDesc: false
                },
                pageSize: 40,
                page: 1,
            },
            isSalesDesc: true, // 按销量排序
            isPriceDesc: true // 按价格排序
        }
    },
    watch: {
        '$route.query.title'() {
            this.query.condition.title = this.$route.query.title
            this.getGoodsPageList()
        }
    },
    mounted() {
        this.breadName = this.$route.query.name || this.$route.query.title || '' //三级列表传过来的参数
        this.query.condition.title = this.$route.query.title || ''
        this.query.condition.deptId = this.$route.query.deptID || '' //三级列表传过来的参数
        this.getGoodsPageList()
    },
    methods: {
        // 分页
        changePage(page) {
            this.query.page = page 
            this.getGoodsPageList() //重新查新商品列表
        },
        onChickNav(index) {
            if (index == 1) {
                if (this.query.condition.orderType == index) {
                    this.isSalesDesc = !this.isSalesDesc
                }
                this.query.condition.isDesc = this.isSalesDesc
            }
            else if (index == 2) {
                if (this.query.condition.orderType == index) {
                    this.isPriceDesc = !this.isPriceDesc
                }
                this.query.condition.isDesc = this.isPriceDesc
            }
            else {
                this.query.condition.isDesc = false
            }

            this.query.page = 1
            this.query.condition.orderType = index
            this.getGoodsPageList()
        },
        //查询商品列表接口
        getGoodsPageList() {
            ajax.getGoodsPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.totalCount
            })
        }
    }
}