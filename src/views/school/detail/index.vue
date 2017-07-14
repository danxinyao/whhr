<template>
	<div class="schoolDetail">
		<hr-head></hr-head>
		<div class="clearfix box">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item v-if="articleType == 1" href="/schoollist?articleType=1">案例展示 ></hr-breadcrumd-item>
                <hr-breadcrumd-item v-if="articleType == 0" href="/schoollist?articleType=0">装修学堂</hr-breadcrumd-item>
                <hr-breadcrumd-item>{{ article.name }}</hr-breadcrumd-item>
            </hr-breadcrumd>
            <div class="schoolDetailLeft">           	
				<div class="schoolDetailDes clearfix">
					<div class="desTitle">
						<h3>{{article.name}}</h3>
						<span>{{article.createTime}}</span>
						<span>
							<i class="iconfont icon-yuedu"></i>
							阅读 {{article.clickCount }}
						</span>
						<span>
							<i class="iconfont icon-shoucang"></i>
							收藏 {{favoritesCount}}
						</span>
					</div>
					<div class="desMain" v-html="article.content">
					</div>
				</div>
				<div class="fenxiangs clearfix">
					<div  class="shoucang" @click="addFavorites">
						<a href="javascript:void(0)" :class="[isMyFavorites ? 'isCheck' : '']">
							<i class="iconfont icon-shoucang" ></i>
							{{isMyFavorites ? '已收藏' : '收藏'}} {{favoritesCount}}
						</a>					
					</div>
					<hr-share :share-config="shareConfig"></hr-share>
				</div>
				<div class="messages">
					<div class="messageTitle">留言（{{messageTotal}}）</div>
					<textarea name="" id="" cols="30" rows="10" @input="onInputMessageLength" v-model="sendMessageData.message" placeholder="随便说说你的想法，或者有什么问题？和大家一起探讨吧">
					</textarea>
					<span class="abs"><span>{{messageCount}}</span>/100</span>
					<a class="submit" @click="sendMessage" href="javascript:void(0)">评论</a>
				</div>
				<div class="messageMain clearfix">
					<ul>
						<li v-for="item in messageList" class="clearfix">
							<div class="messageLeft clearfix">
								<div class="pic" v-if="item.userAvatar">
									<img :src="item.userAvatar">
								</div>
								<div class="pic" v-else>
									<img src="../../../assets/images/detail_designer.jpg">
								</div>
								<div class="des">
									<div class="name">{{item.userName}}</div>
									<div class="say">{{item.message}}</div>
								</div>
							</div>
							<div class="messageRight">{{item.createTime}}</div>
						</li>
					</ul>
				</div>
            </div>
			<div class="schoolDetailAd">
				<div v-for="item in adList">
					<a :href="item.url">
						<img :src="item.imageUrl" alt="">
					</a>
				</div>
			</div>
		</div>
		<hr-foot></hr-foot>
		<hr-login :showLogin="loginShow" @closemodal="closeLoginModal"></hr-login>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .onActive {
    	color: #F28100;
    }
    .activeShow {
    	background-color: #F28100;
    }
 .schoolDetail {
 	.schoolDetailLeft {
 		float: left;
		.schoolDetailDes {
			box-sizing: border-box;
			width: 880px;
			border: 1px solid #e6e6e6;
			padding: 40px 25px 30px 25px;
			line-height: 1.5;
			.desTitle {
				text-align: center;
				padding-bottom: 30px;
				border-bottom: 1px #e5e5e5 dashed;
				h3 {
					font-size: 24px;
					color: @base-color;
					font-weight: normal;
				}
				span {
					margin-right: 50px;
					font-size: 12px;
					color: @explain-color;
					&:last-of-type {
						margin-right: 0;
					}
				}
			}
			.desDaoyv {
				font-size: 14px;
				color: @base-color;
				padding-top: 30px;
				margin-top:30px;
				border-top: 1px dashed #e6e6e6;
			}
			.desMain {
				font-size: 14px;
				color: @base-color;
				padding: 20px 0;//30 0
			}
		}
		.fenxiangs {
			box-sizing: border-box;
			margin: 20px 0 60px 0; 
			.shoucang {
				float: left;
				width: 110px;
				height: 36px;
				border: 1px solid #e6e6e6;
				border-radius: 36px;
				text-align: center;
				line-height: 36px;
				a {
					font-size: 14px;
					color: @base-color;
				}
				a.isCheck {
                    color: @primary-color;
                }
			}
			.fenxiang {
				float: right;
				font-size: 12px;
				color: @explain-color;
				line-height:36px;
				vertical-align: middle;
			}
		}
		.messages {
			position: relative;
			overflow: hidden;
			.messageTitle {
				font-size: 20px;
				color: @base-color;
				line-height: 2;
			}
			textarea {
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
           		 overflow-y: hidden;
	
			}
			.submit {
				float: right;
				display: inline-block;
				width: 120px;
				height: 40px;
				text-align: center;
				color: @white-color;
				background-color: @primary-color;
				font-size: 15px;
				border-radius: 4px;
				line-height: 40px;
				margin-top:15px;
				margin-bottom: 30px;
				transition: all .2s;
				&:hover {
					opacity: 0.8;
				}
			}
			.abs {
				position: absolute;
				right:16px;
                bottom:100px;
                color: #999999;
                span {
                	color: @primary-color;
                }
			}
		}
		.messageMain {
			width: 100%;
			ul {
				margin-bottom: 80px;
				li {
					//box-sizing: border-box;
					//height: 130px;
					padding: 30px 0;
					border-bottom: 1px solid @match-color;
					.messageLeft {
						float: left;
						width: 620px;
						.pic {
							float: left;
							width: 50px;
							height: 50px;
							border-radius: 50%;
							overflow: hidden;
							img {
								display: inline-block;
								width: 100%;
							}
						}
						.des {
							/*float: left;*/
							margin-left: 70px;
							font-size: 14px;
							line-height: 2;
							.name {
								color: @primary-color;
							}
							.say {
								color:@second-color;
							}
						}
					}
					.messageRight {
						float: right;
						font-size: 14px;
						color:@explain-color;
					}
				}
			}
		}
 	}
	.schoolDetailAd {
		float: right;
		width: 310px;
		text-align: right;
		font-size: 0;
		margin-bottom: 80px;
		a {
			display: inline-block;
			width: 280px;
			border: 1px solid #e6e6e6;
			margin-bottom: 30px;
			img {
				width: 100%;
				height: auto;
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