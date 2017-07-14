<template>
		<div class="address clearfix">
			<hr-addaddress :show="modalShow" :isEdit="isEdit" :info="currentInfo" @closemodal="showBox" @select="getQueryAddressLists"></hr-addaddress>	
			<div class="addressTop clearfix">
				<div class="addressLeft">收货地址管理</div>
				<div class="addressRight">
					<a href="javascript:void(0)" @click="showBox">新增收货地址</a>
				</div>
			</div>
			<div class="addressTitle clearfix">
				<div class="name">收货人</div>
				<div class="diqu">所在地区</div>
				<div class="detailaddress">详细地址</div>
				<div class="email">邮编</div>
				<div class="phone">手机号码</div>
				<div class="caozuo">操作</div>
			</div>
			<ul class="addressMain" >
				<li class="clearfix" v-for="item in addressListData" >
					<div class="name">{{item.linkMan}}</div>
					<div class="diqu"><span v-if="item.defaultFlag == 1 ">[默认] </span>{{item.stateDesc + ' ' + item.cityDesc + ' ' + item.districtDesc}}</div>
					<div class="detailaddress">{{item.address}}</div>
					<div class="email">{{item.zipCode}}</div>
					<div class="phone">{{item.mobile}}</div>
					<div class="caozuo">
						<a href="javascript:void(0)" @click="updateItem(item)">修改</a>
						<span>丨</span>
						<a href="javascript:void(0)" @click="onDelAddressList(item.addressListID)">删除</a>
					</div>
				</li>
				<li class="clearfixLI" v-if="addressListData.length == 0">
					请新增收获地址！
				</li>
			</ul>
		</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
.clearfixLI {
	text-align: center;
	min-height: 345px;
	line-height: 315px;
}
.address {
	margin-left: 200px;
	margin-bottom: 80px;
	border: 1px solid #e6e6e6;
	overflow: hidden;
	.addressTop {
		font-size: 14px;
		color: @base-color;
		line-height: 50px;
		padding:0 20px;
		box-sizing: border-box;
		.addressLeft {
			font-weight: bold;
			float: left;
		}
		.addressRight {
			float: right;
			a {
				font-size: 12px;
				color: #4f82e9;				
			}
		}
	}
	.addressTitle {
		font-size: 12px;
		color: @second-color;
		line-height:42px;
		text-align: center;
		background-color: @match-color;
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #e6e6e6;

		.name {
			float: left;
			width: 125px;
		}
		.diqu {
			float: left;
			width: 240px;
		}
		.detailaddress {
			float: left;
			width: 155px;
			text-align: left;
		}
		.email {
			float: left;
			width: 215px;
		}
		.phone {
			float: left;
			width: 138px;
		}
		.caozuo {
			float: left;
			width: 114px;
		}
		
	}
	.addressMain {
		font-size: 12px;
		box-sizing: border-box;
		line-height: 1.5;
		min-height: 345px;
		li {
			margin: 30px 20px;
			padding-bottom: 30px;
			box-sizing: border-box;
			border-bottom: 1px dashed #e6e6e6;
			text-align: center;
			&:last-of-type {
				border-bottom:none;
			}
			.name {
				float: left;
				width: 105px;
			}
			.diqu {
				float: left;
				width: 240px;
				span {
					color: #e70013;
				}
			}
			.detailaddress {
				float: left;
				width: 155px;
				min-height: 20px;
				text-align: left;
			}
			.email {
				float: left;
				width: 215px;
				min-height: 20px;
			}
			.phone {
				float: left;
				width: 138px;
			}
			.caozuo {
				float: left;
				width: 94px;
				text-align: right;
				a {
					color: #4f82e9;
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