import {mall as ajax} from 'services'
import HrNav from './components/indexnav/index.vue'
import HrList from './components/malllist/index.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        HrNav,
        HrList,
    },
    data() {
        return {
            threeList: [],//三级列表查询传给组件
        }
    },
    computed: {
        ...mapGetters([
            'shopPage'
        ])
    },
    mounted() {
        this.queryThreeDept()
        this.getShopPage()
    },
    methods: {
        ...mapActions([
            'getShopPage',
            'getShoppingCart'
        ]),
        /**
         * 显示三级分类传给组件
         * @return {[type]} [description]
         */
        queryThreeDept() {
            ajax.queryThreeDept().then((result) => {
                if(result) {
                    this.threeList = result
                }
            })
        }
    }

}
