<template>
	<div>
		<hr-head :active="6"></hr-head>
		<div class="paysuccess box">
			<div class="successBox">
				<div class="successTop">
					<i class="iconfont icon-tijiao"></i>
					<p>恭喜你，支付成功</p>
				</div>
				<div class="successBottom clearfix">
					<router-link :to="{path: '/mallindex'}">继续购物</router-link>
					<router-link :to="{path: '/myOrder'}">查看订单</router-link>
				</div>
			</div>
			
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 .paysuccess {
 	height: 700px;
 	.successBox {
 		width: 350px;
 		height: 250px;
 		margin: 100px auto;
 		.successTop{
			font-size: 26px;
			color: #0eaf63;
			text-align: center;
			i {
				font-size: 80px;
			}
			p{
				margin: 15px 0 60px 0;
			}
 		}
 		.successBottom{
 			margin-top:50px;
			a {
				float: left;
				display: inline-block;
				width: 160px;
				height: 50px;
				box-sizing: border-box;
				text-align: center;
				border: 1px solid #e6e6e6;
				font-size: 18px;
				color: @second-color;
				line-height: 50px;
				border-radius: 5px;
				&:last-of-type {
					float: right;
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