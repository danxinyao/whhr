import {designer as ajax} from 'services'
export default {
	data() {
        return {
            total: 1,
            queryDesignersInfoList: [],
            query: {
				condition: {
				    decorationType: -1,
				    name: ""
				  },
				pageSize: 40,
				page: 1
            },
            decorationTypeObj: [
                {
                    text: -1,
                    name: '全部'
                },
                {
                    text: 0,
                    name: '家装'
                },
                {
                    text: 1,
                    name: '工装'
                },
            ],
        }
    },
    mounted() {
        if (this.$route.query.name) {
            this.query.condition.name = this.$route.query.name
        }
        this.getQueryDesignerDrawings()
    },
    methods: {
        changePage(page) {
            this.query.page = page
            this.getQueryDesignerDrawings()
        },
        /*
        *模糊搜索设计师 
        */
        search() {
            this.query.page = 1
            this.getQueryDesignerDrawings()
        },
        /*
         * 设计师列表
        */
        getQueryDesignerDrawings() {
            ajax.queryDesignerDrawings(this.query).then((result) => {
                this.queryDesignersInfoList = result.data
                this.total = result.totalCount
            })
        },
        /*
        *设计师分类查询
        */
        onCahngeDecoration(){
            this.getQueryDesignerDrawings()
        }
    }
}