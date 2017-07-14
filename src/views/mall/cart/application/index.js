import {mall as ajax} from 'services'
import qr from 'qr.js'

export default {
	data() {
        return {
            orderId: '',
            orderInfo: {},
            payInfo: {},
            form: {
                id: '',
                payType: 2
            },
            showPay: false,
            weixinQrCode: '',
            val: '',
            loopTimer: null
        }
    },
    mounted() {
        if (this.$route.query.id) {
            this.orderId = this.$route.query.id
            this.form.id = this.orderId
            this.getUnPayOrderInfo()
        }
        else {
            this.$router.push('/mallindex')
        }
    },
    methods: {
        // 获取订单信息
        getUnPayOrderInfo() {
            this.util.msg.loading()
            ajax.getUnPayOrderInfo(this.orderId).then((result) => {
                this.util.msg.close()
                this.orderInfo = result
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 生成支付订单
        generatePayOrder() {
            this.util.msg.loading()
            ajax.generatePayOrder(this.form).then((result) => {
                this.payInfo = result
                this.showPay = true
                this.val = result.code
                setTimeout(() => {
                    this.util.msg.close()
                    this.createImageData()
                }, 1000)

                if (!this.loopTimer) {
                    this.loopTimer = setInterval(() => {
                        this.getOrderStatus()
                    }, 3000)
                }
                
            }).catch((error) => {
                this.util.msg.error(error)
            })
        },
        // 付款
        pay() {
            this.generatePayOrder()
        },
        // 实时获取订单的支付状态
        getOrderStatus() {
            ajax.getOrderStatus(this.orderId).then((result) => {
                if (result > 0) {
                    clearInterval(this.loopTimer)
                    this.loopTimer = null
                    this.$router.push('/paysuccess')
                }
            })
        },
        // 生成二维码
        createImageData() {
            var size = 220
            var bgColor = '#fff'
            var fgColor = '#000'
            var $qr = this.$refs.qr
            var qrcode = qr(this.val)

            var ctx = $qr.getContext('2d')
            var cells = qrcode.modules
            var tileW = size / cells.length
            var tileH = size / cells.length
            var scale = (window.devicePixelRatio || 1) / getBackingStorePixelRatio(ctx)

            $qr.height = $qr.width = size * scale
            ctx.scale(scale, scale)

            cells.forEach((row, rdx) => {
                row.forEach((cell, cdx) => {
                    ctx.fillStyle = cell ? fgColor : bgColor
                    var w = (Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW))
                    var h = (Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH))
                    ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h)
                })
            })

            this.weixinQrCode = $qr.toDataURL('image/png')
        }
    },
    beforeDestroy() {
        if (this.loopTimer) {
            clearInterval(this.loopTimer)
            this.loopTimer = null
        }
    }
}

function getBackingStorePixelRatio(ctx) {
    return (
        ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1
    )
}