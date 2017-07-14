<template>
	<div>
		<hr-head :active="5"></hr-head>
		<div class="detail box">
            <hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item href="/designer">设计师</hr-breadcrumd-item>
            <hr-breadcrumd-item>{{designersInfo.designerName}}</hr-breadcrumd-item>
            </hr-breadcrumd>
			<!-- <div class="intorduction">
                <a href="javascript:void(0)">
                    <span class="picture" v-if="designersInfo.avatar">
                        <img :src="designersInfo.avatar" alt="设计师头像">
                    </span>
                                <span class="picture" v-else>
                                    <img src="../../../assets/images/detail_designer.jpg" alt="设计师头像">
                                </span>
                    <span class="title">{{designersInfo.designerName}}</span>
                    <span class="des">{{designersInfo.designerDesc}}</span>
                </a>
            </div> -->
			<div class="detail_des">
                <div class="inall">
                    <div class="designer clearfix">
                        <div  class="picture" v-if="designersInfo.avatar"><img :src="designersInfo.avatar" alt="设计师头像"></div>
                        <div  class="picture" v-else><img src="../../../assets/images/detail_designer.jpg" alt=""></div>
                        <div class="title">{{designersInfo.designerName}}</div>
                        <div class="des">{{designersInfo.designerDesc}}</div>                        
                    </div>
                    <div class="current_img clearfix">
                        <div class="topImg clearfix">
                            <img :src="currentImgUrl">
                        </div>
                        <div class="active">
                            <div class="left_arrow" @click="arrowLeft">
                                <i class="iconfont icon-zuojiantou"></i>
                            </div>
                            <div class="right_arrow" @click="arrowRight">
                                <i class="iconfont icon-zuoyoujian"></i>
                            </div>
                        </div> 
                    </div>
                </div>
                <div class="gallery-thumbs">
                    <div class="swiper_list clearfix" :style="'width: '+ swiper_list_style_width +'px; left: '+ swiper_list_style_left +'px'">
                        <img :class="[index === current_img_index ? 'active' : '']" :src="item" @click="changeImg(index)" v-for="(item, index) in designersInfo.subImageUrls">
                    </div>
                    <div class="left_arrow" @click="arrowLeft">
                        <i class="iconfont icon-zuojiantou"></i>
                    </div>
                    <div class="right_arrow" @click="arrowRight">
                        <i class="iconfont icon-zuoyoujian"></i>
                    </div>
                </div>
				<div class="des_collect clearfix">
					<div class="left">
						<ul class="clearfix">
							<li>
								<a @click="addFavorites" class="iconfont icon-shoucang" :class="[isMyFavorites ? 'isCheck' : '']" href="javascript:void(0)">
									{{isMyFavorites ? '已收藏' : '收藏'}}<span>{{favoritesCount}}</span>
								</a>
							</li>
							<li>
								<a @click="addThumbsUp" class="iconfont icon-dianzan" :class="[isMyThumbsUp ? 'isCheck' : '']" href="javascript:void(0)">
									{{isMyThumbsUp ? '已点赞' : '点赞'}}<span>{{thumbsUpCount}}</span> 
								</a>
							</li>							
						</ul>

					</div>
					<div class="right">
						<hr-share :share-config="shareConfig"></hr-share>
					</div>
				</div>
			</div>
			<div class="detail_messages">
				<div class="message clearfix">
					<div class="title">
						<p>留言<span>({{messageTotal}})</span></p>
					</div>
					<textarea name="" @input="onInputMessageLength" class="text" v-model="sendMessageData.message" placeholder="随便说说你的想法，或者有什么问题？和大家一起探讨吧"></textarea>
					<div class="number"><span>{{messageCount}}</span>/100</div>
					<a href="javascript:void(0)" @click="sendMessage" class="submit">评论</a>
				</div>
				<div class="messages">
					<ul>
						<li class="clearfix" v-for='item in messageList'>
							<div class="left">
								<div class="picture" v-if="item.userAvatar">
									<img :src="item.userAvatar">
								</div>
                                <div class="picture" v-else>
                                    <img src="../../../assets/images/detail_designer.jpg">
                                </div>
								<div class="des">
									<div class="name">{{item.userName}}</div>
									<div class="say">{{item.message}}</div>
								</div>
							</div>
							<div class="right">{{item.createTime}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr-foot></hr-foot>		
        <hr-login :showLogin="loginShow" @closemodal="closeLoginModal"></hr-login>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .inall {
        border: 1px solid #e6e6e6;
        border-bottom: none;
        .designer {
            padding:25px 0 0px 25px;
            .picture{
                float: left;
                width: 70px;
                height: 70px;
                display: block;
                overflow: hidden;
                border-radius: 50%;
                margin-right: 25px;
                img{
                    width: 100%;
                }
              }
              .title{
                 font-size: 16px;
                 color: @base-color;
                 line-height: 2;
             }
             .des{
                 font-size: 12px;
                 color: @second-color;
                  display: block;
                  line-height: 1.5;
             }         
        }
    }
    .current_img {
        height: 580px;
        width:100%;
        //box-sizing: border-box;
        padding: 55px 0;
        overflow: hidden;
        position: relative;
        //border: 1px solid #e6e6e6;
        //border-bottom: none;

        &:hover {
            .active {
                display: block;
            }
        }
        .active {
            display: none;
        }
        .topImg {
            max-height: 580px;
            overflow: hidden;
            img {
                max-height: 580px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
            }
        }
        .left_arrow, .right_arrow {
            z-index: 3px;
            position: absolute;
            width: 80px;
            line-height: 80px;
            height: 80px;
            color: #b2b2b2;
            top:50%;
            margin-top:-40px;
            cursor: pointer;
            i {
                font-size: 60px;
            }

        }
        .left_arrow {
            left: 30px;
            &:hover {
                color: @primary-color;
            }
        }
        .right_arrow {
            right:30px;
            &:hover {
                color: @primary-color;
            }
        }
    }
    .gallery-thumbs {
        background-color: @match-color;
        height: 100px;
        position: relative;
        overflow: hidden;
        width: 100%;
        .swiper_list {
            margin: 14px 50px;
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            overflow: hidden;
            transition: left .2s;
            img {
                float: left;
                display: inline-block;
                cursor: pointer;
                margin: 0 6px;
                width: 68px;
                height: 68px;
                border: 2px solid @match-color;
                &.active {
                    border: 2px solid @primary-color;
                }
            }
        }
        .left_arrow, .right_arrow {
            position: absolute;
            top: 14px;
            width: 50px;
            height: 72px;
            line-height: 72px;
            cursor: pointer;
            text-align: center;
            background-color: @match-color;
            color: #b2b2b2;
            &:hover {
                color: @primary-color;
            }
            i {
                font-size: 40px;
                font-weight: bold;
            }
        }
        .left_arrow {
            left: 0;
        }
        .right_arrow {
            right: 0;
        }
    }
//设计师详情页detail
.detail{
        position: relative;
        //个人简介
        .intorduction{
            width: 220px;
            //height: 262px;
            border: 1px solid #e6e6e6;
            position: absolute;
            top:50px;
            right:-250px;
            a{  
                padding:30px 20px ;
                width: 180px;
                display: block;
                text-align: center;
                line-height: 2;
                .picture{
                    display: block;
                    width: 100px;
                    height: 100px;
                    overflow: hidden;
                    margin:0 auto;
                    border-radius: 50%;
                    img{
                        width: 100%;
                    }
                }
                .title{
                   font-size: 16px;
                   color: @base-color;
                    display: block;
                    line-height: 3;
               }
               .des{
                   font-size: 12px;
                   color: @second-color;
                    display: block;
                    text-align: left;
               
               } 
            }
        }
        //描述
    .detail_des{ 
        .des_collect{
            height: 30px;
            margin-top: 20px;
            margin-bottom: 20px;
            .left{
                float: left;
                ul{
                    li{
                        margin-right: 20px;
                        float:left;
                        a {
                            border: 1px solid @step-line-color;
                            box-sizing: border-box;
                            width: 110px;
                            height: 36px;
                            display: block;
                            border-radius: 18px;
                            color:#333333;
                            text-align: center;
                            line-height: 36px;
                            font-size: 14px;
                            span {
                                margin-left: 5px;
                            }
                        }
                        a.isCheck {
                            color: @primary-color;
                        }
                    }                   
                }
            }
            .right{
                float:right;
                ul{
                    li{
                        float:left;
                        line-height: 30px;
                        margin-left: 10px;
                        color: #999999;
                        &:nth-child(2) a{
                            background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 0px;    
                        }
                        &:nth-child(3) a{
                            background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 -33px;    
                        }
                        &:nth-child(4) a{
                            background:url(../../../assets/images/detail_sprict.jpg)no-repeat 0 -64px;    
                        }
                        a{
                            width: 30px;
                            height: 30px;
                            display: block;
                            border-radius: 50%;
                        }
                    }                   
                }
            }
        }
    }
}

//detail_messages留言模块
.detail .detail_messages{
    .message{
            position: relative;      

        .title{
            font-size: 20px;
            color: @second-color;
            line-height: 1.5;
        }
        .text{
            width: 100%;
            height: 188px;
            border: 1px solid @step-line-color;
            font-size: 14px;
            line-height: 2;
            padding:20px;
            resize:none;
            outline: none;
            box-sizing: border-box;
            overflow-x: hidden;
        } 
        .number{
            font-size: 14px;
            color:@explain-color;
            position: absolute;
            right:16px;
            bottom:72px;
            span{
                color:@primary-color;
            }
        }           
        }
        .submit{
            float:right;
            width: 120px;
            height: 40px;
            background-color: @primary-color;
            border-radius: 5px;
            margin-top:15px;
            outline: none;
            font-size: 16px;
            color:@white-color;
            line-height: 40px;
            text-align: center;

    }
    .messages{
        padding:40px 0 80px 0;
        ul{
            li{
                border-bottom: 1px solid @step-line-color;
                font-size: 14px;
                padding: 30px 0;
                .left{
                    width: 750px;
                    .picture{
                        float: left;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        overflow: hidden;
                        margin-right:15px;
                        img{
                            width: 100%;
                        }
                    }
                    .des {
                        /*float: left;*/
                        margin-left: 70px;
                        font-size: 14px;
                        line-height: 2;
                       .name{
                            color: @primary-color;
                        }
                        .say{
                        color: @second-color;
                        }
                    }
                }
                .right{
                    width: 440px;
                    text-align: right;
                    color:@explain-color;
                }
            }
        }

    }
}

</style>
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>