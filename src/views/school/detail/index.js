import {school as ajax} from "services"
import {designer as ajx} from 'services'
import {mapGetters} from 'vuex'
export default {
	data() {
        return {
            articleType: '',//路由传递过来的，用了、来控制标题显示了banner替换
            articleID: '',
            article: {},
            adList: [],//广告位图片
            loginShow: false,//控制弹出框
            favoritesCount: 0, // 收藏次数
            isMyFavorites: false, // 是否已收藏
            messageList: [],
            messageTotal: 0,
            sendMessageData: {
                message: '',
                type: 3,
                refId: ''
            },
            messageCount: 0,
            query: {
                condition: {
                    messageBoardType: 3,
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
        this.queryAdvertisings()//广告位
        this.articleID = this.$route.query.articleID
        this.articleType = this.$route.query.articleType //路由传递过来的，用了、来控制标题显示了banner替换
        this.query.condition.messageBoardData = this.articleID
        this.sendMessageData.refId = this.articleID
        this.requestArticle()
        this.queryMessageBoardsData()
        this.getFavoritesCount()
        if (this.util.isLogin()) {
            this.isFavorites()
        }
    },
    computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
	methods: {
        // 获取广告位
        queryAdvertisings() {
            ajax.queryAdvertisings(3).then((result) => {
                if(result.length<6) {
                    this.adList = result
                }else {
                    this.adList = result.slice(0,5)
                }
            })
        },
		/*
		*装修学堂详情 
		*/
        requestArticle() {
            ajax.queryArticle(this.articleID).then((result) => {
                this.article = result
                this.shareConfig.title = this.article.name
                this.shareConfig.description = this.article.description
                this.shareConfig.image = this.article.imageUrl
            })
        },
        /*
         * 请求评论列表
         */
        queryMessageBoardsData() {
        	ajx.queryMessageBoardsData(this.query).then((result) => {
        		if(result){
        			this.messageList = result.data
                    this.messageTotal = result.totalCount
        		}
        	})
        },
        // 获取收藏次数
        getFavoritesCount() {
            ajx.queryFavoritesCount(this.articleID).then((result) => {
                this.favoritesCount = result
            })
        },
        // 是否已收藏
        isFavorites() {
            ajx.isFavorites(this.articleID).then((result) => {
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
                favoritesData: this.articleID,
                favoritesType: 3 // 1装修效果图，2设计师图库， 3装修学堂， 4商品
            }).then(() => {
                this.util.msg.close()
                this.favoritesCount = this.isMyFavorites ? this.favoritesCount-1 : this.favoritesCount+1
                this.isMyFavorites = !this.isMyFavorites
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
            ajx.addMessageBoard(this.sendMessageData).then(() => {
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