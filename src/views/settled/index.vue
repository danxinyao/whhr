<template>
	<div>
		<hr-head :active="7"></hr-head>
		<!-- 主页面 -->
		<div class="settled" v-if="!isSuccess">
			<div class="settledBanner">
				<img src="../../assets/images/sjrz_top.jpg" alt="">
			</div>
			<div class="settledContainer box">
				
				<div class="settledStep">
					<div class="settledTitle settledServer">
						装修入驻流程
					</div>
					<div class="selltedSteps">
						<img src="../../assets/images/settled_step.jpg"alt="">
					</div>
					<div class="settledTitle settledInstructions">入驻说明</div>
					<div class="instructionsDes">
						鸿荣家装为客户提供前端家居设计、主材配套、现场施工、软装搭配、家具及家电配套、售后服务等套系产品，纵向一体化的涵盖了整个家居产业链，通过去中间化、去渠道化、及标准化，颠覆传统装修，让装饰选材更简单更直接！用心服务，为爱筑家，鸿荣家装大数据平台欢迎各大装饰材料品牌商家入驻！
					</div>
					<ul class='items'>
						<li>
							<div class="itemsTitle">
								<span class="rightSanjiao"></span>
								商家入驻要求：
							</div>
							<div class="itemsMain"><span class="span1">•</span><span>请准备完善的企业资质资料：</span>企业营业执照、税务登记证、组织机构代码证或是统一社会信用代码证、一般纳税人证明</div>
							<div class="itemsMain"><span class="span1">•</span><span>请准备</span>商标注册证或品牌授权证明</div>
							<div class="itemsMain"><span class="span1">•</span><span>如有必要，</span>请展示您的工厂、企业获奖信息、企业经营规模等特色信息。</div>
						</li>
					</ul>
					<div class="settledTitle settledApply">鸿荣商城入驻申请</div>
					<div class="settledForm clearfix">
						<div class="formAll">							
							<div class="formLeft">姓名：</div>
							<div class="formRight">
								<input type="text" placeholder="联系人姓名" v-model="form.name">
							</div>
						</div>
						<div class="formAll">							
							<div class="formLeft">手机：</div>
							<div class="formRight">
								<input class="phone1" type="text" placeholder="手机号码" v-model="form.mobile">
								<input class="phone2" v-model="mobileCode.code" type="text" placeholder="请输入验证码">
								<a href="javascript:void(0)"  @click="getSendSmsMobile">获取验证码</a>
							</div>
						</div>
						<div class="formAll">							
							<div class="formLeft">公司：</div>
							<div class="formRight">
								<input type="text" placeholder="公司名称" v-model="form.company">
							</div>
						</div>
						<div class="formAll address clearfix">
							<div class="formLeft">地址：</div>
							<div class="formRight clearfix form">
									<div class="form-item">	
										<hr-region :styles="regionStyles" @changeRegions="changeRegions"></hr-region>
									</div>
							</div>
						</div>
						<div class="formAll">							
							<div class="formLeft">类型：</div>
							<div class="formRAadio" v-for="item in merchantsTypeList">
								<label>
								    <input type="radio" v-model="form.merchantsType" :value="item.sortId">
								    {{item.text}}
								</label>

							</div>
						</div>	
						<div class="formAll">							
							<div class="formLeft">品牌：</div>
							<div class="formRight">
								<input type="text" placeholder="公司经营的品牌名称" v-model="form.brand ">
							</div>
						</div>
						<div class="formAll">
							<div class="formRightMsrz">
								<a class="msrz" href="javascript:void(0)" @click="judgeMibleCode">马上入驻</a>
							</div>
						</div>					
					</div>
				</div>
			</div>
			<div class="serrledFooter">
				<span class="iconfont icon-zixunkefu"></span>
				<span>或者拨打400-0631-400服务热线向我们咨询</span>
			</div>
		</div>
		<!-- 入驻成功页面 -->
		<div class="settledSuccessed box" v-if="isSuccess">
			<div class="success">
				<div class="successTop">
					<i class="iconfont icon-tijiao"></i>
				</div>
				<div class="successMiddle">
					您的入驻申请已提交
				</div>
				<div class="successBottom">
					我们会尽快与您联系，请耐心等待...
				</div>
			</div>
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 //z主页面
 //banner
 .region {
 	width: 85%;
 }
 .clearfix{
 	
 	width: 85%;
 }
 .settled {
 	.settledBanner {
 		width: 100%;
 		img {
			width: 100%;
 		}
 	}
 	.settledContainer {
 		line-height: 1.5;
 		.settledTitle {
 			text-align: center;
 			font-size: 30px;
 			color:#212121;
 			margin: 100px 0 40px 0;
 		}
 		.instructionsDes {
 			text-indent: 2em;
 			font-size: 14px;
 			color: @base-color;
 			line-height: 2;
 		}
 		.items {
 			color: @base-color;
 			//line-height: 2;
 			li {
 				.itemsTitle {
 					font-size: 16px;
 					color: @base-color;
 					font-weight: bold;
 					padding:40px 0 20px 5px;
 					position: relative;
 					text-indent: 25px;
 					.rightSanjiao {
 						position: absolute;
 						top:43px;
 						left: 0;
						display:block;
						overflow: hidden;
						width: 0;
						height: 0;
						border-top: 14px solid @primary-color; 
						border-bottom: 14px solid transparent;
						border-left: 14px solid transparent;
						transform:rotate(45deg);
 					}
 				}
 				.itemsMain {
 					//padding-left: 40px;
 					font-size: 14px;
 					color:@primary-color;
 					span {
 						color:#cd000a;
 					}
 					.span1 {
 						color: @primary-color;
 						font-size: 25px;
 						padding: 0 10px;
 					}
 				}
 			}
 		}
 		.settledForm {
 			width:508px;
 			height:415px;
 			margin: 0 auto;
 			margin-bottom: 100px;
 			.formAll {
 				.formRightMsrz {
 					margin-top:30px;
 	 				.msrz{
	 					display: block;
	 					color: @white-color;
	 					width: 450px;
	 					height: 44px;
	 					background-color: @primary-color;
	 					text-align: center;
	 					margin-left: 58px;
	 					line-height: 44px;
	 					border-radius: 2px;
	 				}	
 				}
 				height: 60px;
 				width: 100%;			
	 			.formLeft {
	 				float: left;
	 				display: inline-block;
	 				width: 58px;
	 				font-size: 14px;
	 				color:@base-color ;
	 				line-height: 60px;

	 			}
	 			.formRight {
	 				float: left;
	 				display: inline-block;
	 				margin-top: 8px;
	 				input {
	 					display: inline-block;
	 					width: 450px;
	 					height: 44px;
	 					border:0;
	 					padding: 0;
	 					text-indent: 10px;
	 					background-color: @match-color;
	 				}
	 				.phone1 {
	 					width: 180px;

	 				}
	 				.phone2 {
	 					width: 130px;
	 					margin:0 15px;
	 				}
	 				a {
	 					display: inline-block;
	 					width: 97px;
	 					height: 44px;
	 					border: 1px solid #e6e6e6;
	 					line-height: 44px;
	 					color: @primary-color;
	 					text-align: center;
	 				}
	 			}
	 			//radio不一样单独控制样式
	 			.formRAadio {
	 				padding: 0 20px;
	 				float: left;
	 				display: inline-block;
	 				height: 60px;
	 				input {
	 					margin-left: 60px;
	 					margin-top: 24px;
	 					&:nth-of-type(1){
	 						margin-left: 0;
	 					}
	 				}
	 			}
	 			
 			}
 			.address {
 				.formRight {
 					padding: 0;
 					.region{
 						width: 450px;
 					}
 				}
 			}
 		}
 	}
 	.serrledFooter {
 		height: 100px;
 		width: 100%;
 		background-color: #cd000a;
 		text-align: center;
 		span {
 			font-size: 26px;
 			color: @white-color;
 			line-height: 100px;
 			text-align: center;
 			margin-right: 25px;
 		}
 	}
 } 

 //入驻成功页面 
 .settledSuccessed {
 	height: 700px;
 	font-size: 26px;
 	text-align: center;
 	.success {
 		width: 235px;
 		height: 200px;
 		margin:100px auto;
 		color: #0eaf63;
 		.successTop {
			i {
				font-size: 100px;
			}
 		}
 		.successMiddle {
 			line-height: 90px;
 		}
 		.successBottom {
 			font-size: 14px;
 			color: @explain-color;
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