<template>
	<div class="myorder">
		<div class="ordernav">
			<p>我的订单：</p>
			<ul class="nav">
				<li :class="{active:showActive == 1}">
					<a href="javascript:void(0)" @click="getQueryOrdersList(-1, false, 1)">全部</a>
				</li>
				<li :class="{active:showActive == 2}">
					<a href="javascript:void(0)" @click="getQueryOrdersList(0, false, 2)">待付款</a>
				</li>
				<li :class="{active:showActive == 3}">
					<a href="javascript:void(0)" @click="getQueryOrdersList(10, false, 3)">待发货</a>
				</li>
				<li :class="{active:showActive == 4}">
					<a href="javascript:void(0)" @click="getQueryOrdersList(20, false, 4)">待收货</a>
				</li>
				<li :class="{active:showActive == 5}">
					<a href="javascript:void(0)" @click="getQueryOrdersList(100, false, 5)">交易成功</a>
				</li>
				<li :class="{active:showActive == 6}">
					<a href="javascript:;" @click="getQueryOrdersList(-1, true, 6)">退款</a>
				</li>
				<li>
					<a href="javascript:void(0)"></a>
				</li>
			</ul>
		</div>
		<div class="orderMain">
			<ul class="mainTitle flex space_justify">
				<li>商品信息</li>
				<li>数量</li>
				<li>实付金额</li>
				<li>订单状态</li>
				<li>操作</li>
			</ul>
			<!-- 待付款 -->
			<ul class="mainContent flex space_justify" v-for="item in queryOrdersList">
				<li class="des">
					<div class="top">
						<a href="javascript:void(0)" v-for="(imgs, index) in item.goodsImageUrls" v-if="index < 4">
							<img :src="imgs" alt="">
						</a>
					</div>
					<div class="time">{{item.createTime}}</div>
				</li>
				<li>共{{item.totalQty}}件商品</li>
				<li class="price">{{item.totalAmount}}</li>
				<li class="daifukuan">
					<p v-if="item.flag == 20 && item.refundFlag <= 0">待收货</p>
					<p v-if="item.flag == 10 && item.refundFlag <= 0">待发货</p>
					<p v-if="item.flag == 0 && item.refundFlag < 100">待付款</p>
					<p v-if="item.refundFlag >= 100 || item.flag == 97 || item.flag == 98">交易关闭</p>
				    <p v-if="item.flag == 100 && item.refundFlag != 10">交易成功</p>
				    <p v-if="item.refundFlag == 10">申请退款中</p>
				    <router-link :to="{path: '/orderDetail?mallOrderId='+ item.mallOrderID}" >查看订单</router-link>
					<!-- <a href="javascript:void(0)" @click="toOrderDetail(item)">查看订单</a> -->
				</li>
				<li class="fukuan">
					<router-link :to="{path: '/application?id=' + item.mallOrderID}" v-if="item.flag == 0 && item.refundFlag < 100">付款</router-link>
					<a href="javascript:void(0)" v-if="item.flag == 0 && item.refundFlag < 100" @click="cancelUnPayOrder(item)">取消订单</a>
					<a  href="javascript:void(0)" v-if="item.flag == 20 && item.refundFlag <= 0" @click="flagConfirm(item)">确认收货</a>
				</li>
			</ul>
			<ul v-show="queryOrdersList.length == 0">
				<li class="center">没有任何数据！</li>
			</ul>
			 <hr-page :total="total" @on-change="changePage"></hr-page>
		</div>
		<hr-confirm :show="confirmShow" :confirm="confirm" @close="closeConfirm" @submit="submitConfirm"></hr-confirm>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //主页面
.center {
	text-align: center;
	line-height: 350px;
	min-height: 350px;
	font-size: 12px;
}
.myorder {
	margin-left: 200px;
	margin-bottom: 120px;
	border: 1px solid #e6e6e6;
	min-height:500px;
	.ordernav {
		height: 47px;
		line-height: 47px;
		color: @base-color;
		font-size: 14px;
		p {
			display: inline-block;
			font-weight: bold;
			text-indent: 21px;
			margin: 0;
		}
		.nav {
			display: inline-block;
			height: 47px;
			li {
				display: inline-block;
				margin-right: 40px;
				a {
					display: inline-block;
					color: @base-color;
				}
				&.active {
					a {
						color:@primary-color;
					}
				}
			}
		}
	}
	.orderMain {
		.mainTitle {
			box-sizing: border-box;
			height: 43px;
			line-height: 43px;
			padding:0 21px;
			border-top: 1px solid #e6e6e6;
			border-bottom: 1px solid #e6e6e6;
			background-color: @match-color;

			li {
				flex:1;
				font-size: 12px;
				color: @second-color;
				text-align: center;
				&:first-of-type {
					flex:0 0 340px ;
					width: 340px;
				}
			}
		}
		.mainContent {
			box-sizing: border-box;
			padding: 0 21px;
			li {
				flex:1;
				border-bottom: 1px dashed #e6e6e6;
				padding: 20px 0;
				text-align: center;
				font-size: 12px;
				color: @base-color;
				line-height: 70px;
				&.des {
					flex:0 0 340px;
					width: 340px;
					text-align: left;
					.top {
						height: 70px;
						a {
							display: inline-block;
							width: 70px;
							height: 70px;
							margin-right: 10px;
							img {
								width: 100%;
								display: inline-block;
							}
						}
					}
					.time {
						margin-top: 10px;
						font-size: 12px;
						line-height: 1.5;
						color: @explain-color;
					}
				}
				&.price {
					color: #e70012;
					font-weight: bold;
				}
				&.daifukuan {
					padding-top: 35px;
					p {
						margin: 0;
						line-height: 2;
					}
					a {
						display: block;
						line-height: 2;
						color: @explain-color;
					}
				}
				&.fukuan {
					a {
						display: inline-block;
						width: 80px;
						height: 36px;
						color: @white-color;
						background-color: @primary-color;
						text-align: center;
						line-height: 36px;
						border-radius: 5px;
					}
				}
			}
		}
	}

} 
//退款
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>