<template>
	<div v-if="show" class="register_agreement_box">
		<div class='agreement_showbox'>
			<div class="showbox_header">
				用户注册协议
				<a href="javascript:void(0)" class="close_showbox" @click="showBox"><i class="iconfont icon-cha"></i></a>
			</div>
			<div class="showbox_main">
				<ul class="main_all">
					<li>
						<h4>鸿荣家装用户注册协议</h4>
						<p>鸿荣家装用户注册协议</p>
					</li>
				</ul>
				
			</div>
			<div class="showbox_footer">
				<a href="">同意并登录</a>
			</div>
		</div>
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';

	//登录注册模块协议组件register_agreement_box
	.register_agreement_box{
		position: fixed;
		top:0;
		left: 0;
		right:0;
		bottom: 0;
		background-color: rgba(0,0,0,0.6);
		z-index: 102;

		.agreement_showbox{
			width:840px;
			height:600px;
			background-color: @white-color;
			position: relative;
			position:absolute;
			top:50%;
			left:50%;
			margin-left: -420px;
			margin-top: -300px;
			.showbox_header{
				width: 100%;
				height:40px;
				background-color: #f3f3f3;
				color: @base-color;
				font-size: 14px;
				line-height: 40px;
				text-indent: 20px;
				font-weight: bold;
				border-bottom: 1px solid @step-line-color;
				position: absolute;
				top:0;
				left:0;
				a{
					margin-left: 700px;
					color: @explain-color;
					i {
						font-size: 24px;
					}
				}

			}
			.showbox_main{
				width: 100%;
				padding: 40px 20px;
				box-sizing: border-box;
				height:488px;
				font-size: 14px;
				color: @base-color;
				overflow: auto;
				ul{
					li{
						font-size: 14px;
						line-height: 1.5;
						h4{
							font-weight: bold;
							line-height: 2;

						}
						&:nth-child(1) h4{
							text-align: center;
							font-weight: normal;
						}
					}
				}
			}
			.showbox_footer{
				width: 100%;
				border-top: 1px solid @step-line-color;
				height:70px;
				text-align: center;
				position: absolute;
				bottom:0;
				left: 0;
				a{
					width:200px;
					height: 40px;
					background-color: @primary-color;
					display: block;
					border-radius: 5px;
					line-height: 40px;
					color: @white-color;
					margin:15px auto;
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