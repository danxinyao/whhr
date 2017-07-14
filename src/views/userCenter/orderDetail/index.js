import {userCenter as ajax} from 'services'
import HrUsernav from '../components/usernav/index.vue'
export default {
	components: {
		HrUsernav,
	},
	data() {
		return {
			stepActive: -1,
			mallOrderId: '',
			orderInfo: {}, //订单详情
		}
	},
	mounted() {
		this.mallOrderId = this.$route.query.mallOrderId
		this.getQueryMallOrder()
	},
	methods: {
		/*
		 * 订单详情
		*/
		getQueryMallOrder(){
			ajax.queryOrderDetail(this.mallOrderId).then((result) =>{
				this.orderInfo = result
				this.orderInfo.orderFlagTimeline.forEach((item, index) => {
					if (item.hasValue) {
						this.stepActive = index
					}
				})
			})
		}
	}
}
