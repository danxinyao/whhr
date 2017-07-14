import {userCenter as ajax} from 'services'

export default {
	data() {
        return {
	      	total: 0,
	        showActive: 1,
	        queryOrdersList: [],
	        //我的订单参数
	        ordersData: {
				condition: {
				   flag: '',
                   isRefund: false,
                   sheet: ''
				},
				pageSize: 10,
				page: 1        	
	        },
            cancelOrder: {},
            confirm: {
                title: '提示',
                msg: '确定取消该订单吗？',
                cancelText: '取消',
                confirmText: '确定'
            },
            confirmShow: false
        }
    },
	mounted() {
		this.getQueryOrdersList(-1, false, 1)
    },
    methods: {
        changePage(page) {
        	this.ordersData.page = page
        	this.getQueryOrdersList(this.ordersData.condition.flag, this.ordersData.condition.isRefund, this.showActive)
        },
        // 弹出框关闭按钮
        closeConfirm() {
            this.confirmShow = false
        },
        // 弹出框确定按钮
        submitConfirm() {
            this.confirmShow = false
            this.util.msg.loading()
            ajax.cancelUnPayOrder(this.cancelOrder.mallOrderID).then((result) => {
                this.util.msg.success('取消订单成功')
                this.getQueryOrdersList(this.ordersData.condition.flag, this.ordersData.condition.isRefund, this.showActive)
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        /*
        **个人订单
        */
        getQueryOrdersList(flag, isRefund, val) {
        	// 查询参数初始化
            if (val != this.showActive) {
                this.ordersData.page = 1
            }
            this.ordersData.condition.flag = flag
            this.ordersData.condition.isRefund = isRefund
            
            this.showActive = val

        	this.util.msg.loading()        	
        	ajax.queryOrderCenter(this.ordersData).then((result) =>{
                this.queryOrdersList = result.data  
                this.total = result.totalCount 
        		this.util.msg.close()
        	})
        },
        /*
        **退款单
        */
        getQueryRefundOrdersList(val) {
        	this.util.msg.loading()
        	this.showActive = val;        	
        	ajax.queryRefundOrders(this.refundOrdersList).then((result) =>{
        		console.log(result)
        		if(result){
	        		this.queryOrdersList = result.data
	        		this.queryOrdersList.totalCount = this.total        			
        		} else {
        			this.queryOrdersList = []
        			this.total = 1      			
        		}
        		this.util.msg.close()
        	})
        },
        // 取消未支付订单
        cancelUnPayOrder(item) {
            this.cancelOrder = item
            this.confirmShow = true
        },
        /*
        *确认收货
        */
        flagConfirm(item) {
            this.util.msg.loading()
        	ajax.confirmReceipt({
                id: item.mallOrderID
            }).then((result) => {
                this.util.msg.success('操作成功')
                this.ordersData.page = 1
        		this.getQueryOrdersList(this.ordersData.condition.flag, this.ordersData.condition.isRefund, this.showActive)
        	}).catch((error) => {
                this.util.msg.error(error)
            })
        }
   }
}