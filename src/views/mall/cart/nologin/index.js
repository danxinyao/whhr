import { mall as ajax } from 'services'
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            selectedAll: false,
            confirmShow: false, // 对话框
            confirm: {
                title: '提示',
                msg: '确定从购物车中移除该商品吗？',
                cancelText: '取消',
                confirmText: '确定'
            },
            idList: [] // 需要删除的商品列表
        }
    },
    mounted() {
        this.getShoppingCart()
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
        //改变购物车产品数量
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
        orderSelected(selected) {
        },
        //全选
        selectAll() {
        },
        //删除选择的商品
        delSelectGood(item) {
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
        // 关闭对话框
        closeConfirm() {
            this.confirmShow = false
        },
        // 确定对话框
        submitConfirm() {
            this.confirmShow = false
            this.delCartGoods()
        }
    }
}