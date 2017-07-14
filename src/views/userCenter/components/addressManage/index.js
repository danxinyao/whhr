import {userCenter as ajax} from 'services'

export default {
	data() {
        return {
      	    modalShow : false,
      	    query: {
				pageSize: 20,
				page: 1
      	    },
      	    addressListData:[],
      	    currentInfo:{}, // 当前选中的数据行
      	    isEdit: false
        }
    },
	computed: {

	},
	mounted() {
		this.getQueryAddressLists()
    },
    methods: {
	  	showBox() {
	  		this.isEdit = false
	  		this.modalShow = !this.modalShow
	  	},
	  	/*
	  	* 查询收货地址
	  	*/
	  	getQueryAddressLists() {
	  		this.util.msg.loading()
	  		ajax.queryAddressLists(this.query).then((result) => {
	  			if(result){
		  			this.addressListData = result.data
	  			}
                this.util.msg.close()
	  		})
	  	},
	  	/*
	  	* 删除收货地址
	  	*/
	  	onDelAddressList(addressListId) {
	  		this.util.msg.loading()
	  		ajax.delAddressList(addressListId).then((result)=>{
	  			console.log('删除成功')
	  			this.util.msg.success('删除成功')
	  			this.getQueryAddressLists()
	  		})
	  	},
	  	/*
	  	**传值到子组件 
	  	*/
	  	updateItem(item) {
	  		this.isEdit = true
	  		this.currentInfo = item
	  		// 显示修改主件
	  		this.modalShow = !this.modalShow
	  		
	  	},	  	
    }
}