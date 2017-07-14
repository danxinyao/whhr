import {school as ajax} from "services"
export default {
	data() {
        return {
            total: 1,
            current: 1,
            list:[],
            adList: [],//广告位图片
            query: {
                condition: {
                    articleType: 0,//0知识1案例-1全部
                },
                pageSize: 10,
                page: 1
            },
      	}
  	},
    mounted() {
        this.initData(this.$route.query.articleType)
    },
    watch: {
        '$route' (to, from) {
            this.initData(to.query.articleType)
        }
    },
    // mounted() {
    //     this.query.condition.articleType = this.$route.query.articleType
    //     this.questList()
    //     this.queryAdvertisings()
    // },
  	methods:{
        // 初始化数据
        initData(articleType) {
            if (articleType == 1) {
                // 案例
                this.query.condition.articleType = 1
            }
            else {
                // 知识
                this.query.condition.articleType = 0

            }
            this.query.page = 1
            this.questList()
            this.queryAdvertisings()
            
        },
        changePage(page) {
            this.query.page = page
            this.questList()
        },
        /*
         * 获取装修学堂
         * 
        */
        questList() {
            ajax.queryArticles(this.query).then((result) => {
            	if(result){
	                this.list = result.data
	                this.total = result.totalCount            		
            	}
            })
        },
        // 获取广告位
        queryAdvertisings() {
            ajax.queryAdvertisings(3).then((result) => {
                if(result.length<6) {
                    this.adList = result
                }else {
                    this.adList = result.slice(0,5)
                }
            })
        },
        //下个页面传递的东西
        goPath(id) {
            this.$router.push({
                path: '/schooldetail',
                query: {
                    articleID: id,
                    articleType: this.query.condition.articleType,
                }
            })
        }
  	}
}