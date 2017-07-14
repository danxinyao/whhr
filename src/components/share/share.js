import qr from 'qr.js'
export default {
    name: 'HrShare',
    props: {
        shareConfig: {
            type: Object
        }
    },
    data() {
        return {
            config: {
                url: '',
                source: '',
                title: '',
                description: '',
                image: '',
                sites: ['qzone', 'qq', 'weibo', 'wechat'],
                wechatQrcodeTitle: '微信扫一扫：分享',
                wechatQrcodeHelper: '<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>',
                weibo: '',
                qzone: '',
                wechat: ''
            }
        }
    },
    watch: {
        shareConfig: {
            handler: function(val, oldVal) {
                this.initConfig()
            },
            deep: true
        }
    },
    mounted() {
        this.initConfig()
    },
    methods: {
        initConfig() {
            this.config.url = encodeURI(window.location.href)
            this.config.source = encodeURI(window.location.href)
            this.config.title = encodeURIComponent(this.shareConfig.title)
            this.config.description = encodeURIComponent(this.shareConfig.description)
            this.config.image = this.shareConfig.image

            this.config.weibo = 'http://service.weibo.com/share/share.php?url='+ this.config.url +'&title='+ this.config.title +'&desc='+ this.config.description +'&pic='+ this.config.image +'&appkey='
            this.config.qzone = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ this.config.url +'&title='+ this.config.title +'&pics='+ this.config.image +'&desc='+ this.config.description +'&summary='+ this.config.description +'&site='+ this.config.source +''
            setTimeout(() => {
                this.config.wechat = this.createImageData(this.config.url)
            }, 1000)
        },
        // 生成二维码
        createImageData(url) {
            var size = 100
            var bgColor = '#fff'
            var fgColor = '#000'
            var $qr = this.$refs.qr
            var qrcode = qr(url)

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

            return $qr.toDataURL('image/png')
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