<template>
	<div class="usernav">
		<div class="usertop">
			 <router-link :to="{name: 'user'}">个人中心首页</router-link>
		</div><!-- 此处的地址因为route配置失误所以这里不用userindex -->
		<ul class="usermain">
			<li>
				<router-link class="iconfont icon-wodedingdan" :class="{'active' : active === 0}" :to="{name: 'myOrder'}"> 我的订单</router-link>
			</li>
			<li>
				<router-link class="iconfont icon-wodeshoucang" :class="{'active' : active === 1}" :to="{name: 'myFavs'}"> 我的收藏</router-link>
			</li>
			<li>
				<router-link class="iconfont icon-shouhuodizhi" :class="{'active' : active === 2}" :to="{name: 'addressManage'}"> 收货地址管理</router-link>
			</li>
			<li>
				<router-link class="iconfont icon-zhanghaoshezhi" :class="{'active' : active === 3}" :to="{name: 'accountSetting'}"> 账号设置</router-link>
			</li>
		</ul>
	</div>	
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
.usernav {
	float: left;
	width:180px;
	height: 500px;
	box-sizing: border-box;
	border: 1px solid #e6e6e6;
	.usertop {
		width: 100%;
		height: 60px;
		background-color: #fae7d4;
		text-align: center;
		a {
			display: block;
			font-size: 18px;
			line-height: 60px;
			color: @primary-color;
		}
	}
	.usermain {
		margin-top: 20px;
		li {
			text-indent: 30px;
			text-align: left;
			height: 50px;
			a {
				line-height: 50px;
				font-size: 14px;
				color: @base-color;
				i {
					font-size: 16px;
					margin-right: 10px;
				}
				&.active {
					color: @primary-color;
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