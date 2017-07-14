<template>
	<div class="shoppingCar clearfix" :class="[isShow ? (isAni ? 'showRight' : '') : (isAni ? 'hideRight' : '')]">
		<div class="shopLeft">
			<div class="shopcar" :class="{active : isShow}" @click="openRight">
				<i class="iconfont icon-gouwuche"></i>
				<span class="che">购物车</span>
				<span class="car-num">
					{{shoppingCart.totalQty ? (shoppingCart.totalQty < 100 ? shoppingCart.totalQty : '99+') : 0}}
				</span>
			</div>
			<div class="shoucang">
				<span class="iconfont icon-wodedingdan" @click="goMyOrder"></span>
				<span class="myfavs">
					<a href="javascript:void(0)" class="iconfont icon-shoucang" @click="goMyFavs">
						<span class='myfav'>我的收藏</span>
					</a>
				</span>
			</div>
			<div class="kefu">
				<span class="iconfont icon-zixunkefu" @click="showCustomer"></span>
				<span class="iconfont icon-saoyisao erweimas">
					<span class="erweima">
						<img src="../../assets/images/malllist_erweima.png" alt="">
						<span class="erweimabox">
							<img src="../../assets/images/login_erweima.jpg" alt="">
						</span>
					</span>
				</span>
				<span class="iconfont icon-fanhuidingbu" @click="toTop"></span>
			</div>
		</div>
		<div class="shopRight">
			<div class="shopRightTitle clearfix">
				<p>购物车</p>
				<a href="javascript:void(0)" class="iconfont icon-cha" @click="openRight"></a>
			</div>
			<div class="shopLists">
				<div class="shopList" v-for="item in shoppingCart.cartList">
					<div class="shopListLeft">
						<a href="javascript:void(0)" class="imgbox">	
							<img :src="item.imgUrl"alt="">
						</a>
					</div>
					<div class="shopListMiddle clearfix">
						<div class="shopPrice">
							<span class="saleprice" v-if="item.activityType == 0 || item.activityType == 2">{{item.unitPrice}}</span>
							<!-- 折扣 -->
							<span class="saleprice" v-else>{{item.realPrice}}</span>
							<span class="unitprice" v-if="item.activityType != 0 && item.activityType != 2">{{item.unitPrice}}</span>
						</div>
						<div class="shopMiddleAll clearfix">
							<a href="javascript:void(0)" class="btnLeft" @click="ctrNum(item, -1)">-</a>
							<div class="btnMiddle">
								<input type="number" @change="ctrNum(item, 0)" v-model="item.qty" min="1">
							</div>
							<a href="javascript:void(0)" class="btnRight" @click="ctrNum(item, 1)">+</a>
						</div>
					</div>
					<div class="shopListRight">
						<a href="javascript:void(0)" @click="delGood(item)">清除</a>
					</div>
				</div>
			</div>
			<div class="allPrices clearfix">
				<div class="pricesLeft">共 {{shoppingCart.totalQty}} 件商品</div>
				<div class="pricesRight">合计：<span>¥ {{shoppingCart.totalRealGoodsAmount}}</span></div>
			</div>
			<div class="goShopping">
			    <a href="javascript:void(0)" @click="goMyCart">去结算</a>
			</div>
		</div>
		<hr-login :showLogin="loginShow" @closemodal="closeLoginModal"></hr-login>
		<hr-confirm :show="confirmShow" :confirm="confirm" @close="closeConfirm" @submit="submitConfirm"></hr-confirm>
		<!-- 客服 -->
        <hr-customer :is-show="isShowCustomer" @close="showCustomer"></hr-customer>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
