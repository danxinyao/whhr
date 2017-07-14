import HrMenu from './components/leftMenu/index.vue'
import HrContent from './components/rightContent/index.vue'
import {home as ajax} from 'services'
export default {
    components: {
        HrMenu,
        HrContent
    },
	data() {
     	return {
            menu: '',
            introInfo: {}
    	}
 	},
    watch: {
        '$route.query.name'() {
            this.menu = this.$route.query.name
            this.getCompanyInfo()
        }
    },
    mounted() {
        this.menu = this.$route.query.name || '关于我们'
        this.getCompanyInfo()
    },
    methods: {
        getCompanyInfo() {
            ajax.getCompanyInfo(this.menu).then((result) => {
                this.introInfo = result
            })
        }
    }
}