<template>
	<div>
		<hr-head :active="6"></hr-head>
		<div class="mallCart box">
			<div class="mallCartTop">
				全部商品<span>{{shoppingCart.totalQty}}</span>
			</div>
			<div class="danCar">
				<div class="danCarTitle">
					<ul>
						<li class="spxx">商品信息</li>
						<li class='danjia'>单价（元）</li>
						<li class="num">数量</li>
						<li class="xiaoji">小计（元）</li>
						<li class="caozuo">操作</li>
					</ul>
				</div>
				<div class="danCarMain" v-for="item in shoppingCart.cartList">
					<ul class="clearfix">
						<li class="spxx clearfix">
							<div class="spxxleft">
								<!-- <input type="checkbox" v-model="item.selected" @click="orderSelected(item.selected)"> -->
							</div>
							<div class="spxxmiddle">
								<a href="javascript:void(0)">
									<img :src="item.imgUrl"alt="">
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
							<a href="javascript:void(0)" class="del" @click="ctrNum(item, -1)">-</a>
							<input type="number" v-model="item.qty" @change="ctrNum(item, 0)" min="1">
							<a href="javascript:void(0)" class="add" @click="ctrNum(item, 1)">+</a>
						</li>
						<li class="xiaoji">{{item.realPayAmount}}</li>
						<li class="caozuo">
							<a href="javascript:void(0)" @click="delSelectGood(item)">删除</a>
						</li>				
					</ul>
				</div>
			</div>
			<div class="mallCarBottom clearfix">
				<!-- <div class=" left">
					<input type="checkbox" id="check" v-model="selectedAll" @click="selectAll">
					<label for="check">全选</label>
				</div> -->
				<div class="coment jixu left"><router-link :to="{path: '/mallindex'}">继续购物</router-link></div>
				<!-- <div class="coment qingkong left"><a href="javascript:void(0)" @click="delSelectGood">清空选中宝贝</a></div> -->
				<div class="coment nums left">已选商品<span>{{shoppingCart.totalQty}}</span>件</div>
				<div class="coment all left">合计（不含配送安装费）：<span class="span1"> ¥ </span><span class="span2">{{shoppingCart.totalRealGoodsAmount}}</span> </div>
				<router-link :to="{path: '/confirmMyCart'}" class="jiesuan right">去结算</router-link>
			</div>
		</div>
		<hr-foot></hr-foot>
		<hr-confirm :show="confirmShow" :confirm="confirm" @close="closeConfirm" @submit="submitConfirm"></hr-confirm>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //未登陆去结算
 .mallCart {
 	.mallCartTop {
 		font-size: 18px;
 		color: @primary-color;
 		line-height: 2;
 	}
 	.mallCarBottom {
 		line-height: 50px;
 		margin-bottom: 80px;
 		margin-top: 22px;
 		font-size: 12px;
 		background-color: #e5e5e5;
 		.coment{
 			display: inline-block;
 			margin-right: 40px;
 		}
 		height: 50px;
 		input {
 			display: inline-block;
 			vertical-align: middle;
 			margin-left: 22px;
 			margin-right: 12px;
 		}
 		.allcheck {}
 		.jixu {
 			margin-left: 40px;
 		}
 		.qingkong {}
 		.nums {
 			span {
 				color: #e70013;
 			}
 		}
 		.all {
 			height: 50px;
 			margin-left: 326px;
 			margin-right: 0px;
 			span {
 				color: #e70013;
 			}
 			.span1 {
 				font-size: 14px;
 				line-height: 50px;
 			}
 			.span2 {
 				font-size: 24px;
 				line-height: 50px;
 			}
 		}
 		a{
 			color: @base-color;
 			font-size: 12px;
 		}
 		.jiesuan {
 			display: inline-block;
 			margin-left: 20px;
 			width: 160px;
 			height: 50px;
 			background-color: @primary-color;
 			color:@white-color;
 			line-height: 50px;
 			text-align: center;
 			font-size: 18px;
 			margin-right: 0;
 			margin-left: 18px;
 		}
 	}
 }
 //组件搬过来的
  .danCar {
 	//公共样式
 	border: 1px solid #e6e6e6;
 	border-top: none;
 	.danCarTitle ul li {
 		line-height: 40px;
 	}
 	.danCarTitle, .danCarMain{
 		font-size: 12px;
 		color: @second-color;
 		// line-height: 40px;
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
 				width: 337px;

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
 				input {
 					width: 38px;
 					height: 23px;
 					display: inline-block;
 					text-align: center;
 					border: 1px solid #b3b3b3;
 					font-size: 12px;
 					line-height: 23px;
 					padding: 0;
 					vertical-align: top;
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
				color: #e70013;
				font-size: 12px;
				line-height: 120px;
 			}
 			.caozuo{
 				line-height: 120px;
 				box-sizing: border-box;
 				text-align: center;
 				a {
 					color:@second-color ;
 					font-size: 12px;
 					// display: block;
 					margin-left: 16px;
 					&:hover {
 						color: @primary-color;
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