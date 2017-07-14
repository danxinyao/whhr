import {mall as ajax} from 'services'
import {designer as ajx} from 'services'
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            isSizeActive: -1,
            isColorActive: -1,
            isActive: 0,
            currentImgIndex: 0,//控制幻灯片的参数
            currentImgUrl: '', // 当前显示的图片
            selectedGoods: {},//根据选择的条件进行价格匹配
            goodsInfo: {}, // 商品信息
            sizes: [], // 规格
            initSizes: [], // 初始规格
            colors: [], // 颜色
            goodsContent: '', // 商品详情
            supportContent: '',//售后服务
            favoritesCount: 0,
            isMyFavorites: false, // 是否已经收藏
            goodsId: '',
            qty: 1,
            loginShow: false,//弹出登录框
        }
    },
    mounted() {
        this.goodsId = this.$route.query.goodsID
        this.getGoodsDetail()
        this.querySupportContent()
        this.getFavoritesCount()
        if (this.util.isLogin()) {
            this.isFavorites()
        }
    },
    methods: {
        ...mapActions([
            'getShoppingCart'
        ]),
        showImg(index) {
            if (this.goodsInfo.subImgUrls && this.goodsInfo.subImgUrls.length > 0) {
                this.currentImgUrl = this.goodsInfo.subImgUrls[index]
                this.currentImgIndex = index
            }
        },
        //商品详情数据
        getGoodsDetail() {
            ajax.getGoodsDetail(this.goodsId).then((result) => {
                this.goodsInfo = result
                this.goodsContent = result.content
                this.colors = this.util.arrayRemoveRepeatByKey(this.colors, this.goodsInfo.colors, 'value')
                this.initSizes = this.util.arrayRemoveRepeatByKey(this.initSizes, this.goodsInfo.sizes, 'value')
                if (this.colors.length > 0) {
                    this.colorActive(0)
                }
                if (this.goodsInfo.subImgUrls && this.goodsInfo.subImgUrls.length > 0) {
                    this.showImg(0)
                }
            })
        },
        //获取颜色id选中状态
        colorActive(index) {
            this.isColorActive = index

            const skus = this.goodsInfo.skus
            let color = this.colors[index].value
            const size = []

            skus.forEach((sku, index) => {
                size.push({
                    value: sku.sizeId,
                    ischoose: (color == sku.colorId) ? 1 : 0
                })
            })

            const tempSizes = []
            this.sizes = []
            let isExist = false
            this.initSizes.forEach((t) => {
                size.forEach((s) => {
                    isExist = (s.value == t.value)
                    if (isExist) {
                        tempSizes.push({
                            value: t.value,
                            text: t.text,
                            ischoose: s.ischoose
                        })
                    }
                })
            })

            let tempSize = {}
            tempSizes.forEach((t) => {
                if (this.sizes.length > 0) {
                    this.sizes.forEach((item, index) => {
                        if (t.value == item.value) {
                            tempSize = {}
                            if (t.ischoose == 1) {
                                this.sizes.splice(index, 1)
                                this.sizes.push(t)
                            }
                        }
                        else {
                            tempSize = t
                        }
                    })
                    if (tempSize.value) {
                        this.sizes.push(tempSize)
                        tempSize = {}
                    }
                }
                else {
                    this.sizes.push({
                        value: t.value,
                        text: t.text,
                        ischoose: t.ischoose
                    })
                }
            })

            for (let i = 0; i < this.sizes.length; i++) {
                if (this.sizes[i].ischoose == 1) {
                    this.sizeActive(i)
                    break
                }
            }
        },
        //获取size id选中状态
        sizeActive(index) {
            if (this.sizes[index].ischoose == 0) {
                return
            }
            this.isSizeActive = index

            const skus = this.goodsInfo.skus
            skus.forEach((item) => {
                if (item.sizeId == this.sizes[this.isSizeActive].value && item.colorId == this.colors[this.isColorActive].value) {
                    this.selectedGoods = item
                }
            })
        },
        show(active) {
            this.isActive = active
        },
        /*控制商品数量*/
        ctrGoodsNum(item, way) {
            if (way == 1) {
                this.qty++
            }
            else if (way == 0) {
                this.qty--                  
            }
            if(this.qty < 1) {
                this.qty = 1
            }
            else if (this.qty > this.selectedGoods.stockQty) {
                this.qty = this.selectedGoods.stockQty
            }
        },
        //立即购买
        instantShopping() {
            if (!this.util.isLogin()) {
                this.loginShow = true
                return
            }

            this.util.msg.loading()
            ajax.editCart({
                barcodeId: this.selectedGoods.barcodeId,
                goodsId: this.goodsInfo.id,
                qty: this.qty,
                note: '',
                installFee: this.goodsInfo.installFee,
                activityId: this.goodsInfo.activityId,
                activityType: this.goodsInfo.activityType
            }).then((result) => {
                this.util.msg.close()
                this.$router.push('/confirmMyCart')
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        /**
         * 加入购物车
         */
        editCart() {
            if (!this.util.isLogin()) {
                this.loginShow = true
                return
            }

            this.util.msg.loading()
            ajax.editCart({
                barcodeId: this.selectedGoods.barcodeId,
                goodsId: this.goodsInfo.id,
                qty: this.qty,
                note: '',
                installFee: this.goodsInfo.installFee,
                activityId: this.goodsInfo.activityId,
                activityType: this.goodsInfo.activityType
            }).then((result) => {
                this.util.msg.success('添加成功')
                this.getShoppingCart()
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        //弹出去登录的框
        closeLoginModal() {
            this.loginShow = false
        },
        // 获取收藏次数
        getFavoritesCount() {
            ajx.queryFavoritesCount(this.goodsId).then((result) => {
                this.favoritesCount = result
            })
        },
        /*
         * 添加、取消商品收藏
        */
        addFavorites() {
            if(!this.util.isLogin()) {
                this.loginShow = true
                return
            }

            const ajaxMethod = this.isMyFavorites ? ajx.delFavorites : ajx.addFavorites
            this.util.msg.loading()
            ajaxMethod({
                favoritesData: this.goodsId,
                favoritesType: 4 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
            }).then(() => {
                this.util.msg.close()
                this.favoritesCount = this.isMyFavorites ? this.favoritesCount-1 : this.favoritesCount+1
                this.isMyFavorites = !this.isMyFavorites
            })
        },
        /*
         * 判断商品是否收藏
        */
        isFavorites() {
            ajx.isFavorites(this.goodsId).then((result) => {
                this.isMyFavorites = result
            })
        },
        //查询售后信息
        querySupportContent() {
            ajax.querySupportContents().then((result) => {
                if(result && result.length > 0) {
                    this.supportContent = result[0].content
                }
            })
        }
    }
}