//购物车去除input number默认样式
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
    margin: 0; 
}  
	//购物车
	.shoppingCar.showRight {
		animation: fade_in .3s both;
	}
	.shoppingCar.hideRight {
		animation: fade_out .3s both;
	}

	@keyframes fade_in {
		0% {
			right: -301px;
		}
		100% {
			right: 0;
		}
	}
	@keyframes fade_out {
		0% {
			right: 0;
		}
		100% {
			right: -301px;
		}
	}
	.shoppingCar {
		width:339px;
		height: 100%;
		position: fixed;
		top:0;
		right: -301px;
		z-index: 100;
		//购物车左边
		.shopLeft {
			box-sizing: border-box;
			float: left;
			width: 38px;//38
			height: 100%;
			background-color: #2e2e2e;
			color:@white-color;
			padding-top: 200px;
			line-height: 1.5;
			font-size: 12px;
			.shopcar {
				cursor: pointer;
				padding: 15px 5px;
				text-align: center;
				.icon-gouwuche {
					font-size: 26px;
					color: #e70012;
				}
				.che {
					display: inline-block;
					width: 14px;
					font-size: 14px;
				}
				.car-num {
					display: block;
					width: 24px;
					height: 24px;
					border-radius: 50%;
					background-color: #e70012;
					color:@white-color;
					font-size: 12px;
					line-height: 24px;
					text-align: center;
					margin-top: 5px;
					margin-left: 2px;
				}
				&:hover,&.active {
					background-color: @primary-color;
					.car-num {
						color: @primary-color;
						background-color: @white-color;
					}
					.icon-gouwuche {
						color:@white-color;
					}
				}
			}
			.kefu {
				position: absolute;
				bottom: 80px;
			}
			.shoucang, .kefu {
				text-align: center;
				span {
					cursor: pointer;
					display: inline-block;
					width:38px;
					height:38px;
					line-height: 38px;
					font-size: 24px;
					margin: 8px 0;
					&.myfavs {
						position: relative;
						.iconfont {
							color:@white-color;
							width:38px;
							height:38px;
							line-height: 38px;
							font-size: 24px;
						}
						&:hover {
							.myfav {
								display: inline-block;
								font-size: 12px;
								color:@white-color;
								background-color: @primary-color;
							}
						}
						.myfav{
							width: 80px;
							height: 38px;
							position: absolute;
							display: inline-block;
							top:0;
							left: -80px;
							font-size: 12px;
							line-height: 38px;
							text-align: left;
							text-indent: 20px;
							z-index: 2;
							margin: 0;
							display: none;

						}
					}
					&:hover {
						background-color:@primary-color;

					}
				}
				//.icon-shoucang 
				.erweimas{
					display:block;
					position: relative;
					&:hover {
						.erweima {
							display: inline-block;
						}
					}
					.erweima {
						display: none;
						width:150px;
						height:193px;
						position: absolute;
						bottom: -8px;
						left:-150px;
						img {
							width:100%;
						}
						.erweimabox {
							width:100px;
							height: 100px;
							background-color: @white-color;
							position: absolute;
							top:17px;
							left: 25px;
							box-sizing: border-box;
							padding: 10px;
							img {
								display: inline-block;
								width:100%;
							}
						}

					}
				}
			}

		}
		//购物车右边
		.shopRight {
			// display: none;
			background-color: @white-color;
			float: left;
			width: 301px;//301
			height:100%;
			overflow-y: scroll;
			.shopRightTitle {
				height:55px;
				border-bottom: 1px solid #e6e6e6;
				text-align: left;
				p {
					float: left;
					line-height: 55px;
					text-indent: 20px;
					display: inline-block;
					width: 100px;
					margin:0;
					color:@base-color;
				}
				a {
					float: right;
					display:inline-block;
					color:@second-color;
					line-height: 55px;
					margin-right: 10px;
					font-size: 24px;
				}
			}
			.shopLists {
				border-bottom: 1px solid #e6e6e6;
			}
			//总价
			.allPrices {
				height: 70px;
				line-height: 50px;
				padding:0 20px;
				color: @base-color;
				.pricesLeft {
					float: left;
					font-size: 12px;
				}
				.pricesRight {
					float: right;
					font-size: 14px;
					span {
						color: #e70013;
					}
				}
			}
			//去结算
			.goShopping {
				a {
					display: block; 
					width: 260px;
					height:40px;
					line-height: 40px;
					border-radius: 5px;
					text-align: center;
					background-color: @primary-color;
					color: @white-color;
					margin:0 auto;
				}
			}
			.shopList {
				margin:0 20px;
				height:80px;//100
				margin-top:20px;
				border-bottom: 1px dashed #e6e6e6;
				&:last-of-type {
					border-bottom:none;
				}
				.shopListLeft {
					float: left;
					.imgbox {
						display: block;
						width:60px;
						height:60px;
						img{
							width:100%;
						}
					}
				}
				.shopListMiddle {
					float: left;
					.shopPrice {
						//margin-left: 12px;
						//font-size: 14px;
						//color:#e70013;
						margin-bottom: 15px;
						.saleprice {
		 					font-size: 14px;
		 					padding: 0 6px 0 12px;
		 					color: #e9010f;
		 				}
		 				.unitprice {
		 					font-size: 12px;
		 					text-decoration: line-through;
		 				}
					}
					.shopMiddleAll{
						margin-left: 12px;
						a {
							float: left;
							display: inline-block;
							width:18px;
							height: 23px;
							text-align: center;
							line-height: 23px;
							border: 1px solid #e6e6e6;
							color: @explain-color;
						}
						.btnLeft {
							border-right: none;
						}
						.btnMiddle {
							float: left;
							border: 1px solid #b3b3b3;
								input{
								display: inline-block;
								width: 38px;
								height:23px;
								text-align: center;
								padding:0;
								border: none;
								color: #3c3c3c;
								}

							} 
						.btnRight {
							border-left: none;
						}
					}
				}
				.shopListRight {
					float: right;
					a {
						font-size: 12px;
						color: #4f82e9;
						line-height: 60px;						
					}
				}
			}
		}
	}

</style>  
<script type="text/babel">
    import goodscar from './goodscar'
    export default {
        ...goodscar
    }
</script>