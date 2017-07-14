import {mall as ajax} from 'services'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            modalShow: false,
            addressList: [],//查询收货地址列表
            query: {
                pageSize: 20,
                page: 1
            },
            stepActive: 1,//步骤条active
            form: {
                addressListId: '',
                note: ''
            }
        }
    },
    mounted() {
        this.getShoppingCart()
        this.queryAddressLists()
    },
    computed: {
        ...mapGetters([
            'shoppingCart'
        ]),       
    },    
    methods: {
    	...mapActions([
    		'getShoppingCart'
    	]),     	
        /**
         * 控制新增地址弹出框
         * @return {[type]} [description]
         */
        showBox() {
            this.modalShow = !this.modalShow
        },
        /**
         * 查询收货地址
         */
        queryAddressLists() {
            ajax.queryAddressLists(this.query).then((result) => {
                this.addressList = result.data 
                this.addressList.forEach((item) => {
                    if (item.defaultFlag == 1) {
                        this.form.addressListId = item.addressListID
                    }
                })
            })
        },
        //设置默认地址
        setDefaultAddressList(addressListId) {
            ajax.setDefaultAddressList(addressListId).then((result) => {
                this.queryAddressLists()
            })
        },
        /*
         * 去结算
        */
        settle(){
            this.util.msg.close()
            ajax.createOrder(this.form).then((result) => {
                this.$router.push('/application?id=' + result)
            }).catch((error) => {
                this.util.msg.error(error)
            })
        }
    }
}