<template>
	<div class="setting">
		<div class="settingNav">
			<p>账号设置：</p>
			<a href="javascript:void(0)" v-bind:class="{ active: showLi }"  @click='showLi = true'>个人资料</a>
			<a href="javascript:void(0)" v-bind:class="{ active: !showLi }" @click='showLi = false'>修改密码</a>
		</div>
		<!-- 个人资料 -->
		<ul class="settingMain" v-if="showLi">
			<li>
				<span>用户名：</span>
				<div class="rights">
					<input type="text" placeholder="请输入您的昵称"  v-model="info.name">
				</div>
			</li>
			<li class="city">
				<span>城市：</span>
				<div class="rights form">
					<div class="form-item">
						<hr-region @changeRegions="changeRegions" :stateInfo="stateInfo" :cityInfo="cityInfo" :districtInfo="districtInfo" :styles="regionStyles"></hr-region>
					</div>
				</div>
			</li>
			<li class="address">
				<span>详细地址：</span>
				<div class="rights">
					<textarea name="" id="" v-model="info.address" placeholder="请输入详细收货地址"></textarea>
				</div>
			</li>
			<li class="touxiang">
				<span>当前头像：</span>
				<div class="rights">
					<div class="pic" v-if="info.avatar">
						<img :src="info.avatar">
					</div>
					<div class="pic" v-else>
						<img src="../../../../assets/images/detail_designer.jpg" alt="touxiang">
					</div>
					<a class="sctx" href="javascript:void(0)">
						<input ref="input" class="file" type="file" accept="image/png, image/gif, image/jpg, image/jpeg" @change="uploadImage">上传照片
					</a>
					<p>仅支持jpg、gif、png图片文件，且文件小于5M</p>
					<a class="tijiao" href="javascript:void(0)" @click="submit">提交</a>
				</div>
			</li>
		</ul>
		<!-- 验证身份 -->
		<div class="changePsw"  v-else>
			<hr-steps :active="isShow" class="danstep">
        		<hr-step title="验证身份"></hr-step>
        		<hr-step title="修改登录密码"></hr-step>
        		<hr-step title="完成"></hr-step>
   			 </hr-steps>					
			<div class="yanzheng" v-if="isShow === 0">
			    <div>
					<span>已验证手机：</span>
					<span class="inputBoder">{{phone}}</span>	    	
			    </div>
			    <div>
					<span>图片验证码：</span>
					<input class="sjyzm" v-model="form.code" type="text" placeholder="图片验证码">
					<img class="yanzheimg" :src="imgSrcList.imgData" height="40" width="100" alt="">
					<a href="javascript:void(0)" @click="getVerifyCodeImg">看不清，换一张</a>
				</div>
				<div>	
					<span>手机验证码：</span>
					<input class="sjyzm" v-model="mobileCode.code"  type="text" placeholder="请输入手机验证码">
					<a class="hqyzm"  href="javascript:void(0)" @click="getSendSmsMobile">获取验证码</a>
				</div>
				<div class="nextstep">
					<a href="javascript:void(0)" @click="judgeMibleCode">下一步</a>
				</div>
			</div>
			<!-- 修改密码 -->
			<div class="xiugaiPSw clearfix" v-if="isShow === 1">
				<div class="lefts">新的密码：</div>
				<div class="rights">
					<input type="password" v-model="userPwdList.pwd" placeholder="请输入新密码">
				</div>
				<div class="lefts">再次确认：</div>
				<div class="rights">
					<input type="password" v-model="userPwdList.pwdAgain"  placeholder="请再次确认新密码">
				</div>
				<div class="lefts"></div>
				<div class="rights">
					<a class="shangyibu" href="javascript:void(0)" @click="noShow">上一步</a>
					<a class="tijiao" href="javascript:void(0)" @click="updateEditUserPwd">提交</a>
				</div>
			</div>
			<div class="changesuccess" v-if="isShow === 2">
				密码修改成功！
			</div>
		</div>
	</div>	
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
    .danstep {
    	margin: 60px 0;
    }
	.region {
		border: 1px solid #e6e6e6;
	}
	.inputBoder {
		background-color: #fff;
		box-sizing: border-box;
		width: 260px;
		height: 40px;
		border: 1px solid #e6e6e6;
		margin-left: 20px;
		margin-bottom: 20px;
		text-indent: 20px;
		font-size: 12px;		
		border: none;
	}
	.setting {
			margin-left: 200px;
			border: 1px solid #e6e6e6;
			margin-bottom: 80px;
		.settingNav {
			box-sizing: border-box;
			font-size: 14px;
			color: @base-color;
			padding: 0 20px;
			height: 46px;
			line-height: 46px;
			border-bottom: 1px solid #e6e6e6;
			p {
				display: inline-block;
				font-weight: bold;
				margin: 0;
				margin-right: 15px;

			}
			a {
				display: inline-block;
				margin-right: 40px;
				color: @base-color;
				&.active {
					color: @primary-color;
				}
			}
		}
		//个人资料
		.settingMain {
			height: 570px;
			font-size: 14px;
			color: @base-color;
			padding: 0 21px;
			box-sizing: border-box;
			li {
				margin: 20px 0;
				&:first-of-type {
					margin-top: 30px;
				}
				&.city {
					.rights {
						width: 390px;
						border: none;
						.region {
							border: none;
						}
					}
				}
				&.address {
					.rights {
						textarea {
							width: 390px;
	           				height: 80px;
	           				border: 1px solid @step-line-color;
	           				font-size: 14px;
	           				padding:20px;
	           				resize:none;
	           				outline: none;
	           				box-sizing: border-box;
	           				overflow-x: hidden;
	           				overflow-y: hidden;
	           				vertical-align: top;
						}
					}
				}
				&.touxiang {
					span {
						vertical-align: top;
					}
					.rights {
						.pic {
							width: 80px;
							height: 80px;
							overflow: hidden;
							img {
								display: inline-block;
								width: 100%;
							}
						}
						p {
							font-size: 12px;
							color: @explain-color;

						}
						.sctx {
							position: relative;
							display: inline-block;
							text-align: center;
							width: 80px;
							height: 30px;
							line-height: 30px;
							font-size: 14px;
							color: @second-color;
							border: 1px solid #e6e6e6;
							border-radius: 5px;
							margin: 20px 0 0px 0;
							.file {
								position: absolute;
								left: 0;
								top: 0;
								right: 0;
								bottom: 0;
								opacity: 0;
							}
						}
						.tijiao {
							margin-top: 30px;
							border-radius: 5px;
							width: 120px;
							display: block;
							text-align: center;
							line-height: 40px;
							font-size: 16px;
							color: @white-color;
							background-color: @primary-color;
						}

					}
				}
				span {
					display: inline-block;
					width: 70px;
					height: 40px;
					text-align: justify;
					line-height: 40px;
				}
				.rights {
					display: inline-block;
					input {
						box-sizing: border-box;
						width: 390px;
						height: 40px;
						text-indent: 20px;
						border: 1px solid #e6e6e6;
					}
				}
			}
		}
		.changePsw {
		//验证身份
			height: 570px;
			.yanzheng {
				margin-left: 320px;
				width: 500px;
				height: 500px;
				// border: 1px solid #e6e6e6;
				color: @base-color;
				font-size: 0px;
				line-height: 40px;
				a {
					font-size: 12px;
					color: #4f82e9;
				}
				span {
					display: inline-block;
					font-size: 12px;
				}
				input {
					background-color: #fff;
					box-sizing: border-box;
					width: 260px;
					height: 40px;
					border: 1px solid #e6e6e6;
					margin-left: 20px;
					margin-bottom: 20px;
					text-indent: 20px;
					font-size: 12px;
				}
				.sjyzm {
					width: 150px;
					margin-right: 10px;
					box-sizing: border-box;
					font-size: 12px;
				}
				.hqyzm {
					font-size: 12px;
					width: 100px;
					display: inline-block;
					height: 40px;
					color: @primary-color;
					text-align: center;
					line-height: 40px;
					border: 1px solid #e6e6e6;
				}
				.yanzheimg {
					vertical-align: top;
					display: inline-block;
					width: 100px;
					height: 40px;
					margin: 0 10px 0 0;
					font-size: 12px;
				}
				.nextstep {
					padding-left: 100px;
					margin-top: 10px;
					a {
						display: inline-block;
						width: 260px;
						height: 40px;
						background-color:@primary-color;
						text-align: center;
						line-height: 40px;
						font-size: 16px;
						color: @white-color;
						border-radius: 5px;

					}
				}
			}
		}
		

		//修改密码	
		.xiugaiPSw {
			margin-top: 60px;
			margin-left: 325px;
			width: 340px;
			height: 170px;
			font-size: 12px;
			color: @base-color;
			.lefts {
				float: left;
				width: 80px;
				height: 40px;
				line-height: 40px;
				margin-bottom: 15px;
			}
			.rights {
				float: left;
				width: 260px;
				height: 40px;
				line-height: 40px;
				margin-bottom: 15px;
				input {
					box-sizing: border-box;
					padding: 0 15px;
					width: 260px;
					height: 40px;
				}
				a {
					margin-top: 15px;
					float: left;
					display: inline-block;
					width: 120px;
					height: 40px;
					color: @white-color;
					background-color: @primary-color;
					line-height: 40px;
					text-align: center;
					font-size: 16px;
					margin-right: 20px;
					border-radius: 5px;
					&:last-of-type {
						margin-right: 0;
					}
				}
			 
				
			}
		}
		.changesuccess {
			margin-top: 100px;
			text-align: center;
			font-size: 26px;
			color: @base-color;
		}
	}   
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>