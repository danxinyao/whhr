import { mall as ajax } from 'services'
import {mapGetters, mapActions} from 'vuex'
export default {
    name: 'HrShoppingcar',
    data() {
    	return {
    		isShow: false,
            isAni: false, // 第一次加载时不显示动画
            loginShow: false,//登录框
            confirmShow: false, // 对话框
            confirm: {
                title: '提示',
                msg: '确定从购物车中移除该商品吗？',
                cancelText: '取消',
                confirmText: '确定'
            },
            idList: [], // 需要删除的商品列表
            isShowCustomer: false
    	}
    },
    computed: {
        ...mapGetters([
            'shoppingCart'
        ])
    },
    methods: {
        ...mapActions([
            'getShoppingCart'
        ]),
    	openRight() {
            if (!this.isShow) {
                if (!this.util.isLogin()) {
                    this.loginShow = true
                    return
                }
            }
            this.isAni = true
    		this.isShow = !this.isShow
            if (this.isShow) {
                this.getShoppingCart()
            }
    	},
        //回到顶部
        toTop() {
            document.body.scrollTop = 0
        },
        ctrNum(item, way) {
            if (way == -1 && item.qty == 1) {
                return
            }
            this.util.msg.loading()
            ajax.editCart({
                barcodeId: item.barcodeId,
                goodsId: item.goodsId,
                qty: way == 0 ? item.qty : way,
                note: item.note,
                installFee: item.installFee,
                activityId: item.activityId,
                activityType: item.activityType
            }).then((result) => {
                this.util.msg.close()
                this.getShoppingCart()
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 删除商品
        delGood(item) {
            this.confirmShow = true
            this.idList = []
            this.idList.push(item.id)
        },
        delCartGoods() {
            this.util.msg.loading()
            ajax.delCartGoods(this.idList).then((result) => {
                this.util.msg.close()
                this.getShoppingCart()
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 去购物车
        goMyCart() {
            if (!this.util.isLogin()) {
                this.loginShow = true
                return
            }
            this.$router.push({
                path: '/MyShoppingCart'
            })
        },
        // 我的订单
        goMyOrder() {
            if(!this.util.isLogin()) {
                this.loginShow = true
                return   
            }
            this.$router.push({
                path: '/myOrder'
            })
        },
        // 去我的收藏
        goMyFavs() {
            if(!this.util.isLogin()) {
                this.loginShow = true
                return   
            }
            this.$router.push({
                path: '/myFavs'
            })
        },
        // 关闭登录弹出框
        closeLoginModal() {
            this.loginShow = false
        },
        // 关闭对话框
        closeConfirm() {
            this.confirmShow = false
        },
        // 确定对话框
        submitConfirm() {
            this.confirmShow = false
            this.delCartGoods()
        },
        // 显示客服
        showCustomer() {
            this.isShowCustomer = !this.isShowCustomer
        }
    },
}
