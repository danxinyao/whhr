import { decorationEffect as ajax } from 'services'
export default {
    data() {
        return {
            total: 0,
            queryHouseTypesData: [], //装修户型
            queryHouseStylesData: [], //装修类型
            queryHouseAreasData: [], //装修面积
            queryHousePlacesData: [], //装修空间
            effectsList: [], //装修效果列表
            sitesData:[],//装修场所
            query: {
                condition: {
                    decorationEffectID: '',
                    decorationType: 0,
                    houseTypeID: "",
                    houseStyleID: "",
                    houseAreaID: "",
                    housePlaceID: "",
                    houseSiteID: "",
                    thumbnailSizeType: 0,
                },
                pageSize: 40,
                page: 1
            }, 
            tag: [], 
        }
    },
    mounted() {
        this.initData(this.$route.query.id)
    },
    watch: {
        '$route' (to, from) {
            this.initData(to.query.id)
        }
    },
    methods: {
        // 初始化数据
        initData(id) {
            if (id == 1) {
                // 家装
                this.query.condition.decorationType = 0
                this.getQueryHouseTypes()
                this.getQueryHouseStyles()
                this.getQueryHouseAreas()
                this.getQueryHousePlaces()
            }
            else {
                // 工装
                this.query.condition.decorationType = 1
                this.queryHouseSites()
            }
            this.query.page = 1
            this.getQueryDecorationEffects()
        },
        // 删除tag
        delTag(index) {
            const idx = this.tag[index].tagIndex
            if (idx == 1) {
                this.query.condition.houseTypeID = ''
            }
            if (idx == 2) {
                this.query.condition.houseStyleID = ''
            }
            if (idx == 3) {
                this.query.condition.houseAreaID = ''
            }
            if (idx == 4) {
                this.query.condition.housePlaceID = ''
            }
            if (idx == 5) {
                this.query.condition.houseSiteID = ''
            }
            this.tag.splice(index, 1)
            this.query.page = 1
            this.getQueryDecorationEffects()
        },
        //添加tag
        addTag(item, index) {
            if (index == 1) {
                this.query.condition.houseTypeID = item.value
            }
            if (index == 2) {
                this.query.condition.houseStyleID = item.value
            }
            if (index == 3) {
                this.query.condition.houseAreaID = item.value
            }
            if (index == 4) {
                this.query.condition.housePlaceID = item.value
            }
            if (index == 5) {
                this.query.condition.houseSiteID = item.value
            }
            this.tag.forEach((itm, idx) => {
                if (itm.tagIndex === index) {
                    this.tag.splice(idx, 1)
                }
            })
            this.tag.push({
                tagIndex: index,
                tagObj: item
            })
            this.query.page = 1
            this.getQueryDecorationEffects()
        },
        //分页
        changePage(page) {
            this.query.page = page
            this.getQueryDecorationEffects()

        },
        //装修户型
        getQueryHouseTypes() {
            ajax.queryHouseTypes().then((result) => {
                this.queryHouseTypesData = result
            })
        },
        //装修类型
        getQueryHouseStyles() {
            ajax.queryHouseStyles().then((result) => {
                this.queryHouseStylesData = result
            })
        },
        //装修面积
        getQueryHouseAreas() {
            ajax.queryHouseAreas().then((result) => {
                this.queryHouseAreasData = result
            })
        },
        //装修空间
        getQueryHousePlaces() {
            ajax.queryHousePlaces().then((result) => {
                this.queryHousePlacesData = result
            })
        },
        //装修场所
        queryHouseSites() {
            ajax.queryHouseSites().then((result) => {
                this.sitesData = result
            })
        },
        //装修效果列表
        getQueryDecorationEffects() {
            this.effectsList = []
            ajax.queryDecorationEffects(this.query).then((result) => {
                if(result){
                    this.effectsList = result.data
                    this.total = result.totalCount         
                }
            })
        },
        //跳转到详情页面
        toDetail(item) {
            this.$router.push({
                path:'/decorStyleDetail',
                query:{
                    decorationEffectID: item.decorationEffectID
                }
            })
        }
    },
}