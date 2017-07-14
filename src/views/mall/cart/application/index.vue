<template>
	<div>
		<hr-head :active="6"></hr-head>
		<div class="application box" v-if="!showPay">
			<div class="appPrice clearfix">
				<div class="priceLeft">
					<i class="iconfont icon-tijiao"></i>
					订单提交成功，您的订单将于<span> {{orderInfo.lastPayTime}} </span>后取消，请您尽快完成付款！					
				</div>
				<div class="priceRight">
					应付金额：
					<span><span>¥</span> {{orderInfo.totalAmount || '0.00'}}</span>
				</div>
			</div>
			<div class="appMethods">
				<div class="methodsTitle">
					支付方式
				</div>
				<div class="methodsNav">
					<div class="nav">平台支付</div>
					<form class="list clearfix">
						<input type="radio" name="sex" v-model="form.payType" value="2" id="zhifubao">
						<label for="zhifubao">
							<img src="../../../../assets/images/application_zhifubao.jpg" height="27" width="94" alt="">
						</label>
						<input type="radio" name="sex" v-model="form.payType" value="1" id="wechatzhifu">
						<label for="wechatzhifu">
							<img src="../../../../assets/images/application_wechat.jpg" height="26" width="27" alt="">
							微信支付
						</label>
					</form> 
				</div>
				<div class="fukuan">
					<a href="javascript:void(0)" @click="pay">去付款</a>
				</div>
			</div>			
		</div>
		<!-- 支付方式 -->
		<div class="payment box" v-else>
			<div class="otherWay">
				<a href="javascript:void(0)" @click="showPay = false">选择其他支付方式</a>
			</div>
			<div class="paymentMain">
				<div class="mainTitle">
					<img src="../../../../assets/images/application_wechat.jpg" height="26" width="27" alt="" v-if="form.payType == 1">
					<img src="../../../../assets/images/application_zhifubao.jpg" height="27" width="94" v-if="form.payType == 2">
					{{form.payType == 1 ? '微信支付' : '支付宝支付'}}
				</div>
				<div class="mainContent clearfix">
					<div class="contentLeft">
						<div class="contentTop">
							<div class="price"><span>¥ </span>{{payInfo.totalAmount}}</div>
							<div class="des">应付金额</div>
						</div>
						<div class="contentBottom">							
							<div>
								创建时间：
								<span>{{payInfo.createTime}}</span>
							</div>
							<div class="phone">
								热线电话：
								<span>400-0631-400</span>
							</div>
						</div>
					</div>
					<div class="contentRight">
						<div class="erweima">
							<div class="erweimaBox">
								<canvas style="width: 100%; height: 100%; display: none" id="canvas" ref="qr"></canvas>
								<img :src="weixinQrCode">
							</div>
						</div>
						<div class="erweimabottom clearfix">
							<div class="erweimaleft">
								<i class="iconfont icon-saoma"></i>
							</div>
							<div class="erweimaright">
								<p>
									请使用{{form.payType == 1 ? '微信' : '支付宝'}}扫一扫
								</p>
								<p>
									扫描二维码支付	
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 	//提交订单
 .application {
 	.appPrice {
 		box-sizing: border-box;
 		width: 100%;
 		height: 100px;
 		background-color: #f6f6f6;
 		border: 1px solid #e6e6e6;
 		line-height: 100px;
 		margin:60px 0;
 		padding: 0 50px;
 		font-size: 16px;
 		color: @base-color;
 		.priceLeft {
 			float: left;
 			vertical-align: middle;
 			span {
 				color: #e70013;
 			}
 			i{
 				font-size: 40px;
 				color: @primary-color;
 				vertical-align: middle;
 			}
 		}
 		.priceRight {
			float: right;
			span {
				color: #e70013;
				font-size: 24px;
				span{
					font-size: 14px;
				}
			}
 		}
 	}
 	.appMethods {
 		color: @base-color;
 		font-size: 14px;
 		.methodsTitle {
 			font-size: 18px;
 			line-height: 2;
 		}
 		.methodsNav {
 			background-color: #f6f6f6;
 			border: 1px solid #e6e6e6;
 			.nav {
				width: 130px;
				height: 45px;
				line-height: 45px;
				border: 1px solid #e6e6e6;
				background-color: @white-color;
				text-align: center;
				border-top: 2px solid @primary-color;
 			}
 			.list {
 				height: 100px;
 				line-height: 100px;
 				vertical-align: top;
 				border-top: 1px solid #e6e6e6;
 				background-color: @white-color;
 				padding-left: 40px;
 				input {
 					display: inline-block;
 					margin-right: 10px;
 				}
 				label {
 					display: inline-block;
 					margin-right: 60px;
 				}
 				img {
 					display: inline-block;
 					vertical-align: middle;
 				}
 			}
 		}
 		.fukuan {
 			margin: 20px 0 230px 0;
 			a {
 				display: inline-block;
 				width: 120px;
 				height: 40px;
 				color: @white-color;
 				line-height: 40px;
 				text-align: center;
 				border-radius: 2px;
 				background-color: @primary-color;
 			}
 		}
 	}
 	
 }   
//支付界面
.payment {
	.otherWay {
		height: 70px;
		width: 100%;
		a {
			font-size: 12px;
			color:#4f82e9;
			line-height: 70px;
		}
	}
	.paymentMain {
		width: 900px;
		height: 550px;
		box-sizing: border-box;
		border: 1px solid #e6e6e6;
		color: @base-color;
		margin: 0 0 77px 200px;
		.mainTitle {
			font-size: 16px;
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid #e6e6e6;
			img {
				display: inline-block;
				vertical-align: middle;
				// width: 26px;
				height: 26px;
				margin: 0 10px 0 20px;
			}
		} 
		.mainContent {
			padding: 77px 120px 94px 124px;
			.contentLeft {
				float: left;
				width: 295px;
				height: 300px;
				.contentTop {
					height: 167px;
					border-bottom: 1px dashed #e6e6e6;
					text-align: center;
					.price {
						font-size: 36px;
						color: #e70013 ;
						line-height: 100px;
						span {
							font-size: 24px;
						}
					}
					.des {
						font-size: 14px;
						color: @base-color;
					}
				}
				.contentBottom {
					padding-left: 40px;
					text-align: left;
					line-height: 55px;
					.phone {
						span {
							font-size: 20px;
						}
					}
				}
			}
			.contentRight {
				box-sizing: border-box;
				float: left;
				margin-left: 99px;
				.erweima {
					box-sizing: border-box;
					width: 260px;
					height: 260px;
					border: 1px solid #e6e6e6;
					padding:20px;
					.erweimaBox {
						width: 220px;
						height: 220px;
						img {
							display: inline-block;
							width: 100%;
						}
					}
				}
				.erweimabottom {
					width: 260px;
					height: 60px;
					margin-top: 10px;
					background-color: #f57a83;
					color: @white-color;
					font-size: 14px;
					line-height: 1;
					padding-left:50px;
					box-sizing: border-box;
					.erweimaleft {
						float: left;
						margin-right: 20px;
						i {
							font-size: 36px;
							line-height: 60px;
						}
					}
					.erweimaright {
						float: left;
						line-height: 30px;
						p {
							margin: 0;
						}

					}
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