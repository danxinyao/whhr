<template>
	<div>
		<hr-head :active="6"></hr-head>
		<div class="yesLogin box">
		     <hr-steps :active="stepActive" class="danstep">
                <hr-step title="我的购物车"></hr-step>
                <hr-step title="确认订单信息"></hr-step>
                <hr-step title="订单提交成功"></hr-step>
            </hr-steps>
			<div class="loginTitle clearfix">
				<div class="titleleft">收货地址</div>
				<div class="titleright">
					<router-link :to="{ path :'/addressmanage'}">管理收货地址</router-link>
				</div>
			</div>
			<hr-addaddress :show="modalShow" @closemodal="showBox" @select="queryAddressLists"></hr-addaddress>
			<div class="loginMain clearfix">
				<!-- 有地址时只用把address加 active就ok -->
				<div class="address clearfix" :class="{ 'active' : item.defaultFlag == 1}" v-for="item in addressList" @click="setDefaultAddressList(item.addressListID)">
					<div class="addresstop">
						<div class="name">{{item.linkMan}}</div>
						<div class="phone">{{item.mobile}}</div>
					</div>
					<div class="addressbottom"><span v-if="item.defaultFlag == 1">【默认】</span>{{item.areaDesc}} {{item.address}}</div>
					<div class="addressRightBottom">
						<img src="../../../../assets/images/mallyeslogin_rightbottom.jpg" alt="">
					</div>
				</div>
				<!-- 无地址时 -->
				<div class="address noaddress">
					<div class="noaddressTitle">
						<a href="javascript:void(0)" @click="showBox">+</a>
					</div>
					<div class="noaddressBottom">
						添加地址
					</div>
				</div>
			</div>
			<div class="loginTitle clearfix">
				<div class="titleleft">确认订单信息</div>
				<div class="titleright">
					<router-link :to="{ path : '/myShoppingCart'}">返回购物车修改</router-link>
				</div>
			</div>
			<div class="loginMain"></div>			
			<div class="danCar box">
				<div class="danCarTitle">
					<ul>
						<li class="spxx">商品信息</li>
						<li class='danjia'>单价（元）</li>
						<li class="num">数量</li>
						<li class="xiaoji">小计（元）</li>
						<li class="caozuo">服务</li>
					</ul>
				</div>
				<div class="danCarMain" v-for="item in shoppingCart.cartList">
					<ul class="clearfix">
						<li class="spxx clearfix">
							<div class="spxxmiddle">
								<a href="javascript:void(0)">
									<img :src="item.imgUrl">
								</a>
							</div>
							<div class="spxxright">
								<div class="des">{{item.name}}</div>
								<div class="size">颜色：{{item.color}}</div>
								<div class="size">规格：{{item.size}}</div>
							</div>
						</li>
						<li class='danjia'>
							<span class="saleprice" v-if="item.activityType == 0 || item.activityType == 2">{{item.unitPrice}}</span>
							<!-- 折扣 -->
							<span class="saleprice" v-else>{{item.realPrice}}</span>
							<span class="unitprice" v-if="item.activityType != 0 && item.activityType != 2">{{item.unitPrice}}</span>
						</li>
						<li class="num">
							<div class="num_input">{{item.qty}}</div>
						</li>
						<li class="xiaoji">{{item.realPayAmount}}</li>
						<li class="caozuo">
							<select name="" id="">
								<option value="" v-if="parseInt(item.installFee) == 0">不用安装¥{{item.installFee}}</option>
                                <option value="" v-else>送货上门并安装¥{{item.installFee}}</option>
							</select>
						</li>				
					</ul>
				</div>
			</div>			
			<div class="loginBottom clearfix">
				<div class="loginBottomLeft">
					<input type="text" v-model="form.note" placeholder="若需要延迟发货请备注具体日期">
				</div>
				<div class="loginBottomRight">
					<div class="rightDes">
						<div class="desTitle">{{shoppingCart.totalQty}} 件商品，商品总额：</div>
						<div class="desPrice">¥ {{shoppingCart.totalRealGoodsAmount}}</div>
					</div>
					<div class="rightDes">
						<div class="desTitle">配送安装费：</div>
						<div class="desPrice">¥ {{shoppingCart.totalInstallFee || '0.00'}}</div>
					</div>
					<div class="rightDes">
						<div class="desTitle">活动优惠：</div>
						<div class="desPrice">¥ {{shoppingCart.totalDiscountAmount || '0.00'}}</div>
					</div>
					<div class="jiesuan">
						<div class="jiesuanLeft">
							应付金额：
							<span><span>¥ </span>{{shoppingCart.payAmount}}</span>
						</div>
						<div class="jiesuanRight">
							<a @click="settle">去结算</a>
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
    .danstep {
    	margin: 60px 0;
    }
 .yesLogin {
 	.loginTitle {
 		line-height: 2;
 		.titleleft {
 			font-size: 18px;
 			color: @base-color;
			float: left;
			text-align: left;
 		}
 		.titleright {
 			float: right;
 			text-align: right;
 			a {
 				color: #4f82e9;
 				font-size: 12px;
 			}
 		}
 	}
 	.loginMain {
 		.address {
 			float: left;
 			box-sizing: border-box;
 			width: 284px;
 			height: 140px;
 			margin-right: 18px;
 			border: 1px solid #e6e6e6;
 			border-radius: 4px;
 			margin-bottom: 15px;
 			padding: 24px;
 			line-height: 1.5;
 			font-size: 14px;
 			color:@base-color;
 			position: relative;
 			background-image:url(../../../../assets/images/mallyeslogin_noborder.jpg);
 			&:hover {
 				background-image:url(../../../../assets/images/mallyeslogin_yesborder.jpg); 				
 			}
 			&:nth-of-type(4n) {
 				margin-right: 0;
 			}
 			&.active {
 				background-image:url(../../../../assets/images/mallyeslogin_yesborder.jpg);
				.addressbottom {
					span {
						display: inline-block;
						color:#e70013;
					}
				}
				.addressRightBottom {
					display: block;
				}
 			}
 			.addresstop {
 				border-bottom: 1px solid #e6e6e6;
 				padding-bottom: 15px;
				.name {
					display: inline-block;
					margin-right: 15px;
				}
				.phone {
					display: inline-block;
				}
 			}
 			.addressbottom {
 				font-size: 12px;
 				color: @base-color;
 				margin-top: 15px;
 				line-height: 1.5;
 			}
 			.addressRightBottom {
 				display: none;
				position: absolute;
				right: -1px;
				bottom:-7px;
 			}
 		}
 		.noaddress {
 			padding-top:30px;
 			padding-left: 115px;
	 		.noaddressTitle {
	 			width: 48px;
	 			height: 48px;
	 			border: 1px dashed #bdbdbd;
	 			border-radius: 50%;
	 			font-size: 50px;
	 			line-height: 50px;
	 			text-align: center;
				a {
					display: inline-block;
					font-size: 50px;
					line-height: 41px;
					color: @explain-color;
					vertical-align: top;
				}
	 			
	 		}
 		}
 		.noaddressBottom {
 			margin-top: 15px;
 			font-size: 14px;
 			color: @base-color;
 		}
 	}
 	.loginBottom {
 		margin-top: 30px;
		.loginBottomLeft {
			float: left;
			font-size: 12px;
			color: @second-color;
			input {
				font-size: 12px;
				color:@explain-color;
				width: 480px;
				height: 30px;
				line-height: 30px;
				text-indent: 10px;
			}
		}
		.loginBottomRight {
			float: right;
			line-height: 30px;
			text-align: right;
			.desTitle {
				display: inline-block;

			}
			.desPrice {
				display: inline-block;
				width: 165px;
				padding-right: 20px;
			}
			.jiesuan {
				margin:70px 0 155px 0;
				.jiesuanLeft {
					display: inline-block;
					span {
						font-size: 24px;
						color: #e70013;
						span{
							font-size: 14px;
						}
					}
				}
				.jiesuanRight {
					display: inline-block;
					margin-left: 25px;
					a {
						display: inline-block;
						width: 160px;
						height: 50px;
						text-align: center;
						font-size: 18px;
						color: @white-color;
						line-height: 50px;
						background-color: @primary-color;
					}
				}
			}

		}
 	}
 } 
 //购物车列表样式cope
