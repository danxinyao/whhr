import {userCenter as ajax} from 'services'
export default {
    name: 'HrAddaddress',
    data() {
    	return {
    		addressList:{
    		},
    		initForm: {
    			address: "",
				linkMan: "",
				mobile: "",
				state: "",
				city: "",
				district: "",
				defaultFlag: 0,
				addressListID:'',
				zipCode:''
    		},
            stateInfo: '',
            cityInfo: '',
            districtInfo: '',
            regionStyles: {
                backgroundColor: '#f2f2f2'
            },
    	}
    },
	mounted() {
		this.addressList = this.initForm
    },
    props: {
        show : Boolean,
        isEdit: Boolean,
        info : {
        	type : Object
        }
    },
    methods: {
    	/*
    	 * 同步数据
    	*/ 
    	select() {
    		this.$emit('select')
    	},
        showBoxs() {
            this.$emit('closemodal')
        },
        /*
         * 新增收获地址
        */
        pushAddAddressList() {
        	//判断姓名
        	console.log(this.addressList)
        	if(this.util.isEmpty(this.addressList.linkMan)) {
        		this.util.msg.success('请填写收货人姓名')
        		return
        	}
        	//判断手机号码
	        if(this.util.isEmpty(this.addressList.mobile) || !this.util.isMobile(this.addressList.mobile)){
	            this.util.msg.success('手机号码有误')
	            return 
	        } 	
            //判断内容为空
            if(this.util.isEmpty(this.addressList.state) || this.util.isEmpty(this.addressList.city) || this.util.isEmpty(this.addressList.district)) {
                this.util.msg.success('请选择收货地址')
                return
            }        	       	
	        //邮编验证
        	if(this.util.isEmpty(this.addressList.zipCode)) {
        		this.util.msg.success('请填写邮编')
        		return
        	}
        	//判断详细收获地址
        	if(this.util.isEmpty(this.addressList.address)) {
        		this.util.msg.success('请填写详细收货地址')
        		return
        	}        	
        	
        	this.util.msg.loading()
        	this.addressList.defaultFlag = this.addressList.defaultFlag ? 1 : 0
        	ajax.saveAddressList(this.addressList).then((result)=>{
        		this.showBoxs()
                this.addressList = {
                    address: "",
                    linkMan: "",
                    mobile: "",
                    state: "",
                    city: "",
                    district: "",
                    defaultFlag: 0,
                    addressListID:'',
                    zipCode:''
                }
                this.util.msg.success('保存成功')
                this.select()
        	})
        },
        /*
         * 省市区选择
        */
        changeRegions(regions) {
        	this.addressList.state = regions.state
        	this.addressList.city = regions.city
        	this.addressList.district = regions.district
        	//console.log(regions)
        	
        },
    },
    watch:{
    	/*
    	 * 点击新增或修改时的状态
    	*/
    	isEdit() {
    		if (this.isEdit) {
    			//console.log('修改')
                this.addressList = this.info

                this.stateInfo = this.addressList.state
                this.cityInfo = this.addressList.city
                this.districtInfo = this.addressList.district
	    	}
	    	else {
	    		//console.log('新增')
	    		this.addressList = this.initForm
                this.stateInfo = ''
                this.cityInfo = ''
                this.districtInfo = ''		
	    		
	    	}
    	},
    }
}