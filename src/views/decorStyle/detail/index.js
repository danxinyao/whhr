import {decorationEffect as ajax} from 'services'
import {designer as ajx} from 'services'
export default {
    data() {
            return {
                decorationEffectID: '',//查询苏需要的id
                decorStyleObject: {}, // 效果图
                currentImg: '',
                current_img_index: 0,
                swiper_list_style_width: 2000, // 缩略图列表长度
                swiper_list_style_left: 0, // 缩略图滚动距离
                swiper_list_img_width: 84, // 单张缩略图所占宽度
                loginShow: false,//控制登录弹出框
                thumbsUpCount: 0, // 点赞次数
                favoritesCount: 0, // 收藏次数
                isMyThumbsUp: false, // 是否已经点赞
                isMyFavorites: false, // 是否已收藏
                shareConfig: {
                    title: '',
                    description: '',
                    image: ''
                }
            }
        },
        mounted() {
            this.decorationEffectID = this.$route.query.decorationEffectID
            this.queryDecorationEffect()
            this.getThumbsUpCount()
            this.getFavoritesCount()
            if (this.util.isLogin()) {
                this.isThumbsUp()
                this.isFavorites()
            }
        },
        methods: {
            // 小图切换大图
            changeImg(index) {
                this.currentImg = this.decorStyleObject.subImageUrls[index]
                this.current_img_index = index
                this.swiperMove()
            },
            // 缩略图左移
            arrowLeft() {
                this.current_img_index--
                if (this.current_img_index < 0) {
                    this.current_img_index = 0
                }

                this.changeImg(this.current_img_index)
            },
            // 缩略图右移
            arrowRight() {
                this.current_img_index++
                const len = this.decorStyleObject.subImageUrls.length
                if (this.current_img_index > len - 1) {
                    this.current_img_index = len - 1
                }
                
                this.changeImg(this.current_img_index)
            },
            // 控制缩略图位移
            swiperMove() {
                const len = this.decorStyleObject.subImageUrls.length - 1
                if (this.current_img_index < 6 || len - this.current_img_index < 6)
                    return
                this.swiper_list_style_left = -(this.current_img_index - 6) * this.swiper_list_img_width
            },
            /*
             * 获取装修效果图详情
            */
            queryDecorationEffect() {
                ajax.queryDecorationEffect(this.decorationEffectID).then((result) => {                	
                    this.decorStyleObject = result
                    this.changeImg(0)
                    this.shareConfig.image = this.decorStyleObject.mainImageUrl
                    this.shareConfig.title = this.decorStyleObject.name
                })
            },
            // 获取点赞次数
            getThumbsUpCount() {
                ajx.queryThumbsUpCount(this.decorationEffectID).then((result) => {
                    this.thumbsUpCount = result
                })
            },
            // 获取收藏次数
            getFavoritesCount() {
                ajx.queryFavoritesCount(this.decorationEffectID).then((result) => {
                    this.favoritesCount = result
                })
            },
            // 是否已点赞
            isThumbsUp() {
                ajx.isThumbsUp(this.decorationEffectID).then((result) => {
                    this.isMyThumbsUp = result
                })
            },
            // 是否已收藏
            isFavorites() {
                ajx.isFavorites(this.decorationEffectID).then((result) => {
                    this.isMyFavorites = result
                })
            },
            // 收藏
            addFavorites() {
                if (!this.util.isLogin()) {
                    this.loginShow = true
                    return
                }

                const ajaxMethod = this.isMyFavorites ? ajx.delFavorites : ajx.addFavorites
                this.util.msg.loading()
                ajaxMethod({
                    favoritesData: this.decorationEffectID,
                    favoritesType: 1 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
                }).then(() => {
                    this.util.msg.close()
                    this.favoritesCount = this.isMyFavorites ? this.favoritesCount-1 : this.favoritesCount+1
                    this.isMyFavorites = !this.isMyFavorites
                })
            },
            // 点赞
            addThumbsUp() {
                if (!this.util.isLogin()) {
                    this.loginShow = true
                    return
                }

                const ajaxMethod = this.isMyThumbsUp ? ajx.delThumbsUp : ajx.addThumbsUp
                this.util.msg.loading()
                ajaxMethod({
                    thumbsUpData: this.decorationEffectID,
                    thumbsUpType: 1 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
                }).then(() => {
                    this.util.msg.close()
                    this.thumbsUpCount = this.isMyThumbsUp ? this.thumbsUpCount-1 : this.thumbsUpCount+1
                    this.isMyThumbsUp = !this.isMyThumbsUp
                })
            },
            //控制弹出框
            closeLoginModal() {
                this.loginShow = false
            }
        },
}