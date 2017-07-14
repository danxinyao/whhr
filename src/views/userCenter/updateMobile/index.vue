<template>
	<div>
		<hr-head></hr-head>
		<div class="box clearfix">
			<hr-breadcrumd>
                <hr-breadcrumd-item href="/home">鸿荣家装</hr-breadcrumd-item>
                <hr-breadcrumd-item>个人中心首页</hr-breadcrumd-item>
            </hr-breadcrumd>
			<hr-usernav></hr-usernav>	
			<!--右侧-->
			<!-- 验证身份 -->
			<div class="changePsw clearfix">
				<hr-steps :active="isShow" class="danstep">
	        		<hr-step title="验证身份"></hr-step>
	        		<hr-step title="修改手机号码"></hr-step>
	        		<hr-step title="完成"></hr-step>
	   			 </hr-steps>
				<div class="yanzheng" v-if="isShow === 0">
				    <div class="top">
						<span>已验证手机：</span>
	                    <span>{{phone}}</span>
				    </div>
					<div class="center">	
						<span>手机验证码：</span>
						<input class="sjyzm" v-model="mobileCode.code" type="text" placeholder="请输入手机验证码" >							
						<a class="hqyzm" href="javascript:void(0)" @click="sendSmsMobile">获取验证码</a>
					</div>
					<div class="nextstep bottom">
						<a href="javascript:void(0)" @click="Show">下一步</a>
					</div>
				</div>
				<!-- 修改密码 -->
				<div class="xiugaiPSw clearfix" v-if="isShow === 1">
					<div class="lefts">新的手机号：</div>
					<div class="rights">
						<input v-model="newMobile" placeholder="请输入新的手机号">
					</div>
					<div class="lefts">手机验证码：</div>
					<div class="rights inp-btn">
						<input type="password" v-model="code"  placeholder="请输入手机验证码">
						<span @click="getSendSmsMobile">获取验证码</span>
					</div>
					
					<div class="lefts"></div>
					<div class="rights">
						<a class="tijiao" href="javascript:void(0)" @click="judegUpdateMobile">提交</a>
					</div>
				</div>
				<div class="changesuccess" v-if="isShow === 2">
					手机绑定成功！
				</div>
			</div>
<!--右侧结束-->
		</div>
		<hr-foot></hr-foot>		
	</div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    @import '~assets/styles/_variables';
 	/*
 	 * 验证身份
 	*/  
 	.danstep {
        margin: 60px 0;
        width: 988px;	
        margin-left: 180px;
 	} 
	.changePsw {
		height: 570px;
	}
	.yanzheng {
		margin-left: 325px;
		width: 500px;
		height: 500px;
		border: 1px solid #e6e6e6e;
		color: @base-color;
		font-size: 0px;
		line-height: 40px;
	}
	.yanzheng .top {
		text-align: left;
	}
	.yanzheng .center {
		text-align: left;
		font-size: 0;
	}
	
	.yanzheng .bottom {
		
	}

	.yanzheng>div>a {
		font-size: 14px;
		margin-left: 5px;
	}
	span {
		display: inline-block;
		font-size: 14px;
	}
	p {
		box-sizing: border-box;
		width: 260px;
		height: 40px;
		border: 1px solid #e6e6e6e;
		margin-left: 20px;
		margin-bottom: 20px;
		text-indent: 20px;
		font-size: 12px;
	}
	.yanzheng>div .sjyzm {
		width: 200px;
		height: 36px;
		font-size: 12px;
		padding-left: 10px;
		border: 1px solid #e6e6e6;
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
		padding-left: 80px;
		margin-top: 10px;
	}
	.nextstep a {
		display: inline-block;
		width: 120px;
		height: 40px;
		background-color:@primary-color;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		color: @white-color;
		border-radius: 5px;	
		margin-top: 15px;	
	}
	
	
	
	/*
	 * 修改密码
	 */	
	 
	.xiugaiPSw {
		margin-top: 60px;
		margin-left: 325px;
		width: 395px;
		height: 170px;
		font-size: 12px;
		color: @base-color;
	}
	.lefts {
		float: left;
		width: 85px;
		height: 40px;
		line-height: 40px;
		margin-bottom: 15px;
		font-size: 14px;
	}
	.rights {
		float: left;
		width: 310px;
		height: 40px;
		line-height: 40px;
		margin-bottom: 15px;
	}
	.rights input {
		box-sizing: border-box;
		padding: 0 15px;
		width: 310px;
		height: 38px;
    border: 1px solid #e6e6e6;
	}
	.inp-btn >input{
		width: 200px;
		height: 38px;
    border: 1px solid #e6e6e6;
	}
	.inp-btn>span {
		display: inline-block;
		text-decoration: none;
		width: 93px;
		height: 38px;
		line-height: 38px;
		margin-left: 10px;
		text-align: center;
		color: #333333;
        border: 1px solid #e6e6e6;
	}
	.rights a {
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
	}	
	.rights a &:last-of-type {
		margin-right: 0;
	}	
	
	
	.changesuccess {
		margin-top: 100px;
		text-align: center;
		font-size: 26px;
		color: @base-color;
	}	
	
		    
</style>  
<script type="text/babel">
    import index from './index'
    export default {
        ...index
    }
</script>