.danCar {
 	//公共样式
 	border: 1px solid #e6e6e6;
 	border-top: none;
 	.danCarTitle ul li {
 		line-height: 40px;
 	}
 	.danCarTitle ,.danCarMain{
 		font-size: 12px;
 		color: @second-color;
 		line-height: 40px;
 		background-color: @match-color;
 		ul {
 			li {
 				display: inline-block;
 				text-align: center;
 				// line-height: 40px;
 			}
 			.spxx {
 				width: 343px;
 			}
 			.danjia{
 				width: 306px;
				.saleprice {
 					font-size: 14px;
 					padding: 0 6px;
 					color: #e9010f;
 				}
 				.unitprice {
 					text-decoration: line-through;
 				}
 			}
 			.num {
 				width: 78px;

 			}
 			.xiaoji {
 				width: 287px;

 			}
 			.caozuo {
 				width: 160px;

 			}
 		}
 	}
 	//私有样式
 	.danCarMain {
 		background-color: @white-color;
 		text-align: left;
 		line-height: 1.5;
 		border-bottom: 1px dashed #e6e6e6;
 		&:last-of-type {
 			border-bottom: none;
 		}
 		ul {
 			li {
 				float: left;
 				height: 120px;
 			}
 			.spxx {
 				box-sizing: border-box;
 				padding:20px;
 				padding-right: 0;
 				.spxxleft {
 					float: left;
 					text-align: left;
 					margin: 0 22px 0 0;
 					input {
 						vertical-align: bottom;
 					}
 				}
 				.spxxmiddle {
 					float: left;
 					margin-right: 12px;
 					a {
 						display: inline-block;
 						width: 80px;
 						height:80px;
 						img {
 							width:100%;
 						}
 					}
 				}
 				.spxxright {
 					display: inline-block;
 					float: left;
 					width: 230px;
 					.des {
 						line-height: 1.5;
 						color: @base-color;
 						text-align: left;
 						.lineClamp(2);
 					}
 					.size {
 						text-align: left;
 						color: @explain-color;
 					}
 				}
 			}
 			.danjia {
				color: @base-color;
				font-size: 12px;
				line-height: 120px;
 			}
 			.num {
 				font-size: 0;
 				padding-top: 45px;
 				box-sizing: border-box;
 				a {
 					display: inline-block;
 					width: 17px;
 					height: 23px;
 					border: 1px solid #e6e6e6;
 					line-height: 23px;
 					vertical-align: top;
 				}
 				.num_input {
 					width: 78px;
 					height: 23px;
 					text-align: center;
 					border:none;
 					font-size: 12px;
 					line-height: 23px;
 					padding-left: 10px;
 					color: #3c3c3c;
 				}
 				.del {
 					border-right: none;
 					color: @explain-color;
 					font-size: 12px;

 				}
 				.add {
					border-left:none;
					color: @explain-color;
					font-size: 12px;
 				}
 			}
 			.xiaoji {
 				width: 287px;
				color: #e70013;
				font-size: 12px;
				line-height: 120px;
 			}
 			.caozuo{
 				padding-top:45px;
 				box-sizing: border-box;
 				text-align: center;
 				width: 170px;
 				select {
 					width: 120px;
 					height: 30px;
 					line-height: 30px;
 					text-indent: 10px;
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