import {designer as ajax} from 'services'
import {mapGetters} from 'vuex'
export default {
    data() {
            return {
	            designerDrawingID:"", // 图库id
                designersInfo: {}, // 设计师图库详情
                loginShow: false,//控制登录弹出框
                currentImgUrl: '', // 当前显示的图片地址
                current_img_index: 0,
                swiper_list_style_width: 2000, // 缩略图列表长度
                swiper_list_style_left: 0, // 缩略图滚动距离
                swiper_list_img_width: 84, // 单张缩略图所占宽度
                thumbsUpCount: 0, // 点赞次数
                favoritesCount: 0, // 收藏次数
                isMyThumbsUp: false, // 是否已经点赞
                isMyFavorites: false, // 是否已收藏
                messageList: [],
                messageTotal: 0,
                sendMessageData: {
                    message: '',
                    type: 2,
                    refId: ''
                },
                messageCount: 0,
                query: {
                    condition: {
                        messageBoardType: 2,
                        messageBoardData: ''
                    },
                    pageSize: 10,
                    page: 1
                },
                shareConfig: {
                    title: '',
                    description: '',
                    image: ''
                }
            }
        },
        mounted() {
        	//传过来的ID
        	this.designerDrawingID = this.$route.query.designerDrawingID
            this.sendMessageData.refId = this.designerDrawingID
        	this.query.condition.messageBoardData = this.designerDrawingID
            this.getDesignerDrawing()
            this.queryMessageBoardsData()
            this.getThumbsUpCount()
            this.getFavoritesCount()
            if (this.util.isLogin()) {
                this.isThumbsUp()
                this.isFavorites()
            }
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {
            // 小图切换大图
            changeImg(index) {
                this.currentImgUrl = this.designersInfo.subImageUrls[index]
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
                const len = this.designersInfo.subImageUrls.length
                if (this.current_img_index > len - 1) {
                    this.current_img_index = len - 1
                }
                
                this.changeImg(this.current_img_index)
            },
            // 控制缩略图位移
            swiperMove() {
                const len = this.designersInfo.subImageUrls.length - 1
                if (this.current_img_index < 6 || len - this.current_img_index < 6)
                    return
                this.swiper_list_style_left = -(this.current_img_index - 6) * this.swiper_list_img_width
            },
	        /*
	         * 设计师详情
	        */
	        getDesignerDrawing() {
	            ajax.queryDesignerDrawing(this.designerDrawingID).then((result) => {
	                this.designersInfo = result
                    // 初始化缩略图列表长度
                    this.swiper_list_style_width = this.designersInfo.subImageUrls.length * this.swiper_list_img_width
                    this.changeImg(0)
                    this.shareConfig.image = this.decorStyleObject.mainImageUrl
                    this.shareConfig.title = this.decorStyleObject.name
	            })
	        },
            // 加载评论列表
            queryMessageBoardsData() {
                ajax.queryMessageBoardsData(this.query).then((result) => {
                    this.messageList = result.data
                    this.messageTotal = result.totalCount
                })
            },
            // 获取点赞次数
            getThumbsUpCount() {
                ajax.queryThumbsUpCount(this.designerDrawingID).then((result) => {
                    this.thumbsUpCount = result
                })
            },
            // 获取收藏次数
            getFavoritesCount() {
                ajax.queryFavoritesCount(this.designerDrawingID).then((result) => {
                    this.favoritesCount = result
                })
            },
            // 是否已点赞
            isThumbsUp() {
                ajax.isThumbsUp(this.designerDrawingID).then((result) => {
                    this.isMyThumbsUp = result
                })
            },
            // 是否已收藏
            isFavorites() {
                ajax.isFavorites(this.designerDrawingID).then((result) => {
                    this.isMyFavorites = result
                })
            },
            // 收藏
            addFavorites() {
                if (!this.util.isLogin()) {
                    this.loginShow = true
                    return
                }

                const ajaxMethod = this.isMyFavorites ? ajax.delFavorites : ajax.addFavorites
                this.util.msg.loading()
                ajaxMethod({
                    favoritesData: this.designerDrawingID,
                    favoritesType: 2 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
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

                const ajaxMethod = this.isMyThumbsUp ? ajax.delThumbsUp : ajax.addThumbsUp
                this.util.msg.loading()
                ajaxMethod({
                    thumbsUpData: this.designerDrawingID,
                    thumbsUpType: 2 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
                }).then(() => {
                    this.util.msg.close()
                    this.thumbsUpCount = this.isMyThumbsUp ? this.thumbsUpCount-1 : this.thumbsUpCount+1
                    this.isMyThumbsUp = !this.isMyThumbsUp
                })
            },
            onInputMessageLength(e){
            	this.sendMessageData.message = e.target.value
            	this.messageCount = this.sendMessageData.message.length
            },
            // 发布评论
            sendMessage() {
                if (!this.util.isLogin()) {
                    this.loginShow = true
                    return
                }
                if (this.util.isEmpty(this.sendMessageData.message)) {
                    this.util.msg.error('请输入要评论的内容')
                    return
                }
                if (this.messageCount > 100) {
                    this.util.msg.error('您输入的内容过长')
                    return
                }
                this.util.msg.loading()
                const mes = this.sendMessageData.message
                ajax.addMessageBoard(this.sendMessageData).then(() => {
                    this.util.msg.success('评论成功')
                    this.sendMessageData.message = ''
                    this.messageTotal++
                    this.messageList.unshift({
                        userAvatar: this.userInfo.avatar,
                        userName: this.userInfo.name,
                        message: mes,
                        createTime: this.util.currentTime(true)
                    })
                })
            },
            //控制弹出框
            closeLoginModal() {
                this.loginShow = false
            }
        }
}